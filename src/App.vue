<template>
  <div>
    <v-app
      dark
    >
      <v-row
        v-if="hasInitialData"
        class="no-gutters"
      >
        <transition>
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </v-row>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      hasInitialData: false
    };
  },
  async created() {
      this.hasInitialData = true;
      this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import './plugins/v-tooltip/v-tooltip.scss';

  * {
    font-family: 'Open Sans', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    text-align: center;
    background: var(--gray-050);
  }

  html {
    overflow-y: auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    color: white;
  }

  .disabled__container {
    > * {
      opacity: 0.6;
      cursor: default;
      pointer-events: none;
    }
  }

  .single-select .v-input__slot {
    min-height: 48px;
  }

  .v-input--has-state.theme--dark.error--text,
  .v-icon.mdi.theme--dark.error--text,
  .v-messages.theme--dark.error--text,
  .v-label.theme--dark.error--text {
    color: #fff !important;
  }

  .v-input--has-state.theme--dark.error--text {
    caret-color: #fff !important;
    background-color: rgba(201, 76, 76, 0.3);
    border-radius: 5px;
    padding: 15px 0 8px;
  }
</style>
