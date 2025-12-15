import Link from 'next/link';
import { Section } from '@/components/common/Section';
import { projects } from '@/lib/portfolio-data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HuggingFaceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M416 256c0 98.4-56.3 181.8-135.3 221.3c-2.3 .9-4.7 1.3-7.1 1.3s-4.9-.4-7.1-1.3C87.3 437.8 32 354.4 32 256c0-92.7 51.3-172.9 127.1-215.9c4.3-2.5 9.5-2.5 13.8 0C248.7 83.1 300 163.3 300 256c0 98.4-56.3 181.8-135.3 221.3c-2.3 .9-4.7 1.3-7.1 1.3s-4.9-.4-7.1-1.3C71.3 437.8 16 354.4 16 256c0-92.7 51.3-172.9 127.1-215.9c4.3-2.5 9.5-2.5 13.8 0C225.1 83.3 288 165.7 288 256c0 98.4-56.3 181.8-135.3 221.3c-2.3 .9-4.7 1.3-7.1 1.3s-4.9-.4-7.1-1.3C67.3 437.8 0 354.4 0 256c0-128.4 96.2-234.3 219.6-253.5c6.3-1 12.8-1 19.1 0C352.2 21.7 448 127.6 448 256c0 98.4-56.3 181.8-135.3 221.3c-2.3 .9-4.7 1.3-7.1 1.3s-4.9-.4-7.1-1.3c-79-39.5-135.3-122.9-135.3-221.3c0-92.7 51.3-172.9 127.1-215.9c4.3-2.5 9.5-2.5 13.8 0C364.7 83.1 416 163.3 416 256zM152 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-72 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-48 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
    </svg>
)

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
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              <Button asChild className="w-full" variant="outline">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" />
                  View on GitHub
                </Link>
              </Button>
              {project.huggingFaceLink && (
                  <Button asChild className="w-full" variant="outline">
                    <Link href={project.huggingFaceLink} target="_blank" rel="noopener noreferrer">
                      <HuggingFaceIcon className="mr-2 h-4 w-4 fill-current" />
                      View on Hugging Face
                    </Link>
                  </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
