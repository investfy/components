<template>
  <header class="bg-white shadow-md">
    <div class="px-1 lg:px-4 lg:container">
      <div class="flex items-center justify-start h-14">
        <div class="flex items-center flex-shrink-0">
          <component
            :is="logoUrl ? 'a' : 'span'"
            :href="logoUrl"
            class="flex items-center h-14 hover:bg-gray-100"
          >
            <img
              src="@/assets/logo.svg"
              alt="Investfy"
              class="block w-auto h-6 lg:h-8"
            />
          </component>
        </div>

        <div class="flex items-center flex-shrink-0 ml-auto">
          <!-- <favorites-button />
          <notification-button />
          <profile-button class="ml-3" /> -->
          <apps auth-token="asdf" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import FavoritesButton from "./FavoritesButton";
// import NotificationButton from "./NotificationButton";
// import ProfileButton from "./ProfileButton";
import Apps from "./Apps";

export default {
  name: "IfyHeader",

  components: {
    // FavoritesButton,
    // NotificationButton,
    // ProfileButton,
    Apps,
  },

  props: {
    logoUrl: String
  }
};
</script>
