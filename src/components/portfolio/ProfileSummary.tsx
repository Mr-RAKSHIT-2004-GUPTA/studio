import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

import { Section } from '@/components/common/Section';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/portfolio-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ProfileSummary() {
  const avatarImage = PlaceHolderImages.find(img => img.id === 'avatar');

  return (
    <Section id="about" className="pt-24 sm:pt-32">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            {avatarImage && (
              <Image
                src={avatarImage.imageUrl}
                alt="Rakshit's Avatar"
                width={400}
                height={400}
                data-ai-hint={avatarImage.imageHint}
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            )}
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            I’m {personalInfo.name}.
            <br />
            {personalInfo.title}.
          </h1>
          <div className="mt-6 space-y-7 text-base text-muted-foreground">
            <p>{personalInfo.summary}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {personalInfo.socials.map((social) => (
              <Button key={social.url} variant="outline" size="icon" asChild>
                <Link href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
             <Button asChild>
                <Link href="/resume/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
