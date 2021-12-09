<template>
  <div id="app">
    <IfyNavbar brand-link="/" class="mb-8">
      <template #end>
        <IfyProfileDropdown
          name="John Doe"
          subname="john.doe@example.com"
          avatar="https://images.pexels.com/users/avatars/2417028/erik-mclean-965.jpeg?auto=compress&fit=crop&h=40&w=40"
          :active.sync="isDropdownActive"
        >
          <IfyDropdownItem link="/about">Configurações</IfyDropdownItem>
          <IfyDropdownItem link="/about">Suporte</IfyDropdownItem>
          <IfyDropdownItem>Novo recurso*</IfyDropdownItem>
          <IfyDropdownItem link="/about">Licença</IfyDropdownItem>
          <IfyDropdownItem separator />
          <IfyDropdownItem clickable>Sair</IfyDropdownItem>
        </IfyProfileDropdown>
      </template>
    </IfyNavbar>

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      isDropdownActive: false,
    };
  },

  watch: {
    $route() {
      this.isDropdownActive = false;
    },
  },
};
</script>
