<script>
  import { onMount } from 'svelte'

  export let parallax

  let active = ''

  onMount(() => {
    setTimeout(() => active = 'active', 200)
  })

  const toggleMenu = () => {
    active = active ? '' : 'active'
  }

  let y

  $: if (y > 200) {
    setTimeout(() => active = '', 200)
  }
</script>

<style>
  .menu-item {
    border: none;
    background-color: hsla(0,0%,0%,.1);
    cursor: pointer;
  }

  .circular-menu {
    position: fixed;
    bottom: 1rem;
    right: 1em;
  }

  .floating-btn {
    margin-right: 0.05rem;
    margin-top: 0.05rem;
    width: 4em;
    height: 4em;
    border-radius: 50%;
    background-color: hsl(4, 98%, 60%);
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
    background-color: hsl(4, 98%, 60%);
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
    transform: translate3d(1em,-7em,0);
  }

  .circular-menu.active .menu-item:nth-child(2) {
    transform: translate3d(-3.5em,-6.3em,0);
  }

  .circular-menu.active .menu-item:nth-child(3) {
    transform: translate3d(-6.5em,-3.2em,0);
  }

  .circular-menu.active .menu-item:nth-child(4) {
    transform: translate3d(-7em,1em,0);
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
      on:click={() => parallax.scrollTo(1, {selector: '.intro'})}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(1, {selector: '.intro'})}
    >
      H
    </button>
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(2, {selector: '.projects'})}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(2, {selector: '.projects'})}
    >
      P
    </button>
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(3, {selector: '.about'})}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(3, {selector: '.about'})}
    >
      A
    </button>
    <button
      class="menu-item"
      on:click={() => parallax.scrollTo(4, {selector: '.contact'})}
      on:keyup={(e) => e.key === 'Enter' && parallax.scrollTo(4, {selector: '.contact'})}
    >
      C
  </button>
  </menu>

</div>


