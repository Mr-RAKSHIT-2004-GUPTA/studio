'use server';

import { optimizeResume } from '@/ai/flows/resume-optimization';

export async function handleResumeAnalysis(resumeText: string) {
  if (!resumeText) {
    return { success: false, error: 'Resume text cannot be empty.' };
  }

  try {
    const result = await optimizeResume({ resumeText });
    return { success: true, data: result.suggestions };
  } catch (error) {
    console.error('Error optimizing resume:', error);
    return { success: false, error: 'Failed to analyze resume. Please try again later.' };
  }
}
