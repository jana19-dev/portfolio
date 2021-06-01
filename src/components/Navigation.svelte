<script>
  import { onMount } from 'svelte'

  export let parallax

  let active = ''
  let timer
  let y = 0
  let lastY = 0

  onMount(() => {
    lastY = y
    timer = setTimeout(() => {
      active = 'active'
    }, 200)
  })

  const toggleMenu = () => {
    lastY = y
    active = active ? '' : 'active'
  }

  $: if (active && Math.abs(y - lastY) > 300) {
    lastY = y
    clearTimeout(timer)
    timer = setTimeout(() => {
      active = ''
    }, 200)
  }
</script>

<style lang="scss">
  .menu-item {
    border: none;
    background-color: hsla(0,0%,0%,.1);
    cursor: pointer;
    svg {
      width: 1.5rem;
      height: 100%;
      text-align: center;
      fill: white;
    }
  }

  .circular-menu {
    position: fixed;
    top: 1rem;
    left: 1em;
  }

  .floating-btn {
    margin-right: 0.05rem;
    margin-top: 0.05rem;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    background-color: hsl(251, 47%, 43%);
    color: hsl(0, 0%, 100%);
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
  }

  .floating-icon {
    width: 100%;
    height: 100%;
  }

  .circular-menu.active .floating-btn {
    box-shadow: inset 0 0 4px hsla(0, 0%, 0%, .3);
    background-color: hsl(252, 42%, 22%);
  }

  .circular-menu.active .floating-btn:hover {
    background-color: hsla(0,0%,0%,.3);
  }

  .circular-menu .floating-btn:active {
    box-shadow: 0 4px 8px 0 hsla(0, 0%, 0%, .4);
  }

  .circular-menu .floating-btn svg {
    font-size: 1.3em;
    transition: transform .2s;  
  }

  .circular-menu.active .floating-btn svg {
    transform: rotate(-45deg);
  }

  .circular-menu:after {
    display: block;
    content: ' ';
    width: 3.5em;
    height: 3.5em;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    background-color: hsl(256, 55%, 38%);
    transition: all .3s ease;
  }

  .circular-menu.active:after {
    transform: scale3d(5.5, 5.5, 1);
    transition-timing-function: cubic-bezier(.68, 1.55, .265, 1);
  }

  .circular-menu .items-wrapper {
    padding: 0;
    margin: 0;
  }

  .circular-menu .menu-item {
    position: absolute;
    top: .2em;
    right: .2em;
    z-index: -1;
    display: block;
    text-decoration: none;
    color: hsl(0, 0%, 100%);
    font-size: 1em;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    text-align: center;
    line-height: 3;
    background-color: hsla(0,0%,0%,.5);
    transition: transform .3s ease, background .2s ease;
  }

  .circular-menu .menu-item:hover {
    background-color: hsla(0,0%,0%,.3);
  }

  .circular-menu.active .menu-item {
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .circular-menu.active .menu-item:nth-child(1) {
    transform: translate3d(7.5em, -0.5em, 0);
  }

  .circular-menu.active .menu-item:nth-child(2) {
    transform: translate3d(6.5em, 3.5em, 0);
  }

  .circular-menu.active .menu-item:nth-child(3) {
    transform: translate3d(3.5em, 6.5em, 0);
  }

  .circular-menu.active .menu-item:nth-child(4) {
    transform: translate3d(-0.5em, 7.5em, 0);
  }
</style>

<svelte:window bind:scrollY={y}/>

<div class="circular-menu {active}">

  <button class="floating-btn" on:click={toggleMenu}>
    <svg class="floating-icon" fill='white' viewBox="0 0 5 5">
      <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" />
    </svg>
  </button>

  <menu class="items-wrapper">
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(1, { selector: '.intro' })}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(1, { selector: '.intro' })}
    >
      <svg viewBox="0 0 1024 1024" style="width: 1.9rem;">
        <path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z" />
      </svg>
    </button>
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(2, { selector: '.projects' })}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, { selector: '.projects' })}
    >
      <svg viewBox="0 0 24 24">
        <path d='M9,15 L9,23 L1,23 L1,15 L9,15 Z M23,15 L23,23 L15,23 L15,15 L23,15 Z M9,1 L9,9 L1,9 L1,1 L9,1 Z M23,1 L23,9 L15,9 L15,1 L23,1 Z' />
      </svg>
    </button>
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(3, { selector: '.about' })}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(3, { selector: '.about' })}
    >
      <svg viewBox="0 0 24 24">
          <g>
              <path fill="none" d="M0 0h24v24H0z"/>
              <path d="M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
          </g>
      </svg>
    </button>
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(4, { selector: '.contact' })}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(4, { selector: '.contact' })}
    >
      <svg viewBox="0 0 192 512" style="width: 0.6rem;">
        <path d="M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"/>
      </svg>
  </button>
  </menu>

</div>


