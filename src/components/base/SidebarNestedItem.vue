<template>
  <v-list-group
    :ripple="false"
    :value="isOpen"
    class="sidebar-nested-item"
    active-class="sidebar-nested-item--active"
    @click="openFirstChild"
  >
    <template v-slot:activator>
      <StIcon
        :icon-name="icon"
        class="sidebar-nested-item__icon"
      />
      <v-list-item-title
        v-show="!isSidebarMini"
        class="sidebar-nested-item__title"
      >
        {{ title }}
      </v-list-item-title>
    </template>

    <v-list-item
      v-for="subItem in subItems"
      v-show="!isSidebarMini"
      :key="subItem.name"
      :to="{name: subItem.url.name}"
      class="sidebar-nested-item__item"
      :ripple="false"
      exact
      flat
      dense
    >
      <v-list-item-icon
        class="mr-4"
      >
      </v-list-item-icon>
      <v-list-item-title v-text="subItem.name" />
    </v-list-item>
  </v-list-group>
</template>

<script>

export default {
  name: 'SidebarNestedItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    isSidebarMini: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    subItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route(to) {
      /*
       * If user changed to another route that is not in subitem's urls
       * we should close this NestedItem
       */
      const changedToOutterRoute = this.subItems.reduce((accumulator, item) => {
        const newValue = accumulator && item.url.name !== to.name;
        return newValue;
      }, true);

      this.isOpen = !changedToOutterRoute;
    },
  },
  methods: {
    openFirstChild() {
      if (!this.isOpen) {
        this.$router.replace({ name: this.subItems[0].url.name }).catch(/*istanbul ignore next*/() => {
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-nested-item {
  &__item {
    padding-left: 11px;
    padding-right: 0;
    color: var(--white);

    &::before {
      opacity: 0;
      background-color: transparent;
    }

    &.v-list-item--active {
      opacity: 1;
      background-color: var(--gray-050);
    }
  }

  &__title {
    color: var(--white);
  }

  &__icon {
    margin-right: 10px;
  }
}

::v-deep {
  .v-list-group__header {
    padding-left: 0;
    padding-right: 0;
  }

  .sidebar-nested-item--active {
    padding-right: 0;
    padding-left: 0;
    font-weight: bold;

    &:hover {
      &::before {
        opacity: 0;
        background-color: transparent;
      }
    }
  }

  .v-list-group__header__append-icon {
    color: var(--white);
    margin-left: 0 !important;
    min-width: 20px !important;
  }
}
</style>
