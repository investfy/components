<template>
  <div id="app">
    <IfyNavbar class="mb-8">
      <template #end>
        <IfyProfileDropdown
          name="John Doe"
          subname="john.doe@example.com"
          avatar="https://images.pexels.com/users/avatars/2417028/erik-mclean-965.jpeg?auto=compress&fit=crop&h=40&w=40"
        >
          <IfyDropdownItem link="#">Configurações</IfyDropdownItem>
          <IfyDropdownItem link="#">Suporte</IfyDropdownItem>
          <IfyDropdownItem>Novo recurso*</IfyDropdownItem>
          <IfyDropdownItem link="#">Licença</IfyDropdownItem>
          <IfyDropdownItem separator />
          <IfyDropdownItem clickable>Sair</IfyDropdownItem>
        </IfyProfileDropdown>
      </template>
    </IfyNavbar>

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
