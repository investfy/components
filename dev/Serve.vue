<template>
  <div id="app">
    <div class="mb-8">
      <ify-navbar>
        <template #end>
          <ify-dropdown>
            <template #trigger>
              <button
                ref="dropdown"
                type="button"
                class="outline-none focus:outline-none"
                @click="toggleDropdown()"
              >
                <fa icon="th" />
              </button>
            </template>

            <div class="p-2" style="min-width: 10rem">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat vitae consequuntur, aliquid aut voluptas velit est
                voluptatibus aspernatur laboriosam accusantium dolore voluptatum
                aliquam suscipit.
              </p>
            </div>
          </ify-dropdown>
        </template>
      </ify-navbar>
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
