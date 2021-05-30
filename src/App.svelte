<script>
  import Icon from './components/Icon.svelte'
  import { Parallax, ParallaxLayer} from 'svelte-parallax'
	
	let parallax
	let disabled = window.matchMedia("(prefers-reduced-motion: reduce)").matches
</script>

<Parallax sections=3 style="background-color: #141821;" {disabled} bind:this={parallax}>
  <Icon name="react" top=10% left=5% class="animate-upDown" />
    <Icon name="svelte" top=5% left=50% class="animate-upDownWide" />
    <Icon name="confluence" top=60% left=5% class="animate-upDown" />

		<ParallaxLayer offset=1 rate=1 style="background-color: #513dd06e;" />

    <ParallaxLayer 
      offset=0
      rate=-0.1
      style="display: flex; justify-content: center; flex-direction: column; padding-left: 10%; height: 100%;"
    >
      <h1 class="text-white text-2xl md:text-6xl font-bold mb-8 tracking-wider">Hi, I'm Jana Rajakumar</h1>
      <p class="text-white text-lg md:text-xl tracking-wide">Full Stack Developer</p>
      <div class="">
        <button
          class="intro absolute self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full bottom-0 z-10 pointer-events-none" 
          on:click={() => parallax.scrollTo(2, {selector: '.projects'})}
          on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, {selector: '.projects'})}
          tabindex=0
        >
          Projects
        </button>
      </div>
    </ParallaxLayer>

    <ParallaxLayer 
      offset=1
      rate=-0.1
      style="display: flex; justify-content: center; flex-direction: column; padding-left: 10%;"
    >
      <h1 class="text-white text-2xl md:text-6xl font-bold mb-8 tracking-wider">Hi, I'm Jana Rajakumar</h1>
      <p class="text-white text-lg md:text-xl tracking-wide">Full Stack Developer</p>
      <button
				class="projects" 
				style="width: 20%;" 
        on:click={() => parallax.scrollTo(2, {selector: '.intro'})}
			  on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, {selector: '.intro'})}
		    tabindex=0
			>
        Next
      </button>
    </ParallaxLayer>

</Parallax>
<!-- <div class="h-screen">
  <header class="h-full flex flex-col items-center justify-center">
    <img src="/logo.svg" class="h-32 mb-12 animate-logo" alt="logo" />
    <Icon name="bash" class="w-16 h-16" />
    <p class="m-2 text-2xl"><code class="bg-gray-300 px-2 py-1 rounded-md uppercase">Jana Rajakumar</code></p>
  </header>
</div> -->
