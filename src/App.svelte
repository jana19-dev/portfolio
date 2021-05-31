<script>
  import Parallax from './components/Parallax.svelte'
</script>

<style>
  /* global styles */
  :global(body) {
    margin: 0px;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  :global(::-webkit-scrollbar) {
    width: 6px;
    height: 6px;
	}
  :global(::-webkit-scrollbar-track) {
    background: #141821;
  }
  :global(::-webkit-scrollbar-thumb) {
    background: #30343b;
    border-radius: 10px;
  }
  :global(*) {
    scrollbar-width: thin;
    scrollbar-color: #30343b transparent;
  }

</style>

<Parallax />