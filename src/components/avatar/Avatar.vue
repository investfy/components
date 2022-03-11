<template>
  <div class="ifyavatar">
    <img
      :class="['ifyavatar__image', `ifyavatar__image--${size}`]"
      :src="src"
      :alt="title"
      :title="title"
    />
    <span
      v-if="status"
      :class="[
        'ifyavatar__status',
        `ifyavatar__status--${status}`,
        `ifyavatar__status--${size}`,
      ]"
    />
  </div>
</template>

<script>
export default {
  name: "IfyAvatar",

  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: "md",
      validator(str) {
        return [
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
        ].includes(str);
      },
    },
    status: {
      type: String,
      default: null,
      validator(str) {
        return ["online", "busy", "away", "offline"].includes(str);
      },
    },
  },
};
</script>

<style lang="postcss">
.ifyavatar {
  @apply relative inline-block rounded-full;
}

.ifyavatar__image {
  @apply inline object-cover rounded-full;
}
.ifyavatar__image--xs {
  @apply w-6 h-6;
}
.ifyavatar__image--sm {
  @apply w-8 h-8;
}
.ifyavatar__image--md {
  @apply w-10 h-10;
}
.ifyavatar__image--lg {
  @apply w-14 h-14;
}
.ifyavatar__image--xl {
  @apply w-20 h-20;
}
.ifyavatar__image--2xl {
  @apply w-24 h-24;
}
.ifyavatar__image--3xl {
  @apply w-28 h-28;
}
.ifyavatar__image--4xl {
  @apply w-32 h-32;
}
.ifyavatar__image--5xl {
  @apply w-36 h-36;
}

.ifyavatar__status {
  @apply absolute inline-block border-white rounded-full bottom-0;
}
.ifyavatar__status--online {
  @apply bg-green-600;
}
.ifyavatar__status--busy {
  @apply bg-red-600;
}
.ifyavatar__status--away {
  @apply bg-yellow-500;
}
.ifyavatar__status--offline {
  @apply bg-gray-200;
}
.ifyavatar__status--xs {
  @apply right-0 w-2 h-2 border;
}
.ifyavatar__status--sm,
.ifyavatar__status--md {
  @apply right-0 w-3 h-3 border-2;
}
.ifyavatar__status--lg {
  @apply right-0 w-4 h-4 border-2;
}
.ifyavatar__status--xl,
.ifyavatar__status--2xl {
  @apply right-2 w-4 h-4 border-2;
}
.ifyavatar__status--3xl {
  @apply right-2 w-5 h-5 border-2;
}
.ifyavatar__status--4xl,
.ifyavatar__status--5xl {
  @apply right-4 w-5 h-5 border-2;
}
</style>
