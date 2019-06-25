<template>
  <div id="app">
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
    <!-- https://material.io/tools/icons/?style=baseline -->
    <v-card >
      <v-bottom-nav :active.sync="bottomNav" color="rgba(255, 0, 0, 0.5)" :value="true" absolute dark shift>
        <router-link to="/" tag="v-btn" dark>
          <span>หน้าแรก</span>
          <v-icon>home</v-icon>
        </router-link>

        <router-link to="/login" tag="v-btn" dark>
          <span>เข้าสู่ระบบ</span>
          <v-icon>person</v-icon>
        </router-link>

        <v-btn dark>
          <span>สมัครสมาชิก</span>
          <v-icon>person_add</v-icon>
        </v-btn>

        <v-btn dark>
          <span>ออกจากระบบ</span>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: null
      }
    },
    name: 'app',
    components: {

    },
    mounted () {
      console.log(this.$route.path);
      switch (this.$route.path) {
        case "/":
          this.bottomNav = 0
          break;
        case "/login":
          this.bottomNav = 1
          break;
        case "/register":
          this.bottomNav = 2
          break;
        case "/logout":
          this.bottomNav = 3
          break;
        default:
          break;
      }
      
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>