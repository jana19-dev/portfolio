<script>
  import PageTitle from '../components/PageTitle.svelte'
</script>

<style lang="scss">
  .content {
    z-index: 2;
    display: flex;
    margin-top: 1%;
    height: 100%;
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
    margin: 0;
    letter-spacing: 0.1rem;
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: normal;
  }
  p {
    color: white;
    font-size: 1.4rem;
  }
  a {
    text-decoration: none;
    color: rgb(223, 182, 48);
    font-weight: bold;
    font-size: 1.6rem;
  }
  .social {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    a {
      font-size: 1.5rem;
    }
  }
  .footer {
    flex: 1;
    display: flex;
    align-items: flex-end;
    margin-bottom: 5rem;
    font-size: 1rem;
  }
</style>

<div class='content contact'>
  <PageTitle title='Get in touch'/>
  <div class="info">
    <h3>I am available for freelancing</h3>
    <p>
      Say <a href="mailTo:jana.stc@gmail.com">Hi</a> or find me on most social media platforms
    </p>
    <div class="social">
      <a href="https://www.linkedin.com/in/jana19/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://github.com/jana19-dev" target="_blank" rel="noopener noreferrer">Github</a>
      <a href="https://www.instagram.com/jana_._._._/" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.facebook.com/Jana.JR.19/" target="_blank" rel="noopener noreferrer">Facebook</a>
    </div>
  </div>
  <p class="footer">Copyright © 2021. All rights reserved</p>
</div>