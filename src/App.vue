<template>
  <div id="app" class="container">
    <div class="text-center">
      <IfyLogo class="inline-block mb-6" />
    </div>
    <IfyTable
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
</template>

<script>
import IfyLogo from "./components/logo/Logo.vue";
import IfyTable from "./components/table/Table.vue";

export default {
  name: "App",

  components: {
    IfyLogo,
    IfyTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
