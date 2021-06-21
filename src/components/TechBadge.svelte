<script>
  import { tags } from '../data/projects'

  export let tech
</script>

<style lang="scss">
  a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 0.3rem 0.3rem;
    border-radius: 0.5rem;
    background-color: purple;
    font-size: 0.9rem;
  }
</style>

<a href={tags[tech]} target="_blank" rel="noopener noreferrer">
  {tech}
</a>