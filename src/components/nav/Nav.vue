<template>
  <nav>
    <p v-if="title" class="mb-8 font-bold uppercase text-xs">
      {{ title }}
    </p>
    <template v-if="$slots.default">
      <div data-clickable-slot>
        <slot />
      </div>
    </template>

    <div v-if="items && !$slots.default" class="list-none">
      <ul>
        <li v-for="(item, index) in items" :key="index" class="mx-4">
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
  },
};
</script>

<style lang="postcss" scoped>
[data-clickable-slot] * {
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
}
</style>
