<template>
    <nav>
        <div id="NavPageContainer">
            <div id="logoContainer">
              <span id="headLogo">alpha</span>
              <span id="footLogo">graphics</span>
            </div>
            <div style="color: #00c9ff">Portofolio</div>
            <div>About</div>
            <div>Contact</div>
        </div>
        <div>
          <social></social>
        </div>
    </nav>

</template>

<script>
import social from './Social.vue'
export default {
  name: 'Navigation',
  components:{
    social,
  }
}
</script>
<style scoped>
    nav{
        display: flex;
        justify-content: space-around;
        height: 4rem;
    }

    nav div{
      height: fit-content;
      height: -moz-fit-content;
      margin: auto 1em;
    }

    #NavPageContainer{
      display: flex;
    }

    #logoContainer{
      display: flex;
      flex-direction: column;
      margin-bottom: .5rem;
    }

    #headLogo{
      font-weight: bold;
      letter-spacing: 2px;
      font-size: 1.5rem;
    }

    #footLogo{
      text-transform: capitalize;
      font-size: .7rem;
      color: #00c9ff;
      position: absolute;
      top: 2.3rem;
      margin-left: 2rem;
    }
</style>