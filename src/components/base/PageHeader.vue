<template>
  <div id="page-header">
    <v-breadcrumbs
      divider=">"
    />
    <h1> {{ title }} </h1>
    <h3> {{ description }} </h3>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
div#page-header {
  padding-bottom: 25px;

  h1 {
    padding-bottom: 10px;
  }

  ul.v-breadcrumbs {
    padding-left: 0;
  }
}
</style>
