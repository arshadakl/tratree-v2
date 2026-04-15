'use client';

import Hls from 'hls.js';
import React, { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  posterUrl?: string;
  url: string;
}

export function VideoBackground({ posterUrl, url }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    let hls: Hls | null = null;
    let fallbackTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const markReady = () => {
      setIsReady(true);
      setShowFallback(false);
    };

    const markPending = () => {
      setIsReady(false);
      setShowFallback(true);
    };

    const handleVideoError = () => {
      setIsReady(false);
      setShowFallback(true);
    };

    setIsReady(false);
    setShowFallback(Boolean(posterUrl));
    fallbackTimeoutId = setTimeout(() => {
      setShowFallback(true);
    }, 250);

    video.addEventListener('loadeddata', markReady);
    video.addEventListener('canplay', markReady);
    video.addEventListener('error', handleVideoError);

    if (Hls.isSupported()) {
      hls = new Hls({
        capLevelToPlayerSize: false,
        maxMaxBufferLength: 30,
        maxBufferLength: 20,
        maxBufferSize: 60 * 1024 * 1024, // 60MB
      });

      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Keep adaptive bitrate enabled so slow connections can start faster.
        hls!.currentLevel = -1;
        video.play().catch(console.error);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          markPending();

          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls!.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls!.recoverMediaError();
              break;
            default:
              hls!.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari/iOS)
      video.src = url;

      const handleLoadedMetadata = () => {
        video.play().catch(console.error);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      return () => {
        if (fallbackTimeoutId) {
          clearTimeout(fallbackTimeoutId);
        }

        video.removeEventListener('loadeddata', markReady);
        video.removeEventListener('canplay', markReady);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }

    return () => {
      if (fallbackTimeoutId) {
        clearTimeout(fallbackTimeoutId);
      }

      video.removeEventListener('loadeddata', markReady);
      video.removeEventListener('canplay', markReady);
      video.removeEventListener('error', handleVideoError);
      hls?.destroy();
    };
  }, [posterUrl, url]);

  return (
    <>
      {showFallback && (
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${isReady ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundColor: '#050805',
            backgroundImage: posterUrl
              ? `linear-gradient(to bottom, rgba(3, 8, 5, 0.22), rgba(3, 8, 5, 0.7)), url("${posterUrl}")`
              : 'radial-gradient(circle at 50% 30%, rgba(54, 140, 251, 0.22), rgba(5, 8, 5, 0.95) 55%)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 z-0 h-full w-full object-cover transform-gpu pointer-events-none transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </>
  );
}
