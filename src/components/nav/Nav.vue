<template>
  <nav :class="{ nav: true, 'nav-dark': isDark }">
    <span v-if="title" class="nav-title">
      {{ title }}
    </span>
    <template v-if="$slots.default">
      <slot />
    </template>

    <div v-if="items && !$slots.default" class="list-none">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{
            'nav-ul-li-item': true,
            'mx-2': true,
            'nav-dark': isDark,
          }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "IfyNav",

  props: {
    title: {
      type: String,
    },
    items: {
      type: [String, Array],
      default: null,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.nav {
  @apply text-gray-700;
}

.nav.nav-dark {
  @apply text-blue-200;
}

.nav-title {
  @apply block px-4 py-0 mb-2 text-xs uppercase font-bold;
  /* line-height: 20px; não há classe tw */
}

.nav-ul-li-item {
  @apply py-3 px-4 text-sm;
}
</style>
