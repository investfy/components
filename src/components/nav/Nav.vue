<template>
  <nav class="text-gray-100">
    <p class="uppercase text-xs text-gray-100" v-if="title">{{ title }}</p>
    <template v-if="$slots.default">
      <slot />
    </template>

    <div v-if="links && !$slots.default" class="list-none">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <IfyLink :to="link.address" target="_blank">
            {{ link.label }}</IfyLink
          >
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

<style lang="postcss" scoped></style>
