import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ProjectWithSlug, getAllProjects } from '@/lib/projects'

function Project({ project }: { project: ProjectWithSlug }) {
  return (
    <Card as="li" key={project.slug}>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={project.logo} alt="" className="h-8 w-8" unoptimized />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={`/projects/${project.slug}`}>
          {project.title}
        </Card.Link>
      </h2>
      <Card.Description>{project.description}</Card.Description>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Crafting Meaningful Projects.',
}

export default async function Projects() {
  let projects = await getAllProjects()

  return (
    <SimpleLayout
      title="Crafting Meaningful Projects."
      intro="Embarking on a quest to leave a digital legacy, I've dedicated myself to a myriad of projects that stand out in my professional journey."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
