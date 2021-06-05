<script>
  export let title
</script>

<style lang="scss">
  h2 {
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
    align-self: flex-start;
    padding-left: 10rem;
    @media only screen and (max-width: 900px) {
      padding-left: 1rem;
    }
  }
</style>

<h2>{title}</h2>