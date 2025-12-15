'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';

import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { handleResumeAnalysis } from '@/app/actions/resume';

const formSchema = z.object({
  resumeText: z.string().min(100, {
    message: 'Resume text must be at least 100 characters.',
  }),
});

export function ResumeAnalyzer() {
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnalysisResult([]);
    const result = await handleResumeAnalysis(values.resumeText);
    setIsLoading(false);

    if (result.success && result.data) {
      setAnalysisResult(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Analysis Failed',
        description: result.error || 'An unknown error occurred.',
      });
    }
  }

  return (
    <Section id="analyzer">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Resume Analyzer</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Get AI-powered suggestions to improve your resume.
        </p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="resumeText"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Paste your resume text</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Paste the full text of your resume here to get started..."
                          className="min-h-[250px] resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Analyze Resume
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {(isLoading || analysisResult.length > 0) && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="text-primary" />
                Analysis Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex items-center justify-center p-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <ul className="prose prose-sm dark:prose-invert max-w-none list-disc space-y-2 pl-5 font-sans">
                  {analysisResult.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </Section>
  );
}
