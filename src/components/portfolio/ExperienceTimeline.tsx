import { Section } from '@/components/common/Section';
import { experiences } from '@/lib/portfolio-data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <Section id="experience">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Work Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My professional journey and contributions.
        </p>
      </div>
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary/20">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-8">
              <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-8 ring-background">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </span>
              <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="font-medium text-accent">{exp.company}</CardDescription>
                    </div>
                    <time className="text-sm font-medium leading-none text-muted-foreground whitespace-nowrap">{exp.period}</time>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
