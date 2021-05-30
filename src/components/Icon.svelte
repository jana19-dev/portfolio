<script>
  import icons from '../utils/icons'

  export let name
  export let top
  export let left

  const className = `${$$props.class} absolute w-12 h-12 inset-0`
  const displayIcon = icons.find(icon => icon.name === name)
</script>

<svg class={className} viewBox="0 0 128 128" style="top: {top}; left: {left}; z-index: 1; opacity: 35%;" >
  {@html displayIcon.svg}
</svg>
