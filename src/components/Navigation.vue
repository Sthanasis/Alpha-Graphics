<template>
    <nav>
        <div>
            <router-link v-for="routes in links" 
            v-bind:key="routes.id"
            :to="`${routes.page}`">{{routes.text}}</router-link>
        </div>
    </nav>

</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'alphaGraphics',
          page:'/'
        },
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        }
      ]
    }
  }
}
</script>
<style scoped>
    nav{
        display: flex;
        justify-content: space-around;
    }

</style>