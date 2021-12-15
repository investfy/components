<template>
  <div class="relative z-20 inline-block text-left">
    <IfyDropdown :active.sync="isDropdownOpen">
      <template #trigger>
        <div
          class="flex items-center justify-between flex-shrink-0 focus:outline-none cursor-pointer"
        >
          <IfyAvatar
            v-if="avatar"
            :src="avatar"
            :title="name"
            size="sm"
            class="mr-2"
          />
          <div class="flex flex-col items-stretch text-left text-gray-600">
            <span
              class="hidden overflow-hidden text-sm overflow-ellipsis lg:block whitespace-nowrap"
            >
              {{ name }}
            </span>
            <small class="hidden text-xs lg:block">
              {{ subname }}
            </small>
          </div>
        </div>
      </template>

      <div class="w-40 py-1">
        <slot />
      </div>
    </IfyDropdown>
  </div>
</template>

<script>
import IfyAvatar from "../avatar/Avatar.vue";
import IfyDropdown from "../dropdown/Dropdown.vue";

export default {
  name: "IfyProfileDropdown",

  components: {
    IfyAvatar,
    IfyDropdown,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    subname: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isDropdownOpen: false,
    };
  },

  watch: {
    active(newVal) {
      this.isDropdownOpen = newVal;
    },
    isDropdownOpen(newVal) {
      this.$emit("update:active", newVal);
    },
  },

  mounted() {
    this.isDropdownOpen = this.active;
  },
};
</script>
