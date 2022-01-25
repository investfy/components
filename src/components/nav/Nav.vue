<template>
  <nav class="text-gray-100">
    <p class="font-bold ml-4 my-8 uppercase text-xs text-gray-100" v-if="title">
      {{ title }}
    </p>
    <template v-if="$slots.default">
      <div data-clickable>
        <slot />
      </div>
    </template>

    <div v-if="links && !$slots.default" class="list-none">
      <ul data-clickable>
        <li
          v-for="(link, index) in links"
          :key="index"
          class="flex items-center justify-between clickable"
        >
          <IfyLink :to="link.address" target="_blank">
            {{ link.label }}</IfyLink
          >

          <IfyIcon icon="angle-down" size="lg" type="info" />
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
    links: {
      type: [String, Object],
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
[data-clickable] * {
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
}
</style>
