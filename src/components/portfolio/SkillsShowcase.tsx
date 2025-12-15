import { Section } from '@/components/common/Section';
import { skills } from '@/lib/portfolio-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function SkillsShowcase() {
  return (
    <Section id="skills" className="bg-muted/40 dark:bg-card">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My technical toolbox for building intelligent solutions.
        </p>
      </div>
      <div className="mt-12 max-w-4xl mx-auto">
        <Tabs defaultValue={skills[0].category} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {skills.map((skillCategory) => (
              <TabsTrigger key={skillCategory.category} value={skillCategory.category}>
                {skillCategory.category}
              </TabsTrigger>
            ))}
          </TabsList>
          {skills.map((skillCategory) => (
            <TabsContent key={skillCategory.category} value={skillCategory.category}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <skillCategory.icon className="h-6 w-6 text-primary" />
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skillCategory.items.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <h3 className="font-medium">{skill.name}</h3>
                        <div className="flex items-center gap-4">
                          <Progress value={skill.proficiency} className="w-full h-3" />
                          <span className="text-sm font-semibold text-muted-foreground">
                            {skill.proficiency}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Section>
  );
}
