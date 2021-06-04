<script>
  import Icon from './Icon.svelte'
  import { Parallax, ParallaxLayer } from 'svelte-parallax'

  import Navigation from './Navigation.svelte'
  import Intro from '../pages/Intro.svelte'
  import Projects from '../pages/Projects.svelte'
  import About from '../pages/About.svelte'
  import Contact from '../pages/Contact.svelte'

  let parallax
  const disabled = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  import { onMount } from 'svelte'

  const query = '(max-width: 900px)'

  let mql
  let mqlListener
  let wasMounted = false
  let isMobile = window.matchMedia('(max-width: 900px)').matches

  onMount(() => {
    wasMounted = true
    return () => {
      removeActiveListener()
    }
  })

  $: {
    if (wasMounted) {
      removeActiveListener()
      addNewListener(query)
    }
  }

  function addNewListener (query) {
    mql = window.matchMedia(query)
    mqlListener = v => {
      isMobile = v.matches
    }
    mql.addListener(mqlListener)
    isMobile = mql.matches
  }

  function removeActiveListener () {
    if (mql && mqlListener) {
      mql.removeListener(mqlListener)
    }
  }
</script>

<Navigation {parallax} {isMobile} />

<Parallax sections={isMobile ? 10 : 5} style="background-color: #141821;" {disabled} bind:this={parallax}>
  <ParallaxLayer rate=-1>
    <Icon name="react" top=20% left=2% animate="upDownWide" />
    <Icon name="svelte" top=5% left=50% animate="upDownWide" />
    <Icon name="confluence" top=60% left=30% animate="upDownReverse" />
    <Icon name="apache" top=40% left=35% animate="upDownReverse" />
    <Icon name="bash" top=90% left=80% animate="upDownWideReverse" />
    <Icon name="django" top=80% left=25% animate="upDown" />
    <Icon name="docker" top=25% left=25% animate="upDownWideReverse" />
    <Icon name="digitalOcean" top=20% left=60% animate="upDownReverse" />
    <Icon name="figma" top=75% left=40% animate="upDownReverse" />
    <Icon name="firebase" top=90% left=55% animate="upDownWideReverse" />
    <Icon name="gatsby" top=30% left=90% animate="upDownWide" />
    <Icon name="github" top=80% left=70% animate="upDownReverse" />
    <Icon name="gitlab" top=2% left=25% animate="upDown" />
    <Icon name="golang" top=80% left=2% animate="upDownReverseWide" />
    <Icon name="graphQL" top=40% left=7% animate="upDownReverse" />
    <Icon name="heroku" top=40% left=75% animate="upDownReverse" />
    <Icon name="javascript" top=60% left=50% animate="upDown" />
    <Icon name="jenkins" top=5% left=95% animate="upDownWide" />
    <Icon name="laravel" top=65% left=95% animate="upDownReverse" />
    <Icon name="linux" top=55% left=65% animate="upDownReverse" />
    <Icon name="mongoDB" top=15% left=80% animate="upDownWide" />
    <Icon name="mysql" top=15% left=35% animate="upDownWide" />
    <Icon name="nextJS" top=40% left=55% animate="upDownWide" />
    <Icon name="nginx" top=70% left=15% animate="upDown" />
    <Icon name="nodeJS" top=55% left=7% animate="upDownWide" />
    <Icon name="npm" top=45% left=85% animate="upDown" />
    <Icon name="php" top=25% left=45% animate="upDownReverse" />
    <Icon name="postgresql" top=35% left=15% animate="upDownReverse" />
    <Icon name="python" top=25% left=70% animate="upDownWide" />
    <Icon name="rails" top=85% left=35% animate="upDown" />
    <Icon name="redis" top=95% left=15% animate="upDownReverse" />
    <Icon name="redux" top=70% left=85% animate="upDown" />
    <Icon name="ruby" top=95% left=65% animate="upDownReverse" />
    <Icon name="slack" top=70% left=60% animate="upDown" />
    <Icon name="vim" top=90% left=90% animate="upDown" />
    <Icon name="vscode" top=20% left=10% animate="upDownReverse" />
    <Icon name="wordpress" top=10% left=70% animate="upDownReverse" />
  </ParallaxLayer>

  <ParallaxLayer offset=1 rate=1 span={isMobile ? 12 : 3} style="background-color: #513dd02e;" />
  <ParallaxLayer offset={isMobile ? 8 : 3} rate=1 style="background-color: #513dd02e;" />
  <ParallaxLayer offset={isMobile ? 9 : 4} rate=1 style="background-color: #513dd02e;" />

  <ParallaxLayer offset=0 rate=-0.1> <Intro /> </ParallaxLayer>
  <ParallaxLayer offset=1 rate=-0.1 span={isMobile ? 9 : 3}> <Projects /> </ParallaxLayer>
  <ParallaxLayer offset={isMobile ? 8 : 3} rate=-0.1> <About /> </ParallaxLayer>
  <ParallaxLayer offset={isMobile ? 9 : 4} rate=-0.1> <Contact /> </ParallaxLayer>
</Parallax>
