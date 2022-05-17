export const tags = {
  svelte: 'https://svelte.dev/',
  react: 'https://reactjs.org/',
  nextJS: 'https://nextjs.org/',
  prisma: 'https://www.prisma.io/',
  graphQL: 'https://graphql.org/',
  apollo: 'https://www.apollographql.com/',
  firebase: 'https://firebase.google.com/',
  twillio: 'https://www.twilio.com/',
  'docker-swarm': 'https://docs.docker.com/engine/swarm/',
  'chakra-ui': 'https://chakra-ui.com/',
  netlify: 'https://www.netlify.com/',
  dgraph: 'https://dgraph.io/',
  golang: 'https://golang.org/',
  'gitlab-ci': 'https://docs.gitlab.com/ee/ci/',
  docker: 'https://www.docker.com/',
  laravel: 'https://laravel.com/',
  php: 'https://www.php.net/',
  perl: 'https://www.perl.org/',
  gatsby: 'https://www.gatsbyjs.com/',
  sanity: 'https://www.sanity.io/',
  'rss-feed': 'https://en.wikipedia.org/wiki/RSS',
  ruby: 'https://www.ruby-lang.org/en/',
  rails: 'https://rubyonrails.org/',
  jenkins: 'https://www.jenkins.io/',
  python: 'https://www.python.org/',
  django: 'https://www.djangoproject.com/',
  swagger: 'https://swagger.io/',
  heroku: 'https://www.heroku.com/',
  gcp: 'https://console.developers.google.com/'
}

export default [
  {
    title: 'Saporoso',
    subTitle: '@Director',
    date: 'May 2022 - Present',
    poster: 'saporoso.png',
    tech: ['svelte', 'tailwindCSS', 'sveltekit', 'planetscale', 'vercel'],
    github: 'https://github.com/saporoso/saporoso',
    web: 'https://saporoso.ca',
    description: 'An Italian & South Asian Cuisine - Takeout & Catering restaurant. Primary lead developer for all web services - online ordering, inventory management, self-checkout kiosk, signage and any more to come.'
  },
  {
    title: 'Treelative',
    subTitle: '@Hobby',
    date: 'May 2021 - Present',
    poster: 'treelative.jpg',
    tech: ['svelte', 'react', 'prisma', 'graphQL', 'apollo', 'gcp'],
    github: 'https://github.com/J2A-org/treelative',
    web: 'http://treelative.com',
    wip: true,
    description: 'An attempt to vizualize my family members with an interactive graph network. Featuring multiple layouts, insights and statistics, stories updates, video chatting room, reminders, ...etc'
  },
  {
    title: 'Billing',
    subTitle: '@Freelance',
    date: 'Jan 2021 - Present',
    poster: 'billing.jpg',
    tech: ['react', 'nextJS', 'apollo', 'prisma', 'graphQL', 'twillio', 'docker-swarm'],
    web: 'https://tvupweb.com/services',
    description: 'An admin billing dashboard with features to manage multiple services, customers, on-demand PDF reports and staffs with multiple authorization levels and an internal chat application.'
  },
  {
    title: 'Donkey',
    subTitle: '@Hobby',
    date: 'Mar - Apr 2021',
    poster: 'donkey.jpg',
    tech: ['react', 'chakra-ui', 'firebase', 'netlify'],
    github: 'https://github.com/Crazy-Corders/donkey',
    web: 'https://donkey.jana19.dev',
    description: 'Implementation of the popular card game Donkey - race to empty your cards in hand before others. Play online with upto 12 players simultaneously.'
  },
  {
    title: 'Codenames',
    subTitle: '@Hobby',
    date: 'Jan - Feb 2021',
    poster: 'codenames.jpg',
    tech: ['react', 'chakra-ui', 'firebase', 'netlify'],
    github: 'https://github.com/jana19-dev/codenames',
    web: 'https://codenames.jana19.dev',
    description: 'Implementation of the popular board game Codenames - finding detectives (i.e., words) from a set related to a hint given by the spy-master.'
  },
  {
    title: 'MyMedia',
    subTitle: '@University of Toronto',
    date: 'Jul 2019 - Present',
    poster: 'mymedia.jpg',
    tech: ['react', 'dgraph', 'graphQL', 'golang', 'gitlab-ci', 'docker'],
    github: '',
    web: 'https://mymedia.library.utoronto.ca',
    description: 'MyMedia provides an archival storage and streaming solution for the University of Toronto\'s media content. We provide an interface for uploading, managing and sharing your media.'
  },
  {
    title: 'LEME',
    subTitle: '@University of Toronto',
    date: 'Apr - Oct 2018',
    poster: 'leme.jpg',
    tech: ['laravel', 'php', 'react', 'perl', 'gitlab-ci'],
    web: 'https://leme.library.utoronto.ca',
    description: 'LEME searches and displays word-entries from monolingual English dictionaries, bilingual lexicons, technical vocabularies and other encyclopedic-lexical words, 1480-1755.'
  },
  {
    title: 'NCDS',
    subTitle: '@Freelance',
    date: 'May - Aug 2018',
    poster: 'ncds.jpg',
    tech: ['gatsby', 'sanity', 'rss-feed', 'netlify'],
    github: 'https://github.com/jana19-dev/ncds_v2',
    web: 'https://nainativucds.org',
    description: 'CMS for the Nainativu Canadian Development Society. Built with GatsbyJS, SanityJS and hosted with Netlify CMS.'
  },
  {
    title: 'viscodex',
    subTitle: '@University of Toronto',
    date: 'Jun 2017 - Mar 2018',
    poster: 'viscodex.jpg',
    tech: ['react', 'ruby', 'rails', 'jenkins'],
    github: 'https://github.com/utlib/VisualCollation',
    web: 'https://viscodex.library.utoronto.ca',
    description: 'VisCodex is a tool for building models of the physical collation of manuscripts and then visualizing them in various ways.'
  },
  {
    title: 'IIIF API',
    subTitle: '@University of Toronto',
    date: 'Nov 2016 - Oct 2017',
    poster: 'iiif.jpg',
    tech: ['python', 'django', 'swagger', 'jenkins'],
    github: 'https://github.com/utlib/utl_iiif_api',
    web: 'https://iiif.library.utoronto.ca/presentation/v2',
    description: 'Implementation of the IIIF Presentation API 2.1 which describes how the structure and layout of a complex image-based object can be made available in a standard manner.'
  },
  {
    title: 'Budget',
    subTitle: '@Hobby',
    date: 'May - Jul 2016',
    poster: 'budget.jpg',
    tech: ['python', 'django', 'heroku'],
    github: 'https://github.com/jana19-dev/personal_budget_old',
    web: 'https://personal-budget.herokuapp.com',
    description: 'Creating monthly budgets, carry forwarding balances, adding transactions and transfers, viewing reports and adding multiple financial accounts and cash accounts. Demo (piedpiper / johncena).'
  }
]
