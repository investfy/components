<template>
  <div>
    <div class="space-y-4">
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

      <div class="grid grid-cols-2 gap-4">
        <form>
          <IfyField label="Name">
            <IfyInput value="Kevin Garvey" />
          </IfyField>

          <IfyField label="Email" type="danger" message="This email is invalid">
            <IfyInput type="email" value="john@" maxlength="30" />
          </IfyField>

          <IfyField
            label="Username"
            type="success"
            message="This username is available"
          >
            <IfyInput value="johnsilver" maxlength="30" />
          </IfyField>

          <IfyField
            label="Password"
            type="warning"
            :message="[
              'Password is too short',
              'Password must have at least 8 characters',
            ]"
          >
            <IfyInput value="123" type="password" maxlength="30" />
          </IfyField>

          <IfyField label="Subject">
            <IfyInput maxlength="200" type="textarea" />
          </IfyField>
        </form>

        <form>
          <IfyField>
            <IfyInput placeholder="Extra-Small" size="xs" icon="user-circle" />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Small" size="sm" icon="user-circle" />
          </IfyField>

          <IfyField>
            <IfyInput
              placeholder="Email"
              v-model="email"
              type="email"
              icon="envelope"
              icon-right="times-circle"
              icon-right-clickable
              @icon-right-click="clearIconClick"
            />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Large" size="lg" icon="user-circle" />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Extra-Large" size="xl" icon="user-circle" />
          </IfyField>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      email: "email@example.com",
    };
  },

  methods: {
    clearIconClick() {
      this.email = "";
    },
  },
};
</script>
