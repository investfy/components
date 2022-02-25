<template>
  <div>
    <fieldset class="mb-8">
      <IfyField>
        <label>
          Posição:
          <IfySelect v-model="drawerPosition">
            <option>top</option>
            <option>right</option>
            <option>bottom</option>
            <option selected>left</option>
          </IfySelect>
        </label>
      </IfyField>
    </fieldset>

    <IfyButton @click="isDrawerOpen = true">Abrir Drawer</IfyButton>

    <IfyDrawer :active.sync="isDrawerOpen" :position="drawerPosition">
      <div class="p-4">
        <p class="mb-2" v-for="i in 10" :key="i">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nam atque ratione ab amet aspernatur, officia laudantium labore nihil
          impedit dolor nulla libero neque eveniet ex cum error beatae
          assumenda.
        </p>
      </div>
    </IfyDrawer>
  </div>
</template>

<script>
export default {
  name: "DrawerPage",

  data() {
    return {
      isDrawerOpen: false,
      drawerPosition: "left",
    };
  },
};
</script>
