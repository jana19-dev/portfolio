import { type Metadata } from 'next'

import Image, { type ImageProps } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type Work, getAllWorks } from '@/lib/works'

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Work({ work }: { work: Work }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title>
          {work.title} <br />
          <Card.Eyebrow>{work.company}</Card.Eyebrow>
        </Card.Title>
        <Card.Eyebrow className="md:hidden" decorate>
          {work.fromDate} - {work.toDate}
        </Card.Eyebrow>
        <Card.Description>
          <div dangerouslySetInnerHTML={{ __html: `${work.description}` }} />
        </Card.Description>
        <a href={work.link.href}>
          <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            <LinkIcon className="h-6 w-6 flex-none" />
            <span className="ml-2">{work.link.label}</span>
          </div>{' '}
        </a>
      </Card>
      <Card.Eyebrow className="mt-1 hidden md:block ">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image src={work.logo} alt="" className="h-7 w-7" unoptimized />
        </div>
        {work.fromDate} - {work.toDate}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Work',
  description:
    "Throughout my career, I've embraced diverse roles, leaving a meaningful imprint on projects I hold dear.",
}

export default async function WorksIndex() {
  let works = await getAllWorks()

  return (
    <SimpleLayout
      title="A Snapshot of My Career."
      intro="Throughout my career, I've embraced diverse roles, leaving a meaningful imprint on projects I hold dear."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {works.map((work, idx) => (
            <Work key={idx} work={work} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
