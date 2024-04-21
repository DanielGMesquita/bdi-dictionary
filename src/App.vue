
<template>
  <main :class="{ 'dark-mode': darkTheme }">
    <div>
      <Sidebar @themeChanged = "changeTheme"/>
    </div>
    <div>
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
