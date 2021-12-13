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
        <section>
          <IfyField label="Name" horizontal>
            <IfyInput value="John Silver" />
          </IfyField>

          <IfyField
            label="Email"
            type="danger"
            message="This email is invalid"
            horizontal
          >
            <IfyInput type="email" v-model="email" maxlength="30" />
          </IfyField>

          <IfyField
            label="Username"
            type="success"
            message="This username is available"
            horizontal
          >
            <IfyInput value="johnsilver" maxlength="30" />
          </IfyField>

          <IfyField label="Password" horizontal>
            <IfyInput type="password" value="iwantmytreasure" password-reveal />
          </IfyField>

          <IfyField label="Message" horizontal>
            <IfyInput maxlength="200" type="textarea" />
          </IfyField>
        </section>

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
