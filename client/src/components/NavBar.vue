<template>
  <nav class="nav">
    <router-link to="/" class="nav__logo">swifswap</router-link>
    <ul class="nav__list">
      <li v-if="!userData"><router-link to="/login">login</router-link></li>
      <li v-if="!userData"> | <router-link to="/register">register</router-link></li>
      <li v-if="userData"><router-link to="/newitem">new item</router-link></li>
      <li v-if="userData"> | <a :href="userData.profilePath" to="/"><small>profile</small></a></li>
      <li v-if="userData"> | <router-link to="/chats"><small>chats</small></router-link></li>
      <li v-if="userData"> | <a v-bind:href="logoutRoute"><small>logout</small></a></li>
      <li v-if="userData"><small>( {{userData.username}} )</small></li>
    </ul>
  </nav>
</template>

<script>
import { apiHost } from '@/assets/url.config'
export default {
  props: {
    userData: {
      required: true
    }
  },
  data () {
    return {
      logoutRoute: apiHost + 'logout'
    }
  }
}

</script>

<style lang="scss">
@import '../assets/styles/_base';
.nav {
  @include reset;
  @include sidepadding;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;

  position: sticky;
  background: white;
  border-bottom: 1px solid #ddd;
  top: 0;
  right: 0;
  left: 0;
  height: $nav-height;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
  }

  &__list {
    font-size:1.5rem;
    li {
      display: inline-block;
      a:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    small {
      font-weight: 500;
    }
  }
}
</style>
