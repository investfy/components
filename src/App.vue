<template>
  <div id="app">
    <IfyNavbar class="mb-8" />

    <div class="container">
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
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
