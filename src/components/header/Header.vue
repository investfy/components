<template>
  <header class="bg-white shadow-md">
    <div class="px-1 lg:px-4 lg:container">
      <div class="flex items-center justify-start h-14">
        <div class="flex items-center flex-shrink-0">
          <component
            :is="logoUrl ? 'a' : 'span'"
            :href="logoUrl"
            class="flex items-center h-14"
          >
            <img
              src="../../assets/logo.svg"
              alt="Investfy"
              class="block w-auto h-6 lg:h-8"
            />
          </component>
        </div>

        <div class="flex items-center flex-shrink-0 ml-auto">
          <apps auth-token="asdf" />
          <profile class="ml-3" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Apps from "./Apps.vue";
import Profile from "./Profile.vue";

export default {
  name: "IfyHeader",

  components: {
    Apps,
    Profile
  },

  props: {
    logoUrl: String
  }
};
</script>
