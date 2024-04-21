<template>
  <header>
    <button class="button" @click="changeTheme">
      {{ buttonText }}
    </button>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks">
              Sinônimos
            </i>
          </router-link>
        </li>
        <li>
          <router-link to="/chart" class="link">
            <i class="fas fa-project-diagram">
              Relacionamento de Palavras
            </i>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SideBar",
  emits: ["themeChanged"],
  data () {
    return {
      darkTheme: false,
    }
  },
  computed: {
    buttonText () {
      if(this.darkTheme) {
        return "Light Theme"
      }
      return "Dark Theme"
    }
  },
  methods: {
    changeTheme () {
      this.darkTheme = !this.darkTheme
      this.$emit("themeChanged", this.darkTheme)
    }
  }
};
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.panel li {
    margin: 8px 0;
}
.link {
    color: #fff;
}
.link:hover {
    color: #FAF0CA;
}
.link.router-link-active {
    color: #FAF0CA;
}
</style>