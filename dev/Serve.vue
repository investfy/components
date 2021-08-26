<template>
  <div id="app">
    <div class="mb-8">
      <ify-navbar />
    </div>

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
</template>

<script>
export default {
  name: "Serve",
};
</script>
