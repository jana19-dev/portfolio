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
</script>


<Parallax sections=4 style="background-color: #141821;" {disabled} bind:this={parallax}>
  <ParallaxLayer offset=1 rate=1 style="background-color: #513dd02e;" />
  <ParallaxLayer offset=2 rate=1 style="background-color: #513dd02e;" />
  <ParallaxLayer offset=3 rate=1 style="background-color: #513dd02e;" />

  <ParallaxLayer offset=0 rate=-0.1> <Intro /> </ParallaxLayer>
  <ParallaxLayer offset=1 rate=-0.1> <Projects /> </ParallaxLayer>
  <ParallaxLayer offset=2 rate=-0.1> <About /> </ParallaxLayer>
  <ParallaxLayer offset=3 rate=-0.1> <Contact /> </ParallaxLayer>

  <ParallaxLayer rate=-1>
    <Icon name="react" top=10% left=5% animate="upDown" />
    <Icon name="svelte" top=5% left=50% animate="upDownWide" />
    <Icon name="confluence" top=60% left=5% animate="upDown" />
    <Navigation {parallax} />
  </ParallaxLayer>  
</Parallax>
