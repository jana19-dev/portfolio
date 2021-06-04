<script>
  import TechBadge from './TechBadge.svelte'

  export let project
</script>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    background: linear-gradient(316deg, #381570d0 0%, #5f0f40c9);
    color: white;
    max-width: 450px;
    border-radius: 1rem;
    padding: 2rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
      color: white;
      transform: translateY(-0.2rem);
    }
    @media only screen and (max-width: 900px) {
      padding: 1rem;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    img {
      height: 5rem;
      width: 7rem;
      border-radius: 1rem;
      @media only screen and (max-width: 900px) {
        height: 2.5rem;
        max-width: 3.5rem;
      }
    }
  }
  h3 {
    margin: 0;
    font-size: 2rem;
    margin-bottom: 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }
  h4 {
    margin: 0;
    font-weight: normal;
  }
  p {
    margin: 0;
    margin: 1rem 0;
    font-size: 1.2rem;
    color: rgb(196, 196, 196);
    line-height: 2rem;
  }
  .tech {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .links {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-top: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    color: white;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    background-color: rgb(85, 30, 85);
    height: 2rem;
    &:hover {
      background-color: rgb(107, 24, 107);
    }
    svg {
      width: 1rem;
      margin-right: 0.5rem;
      fill: white;
    }
  }
</style>

<div class="card">
  <div class="header">
    <div>
      <h3>{project.title}</h3>
      <h4>{project.date} | {project.subTitle}</h4>
      <div class="links">
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          <span>GITHUB</span>
        </a>
        <a href={project.web} target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Earth</title><path d="M12 0c-1.326 0-2.597.22-3.787.613 4.94-1.243 8.575 1.72 11.096 5.606 1.725 2.695 2.813 2.83 4.207 2.412A11.956 11.956 0 0012 0zM7.658 2.156c-1.644.019-3.295.775-4.931 2.207A11.967 11.967 0 000 12c.184-2.823 2.163-5.128 4.87-5.07 2.104.044 4.648 1.518 7.13 5.289 4.87 7.468 10.917 5.483 11.863 1.51.081-.566.137-1.14.137-1.729 0-.176-.02-.347-.027-.521-1.645 1.725-4.899 2.35-8.264-2.97-2.59-4.363-5.31-6.383-8.05-6.353zM3.33 13.236c-1.675.13-2.657 1.804-2.242 3.756A11.955 11.955 0 0012 24c4.215 0 7.898-2.149 10.037-5.412v-.043c-2.836 3.49-8.946 4.255-13.855-2.182-1.814-2.386-3.544-3.228-4.852-3.127Z"/></svg>
          <span>WEBSITE</span>
        </a>
      </div>
    </div>
    <img src="projects/{project.poster}" alt="donkey" />
  </div>
  <p>{project.description}</p>
  <div class="tech">
    {#each project.tech as tech }
      <TechBadge {tech} />
    {/each}
  </div>
</div>