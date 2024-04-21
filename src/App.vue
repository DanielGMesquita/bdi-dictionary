
<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkTheme }">
    <div class="column is-one-quarter">
      <Sidebar @themeChanged = "changeTheme"/>
    </div>
    <div class="column is-three-quarter content">
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import Sidebar from "./components/base/SideBar.vue";

export default{
  name: "App",
  components: { Sidebar },
  data() {
    return {
      darkTheme: false,
    };
  },
  methods: {
    changeTheme(darkTheme) {
      this.darkTheme = darkTheme;
    }
  },
};
</script>

<style>
.list {
  padding: 1.25rem;
}
main {
  --bg-primary: #ffffff;
  --txt-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --txt-primary: #ddd;
}
.content{
  background-color: var(--bg-primary);
}
</style>
