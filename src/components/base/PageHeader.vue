<template>
  <div id="page-header">
    <h2> {{ title }} </h2>
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
