import { Header } from '@/components/portfolio/Header';
import { ProfileSummary } from '@/components/portfolio/ProfileSummary';
import { SkillsShowcase } from '@/components/portfolio/SkillsShowcase';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import { ProjectsGallery } from '@/components/portfolio/ProjectsGallery';
import { ResumeAnalyzer } from '@/components/portfolio/ResumeAnalyzer';
import { Footer } from '@/components/portfolio/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <ProfileSummary />
        <SkillsShowcase />
        <ExperienceTimeline />
        <ProjectsGallery />
        <ResumeAnalyzer />
      </main>
      <Footer />
    </div>
  );
}
