<template>
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
</template>

<script>
export default {
  name: "Home",
};
</script>
