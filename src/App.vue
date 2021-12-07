<template>
  <div id="app">
    <IfyNavbar class="mb-8">
      <template #end>
        <IfyDropdown>
          <template #trigger>
            <button
              type="button"
              class="w-full px-4 py-2 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            >
              <Fa :icon="ellipsisVIcon" />
            </button>
          </template>

          <div class="w-56">
            <div class="px-4 py-3">
              <p class="text-sm leading-5">Conectado como</p>
              <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                john.doe@example.com
              </p>
            </div>
            <div class="py-1">
              <IfyDropdownItem link="#">Configurações da conta</IfyDropdownItem>
              <IfyDropdownItem link="#">Suporte</IfyDropdownItem>
              <IfyDropdownItem>Novo recurso (em breve)</IfyDropdownItem>
              <IfyDropdownItem link="#">Licença</IfyDropdownItem>
              <IfyDropdownItem separator />
              <IfyDropdownItem clickable>Sair</IfyDropdownItem>
            </div>
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
