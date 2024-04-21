<template>
  <div id="sidebar-item-container">
    <div
      class="product"
    >
      <div class="product__title mb-4">
        <transition name="fade">
          <span
            v-show="!isSidebarMini"
          >
            ADMIN TOOLS
          </span>
        </transition>
      </div>
      <template
        v-for="item in items"
        :key="item.name"
      >
        <v-list>
          <SidebarItem
            v-if="!item.children"
            :is-sidebar-mini="isSidebarMini"
            :icon="item.icon"
            :name="item.name"
            :to="item.url"
          />
          <SidebarNestedItem
            v-else
            :title="item.name"
            :icon="item.icon"
            :is-sidebar-mini="isSidebarMini"
            :sub-items="item.children"
          />
        </v-list>
      </template>
    </div>
  </div>
</template>

<script>
import SidebarItem from '../base/SidebarItem';
import SidebarNestedItem from '../base/SidebarNestedItem';
import SidebarItems from '../../mixins/sidebar-items.mixin';

export default {
  name: 'SidebarItemList',
  components: {
    SidebarItem,
    SidebarNestedItem,
  },
  mixins: [
    SidebarItems
  ],
  props: {
    isSidebarMini: {
      type: Boolean,
      required: true
    }
  },
};
</script>

<style lang="scss" scoped>
  * {
    font-size: 14px;
    line-height: 20px;
    color: var(--white);
    text-align: left;
  }

  div {
    margin: 0;
    padding: 0;
  }

  .product {
    &__title {
      height: 19px;
      margin-left: 8px;

      span {
        height: 17px;
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.42;
        letter-spacing: normal;
        text-align: left;
        color: var(--default-green-color);
        text-transform: uppercase;
        display: block;
      }
    }
  }

  #sidebar-item-container {
    padding: 19px 10px;
    width: 100%;

    button {
      i {
        font-size: 18px;
        vertical-align: text-bottom;
      }
    }
  }

  .fade-leave-active {
    transition: none;
  }

  .fade-enter-active {
    transition: opacity 0.3s ease-in-out;
    transition-delay: 0.1s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
