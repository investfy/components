<template>
  <section>
    <h2 class="title">IfyTable</h2>
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
  </section>
</template>

<script>
export default { name: "Table" };
</script>
