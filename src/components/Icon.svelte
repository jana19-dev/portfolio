<script>
  import icons from '../utils/icons'

  export let name
  export let top
  export let left
  export let animate

  const displayIcon = icons.find(icon => icon.name === name)
</script>

<style>
  svg {
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    opacity: 15%;
  }

  .upDown {
    animation: upDown 10s ease-in-out infinite alternate;
  }

  @keyframes upDown {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}

  .upDownReverse {
    animation: upDownReverse 10s ease-in-out infinite alternate;
  }

  @keyframes upDownReverse {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-20px);
		}
	}

  .upDownWide {
    animation: upDownWide 5s ease-in-out infinite alternate;
  }

  @keyframes upDownWide {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(50px);
		}
	}

.upDownWideReverse {
    animation: upDownWideReverse 5s ease-in-out infinite alternate;
  }

  @keyframes upDownWideReverse {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-50px);
		}
	}
</style>

<svg class={animate} viewBox="0 0 128 128" style="top: {top}; left: {left};" >
  {@html displayIcon.svg}
</svg>
