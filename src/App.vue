<template>
  <div id="app">
    <IfyNavbar class="mb-8">
      <template #end>
        <IfyDropdown>
          <template #trigger>
            <button
              type="button"
              class="flex items-center justify-between flex-shrink-0 focus:outline-none"
            >
              <IfyAvatar
                src="https://images.pexels.com/users/avatars/2417028/erik-mclean-965.jpeg?auto=compress&fit=crop&h=40&w=40"
                title="John Doe"
                class="mr-2"
              />
              <div class="flex flex-col items-stretch text-left">
                <span
                  class="hidden overflow-hidden text-sm overflow-ellipsis lg:block whitespace-nowrap"
                >
                  John Doe
                </span>
                <small class="hidden text-xs text-gray-600 lg:block">
                  john.doe@example.com
                </small>
              </div>
            </button>
          </template>

          <div class="w-52 py-1">
            <IfyDropdownItem link="#">Configurações da conta</IfyDropdownItem>
            <IfyDropdownItem link="#">Suporte</IfyDropdownItem>
            <IfyDropdownItem>Novo recurso (em breve)</IfyDropdownItem>
            <IfyDropdownItem link="#">Licença</IfyDropdownItem>
            <IfyDropdownItem separator />
            <IfyDropdownItem clickable>Sair</IfyDropdownItem>
          </div>
        </IfyDropdown>
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
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "App",

  computed: {
    ellipsisVIcon() {
      return faEllipsisV;
    },
  },
};
</script>
