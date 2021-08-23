<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
// import { IfyTable } from '@/entry.esm';

export default Vue.extend({
  name: "ServeDev"
  // components: {
  //  IfyTable,
  // }
});
</script>

<template>
  <div id="app">
    <ify-header />
    <!-- <ify-table
      :columns="[
        { field: 'name', label: 'Nome' },
        { field: 'email', label: 'E-mail' }
      ]"
      :data="[
        { name: 'Isabel', email: 'isabel@example.com' },
        { name: 'Lorenna', email: 'lorenna@example.com' }
      ]"
    /> -->
  </div>
</template>
