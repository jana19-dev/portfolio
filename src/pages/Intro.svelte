<script>
  import { ParallaxLayer } from 'svelte-parallax'

</script>

<style>
  .content {
    padding-left: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    .content {
      padding: 5%;
      margin-top: 20%;
      justify-content: flex-start;
    }
  }

  h1 {
    color: white;
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
  }

  p {
    color: white;
    font-size: 1.5rem;
    margin: 0px;
    letter-spacing: 0.1rem;
  }
</style>

<ParallaxLayer 
  offset=0
  rate=-0.1
  style=""
>
  <div class='content intro'>
    <h1>Hi, I'm Jana Rajakumar</h1>
    <p>Full Stack Developer</p>
  </div>
</ParallaxLayer>