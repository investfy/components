<template>
  <div id="app">
    <div class="mb-8">
      <ify-navbar :brand-img="brandImg" brand-link="/">
        <template #end>
          <ify-dropdown position="bottom-left">
            <template #trigger>
              <button><fa icon="th" /></button>
            </template>

            <ify-dropdown-item has-link>
              <a href="#" class="dropdown-item">Action</a>
            </ify-dropdown-item>
            <ify-dropdown-item>Another action</ify-dropdown-item>
            <ify-dropdown-item separator />
            <ify-dropdown-item>Something else</ify-dropdown-item>
          </ify-dropdown>
        </template>
      </ify-navbar>
    </div>

    <div class="container">
      <ify-table
        :columns="[
          { field: 'name', label: 'Nome' },
          { field: 'email', label: 'E-mail' },
        ]"
        :data="[
          { name: 'Isabel', email: 'isabel@example.com' },
          { name: 'Lorenna', email: 'lorenna@example.com' },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Serve",
  computed: {
    brandImg() {
      return require("./assets/logo.svg");
    },
  },
};
</script>
