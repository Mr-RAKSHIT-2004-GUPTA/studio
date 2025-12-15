import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { projects } from '@/lib/portfolio-data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ProjectsGallery() {
  return (
    <Section id="projects" className="bg-muted/40 dark:bg-card">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of projects I've worked on.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  View on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
