// src/ai/flows/resume-optimization.ts
'use server';
/**
 * @fileOverview A flow that takes a resume as input and provides suggestions on how to improve it.
 *
 * - optimizeResume - A function that handles the resume optimization process.
 * - OptimizeResumeInput - The input type for the optimizeResume function.
 * - OptimizeResumeOutput - The return type for the optimizeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeResumeInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to be optimized.'),
});
export type OptimizeResumeInput = z.infer<typeof OptimizeResumeInputSchema>;

const OptimizeResumeOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of actionable suggestions to improve the resume.'),
});
export type OptimizeResumeOutput = z.infer<typeof OptimizeResumeOutputSchema>;

export async function optimizeResume(input: OptimizeResumeInput): Promise<OptimizeResumeOutput> {
  return optimizeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeResumePrompt',
  input: {schema: OptimizeResumeInputSchema},
  output: {schema: OptimizeResumeOutputSchema},
  prompt: `You are an expert resume optimization consultant acting as a hiring manager for data science roles.

  Review the following resume and provide a list of actionable suggestions to improve its chances of success.
  Focus on areas like clarity, impact, keywords, and overall presentation.

  Resume:
  {{resumeText}}`,
});

const optimizeResumeFlow = ai.defineFlow(
  {
    name: 'optimizeResumeFlow',
    inputSchema: OptimizeResumeInputSchema,
    outputSchema: OptimizeResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
