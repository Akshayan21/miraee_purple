import { Container, Section } from '@/components/layout/content-layout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VideoCard } from '@/components/video/video-card'
import { VIDEO_GROUPS } from './videos'

export function VideoLibrarySection() {
  return (
    <Section tone="white" className="mr-section" aria-labelledby="video-library">
      <Container>
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <h2 className="mr-h2 scroll-mt-32 lg:col-span-6" id="video-library">
            Video library
          </h2>
          <p className="m-0 text-[length:var(--mr-fs-lead)] text-content-2 lg:col-span-6">
            Short walkthroughs for the people who set up and run company travel. Pick your role.
          </p>
        </div>

        <Tabs defaultValue={VIDEO_GROUPS[0].role} className="mt-10">
          <TabsList aria-label="Video library roles">
            {VIDEO_GROUPS.map((group) => (
              <TabsTrigger key={group.role} value={group.role}>
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {VIDEO_GROUPS.map((group) => (
            <TabsContent key={group.role} value={group.role}>
              <p className="m-0 mb-6 text-content-2">{group.blurb}</p>
              <ul className="m-0 grid list-none gap-x-6 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
                {group.videos.map((item) => (
                  <VideoCard key={item.id} video={item} />
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </Section>
  )
}
