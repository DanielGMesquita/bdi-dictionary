
<template>
  <v-list-item
    class="sidebar-item"
    :to="to"
    :ripple="false"
    @click.native="$emit('click')"
  >
    <v-list-item-icon
      :class="iconMiniClass"
    >
    </v-list-item-icon>

    <v-list-item-title
      v-show="!isSidebarMini"
      class="sidebar-item__title"
      v-text="name"
    />
  </v-list-item>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    isSidebarMini: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    to: {
      type: Object,
      required: true
    },
  },
  computed: {
    iconMiniClass() {
      return {
        'sidebar-item__icon--opened': !this.isSidebarMini,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-item {
  padding-left: 0;
  padding-right: 0;

  &::before {
    opacity: 0;
    background-color: transparent;
  }

  &.v-list-item--active {
    i {
      color: var(--default-green-color);
    }
  }

  &__icon--opened {
    margin-right: 16px !important;
  }
}
</style>
