/**
*  Validations for any forms should be added like this
* create seperate file for each form validation */

import { z } from 'zod';

export const exampleSchema = z.object({
    name: z.string().min(1, "Name is required"),
    age: z.number().int().positive("Age must be a positive integer"),
    email: z.string().email("Invalid email address"),
});
