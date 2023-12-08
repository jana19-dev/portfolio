import glob from 'fast-glob'

export interface Work {
  company: string
  title: string
  logo: string
  description: string
  fromDate: string
  toDate: string
  link: {
    href: string
    label: string
  }
}

async function importWork(workFilename: string): Promise<Work> {
  let { work } = (await import(`../app/work/${workFilename}`)) as {
    default: React.ComponentType
    work: Work
  }

  return work
}

export async function getAllWorks() {
  let workFilenames = await glob('*.mdx', {
    cwd: './src/app/work',
  })

  let works = await Promise.all(workFilenames.map(importWork))

  return works.sort((a, z) => +new Date(z.fromDate) - +new Date(a.fromDate))
}
