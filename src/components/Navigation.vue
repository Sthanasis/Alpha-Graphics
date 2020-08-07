<template>
    <nav>
        <div id="NavPageContainer">
            <div id="logoContainer" class="navDestination">
              <span id="headLogo">alpha</span>
              <span id="footLogo">graphics</span>
            </div>
            <div class="navDestination">Portofolio</div>
            <div class="navDestination">About</div>
            <div class="navDestination">Contact</div>
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

    .navDestination{
      cursor: pointer;
    }

    .navDestination:hover{
      color:var(--LightColor);
    }

    #footLogo{
      text-transform: capitalize;
      font-size: .7rem;
      color: var(--LightColor);
      position: absolute;
      top: 2.3rem;
      margin-left: 2rem;
    }
</style>