<script>
  import PageTitle from '../components/PageTitle.svelte'
  import ProjectCard from '../components/ProjectCard.svelte'
  import projects from '../data/projects.js'
</script>

<style lang="scss">
  .content {
    z-index: 2;
    display: flex;
    margin-top: 1%;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    @media only screen and (max-width: 900px) {
      padding: 2rem;
    }
  }
  .projects-grid {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class='content projects'>
  <PageTitle title='Recent Projects'/>
  <div class='projects-grid'>
    {#each projects as project (project.title)}
      <ProjectCard {project} />
    {/each}
  </div>
</div>
