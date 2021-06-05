<script>
  import PageTitle from '../components/PageTitle.svelte'
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
  .info {
    width: 100%;
    max-width: 900px;
  }
  h3 {
    letter-spacing: 0.2rem;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
  ul {
    color: white;
    font-size: 1.2rem;
  }
  li {
    margin: 1rem 0;
    a {
      text-decoration: none;
      color: rgb(223, 182, 48);
      font-weight: bold;
      letter-spacing: 0.1rem;
    }
  }
</style>

<div class='content about'>
  <PageTitle title='About Me'/>
  <div class="info">
    <h3>Developer | Tech Enthusiast | Freelancer | Traveller | Foodie</h3>
    <ul>
      <li>Director of <a target="_blank" rel="noreferrer noopener" href='https://codepiercer.org/'> CODEPIERCER</a></li>
      <li>I currently work at the University of Toronto Libraries</li>
      <li>I'm passionate about creating great product experiences with clean and maintainable code</li>
      <li>Love working with Javascript</li>
      <li>Heavy user of Docker</li>
      <li>Board games enthusiast</li>
      <li>Fan of <a target="_blank" rel="noreferrer noopener" href='https://syntax.fm/'> SyntaxFM</a> podcast</li>
      <li>Favourite Tech Youtubers: <a target="_blank" rel="noreferrer noopener" href=' https://www.youtube.com/user/marquesbrownlee'> MKBHD </a> | <a target="_blank" rel="noreferrer noopener" href=' https://www.youtube.com/channel/UCVYamHliCI9rw1tHR1xbkfw'> Dave Lee </a> | <a target="_blank" rel="noreferrer noopener" href=' https://www.youtube.com/user/wesbos'> Wes Bos </a> | <a target="_blank" rel="noreferrer noopener" href=' https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg'> LevelUpTuts </a></li>
    </ul>
  </div>

</div>
