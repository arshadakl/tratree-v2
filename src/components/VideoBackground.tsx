'use client';

import Hls from 'hls.js';
import React, { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  url: string;
}

export function VideoBackground({ url }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: false,
        maxMaxBufferLength: 30,
        maxBufferLength: 20,
        maxBufferSize: 60 * 1024 * 1024, // 60MB
      });

      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        // Switch to the highest quality level
        hls.currentLevel = hls.levels.length - 1;
        video.play().catch(console.error);
      });

      hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              break;
          }
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari/iOS)
      video.src = url;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(console.error);
      });
    }
  }, [url]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-cover z-0 transform-gpu pointer-events-none"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}
