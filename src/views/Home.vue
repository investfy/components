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
          <IfyField label="Name" horizontal>
            <IfyInput placeholder="Insira seus dados aqui" />
          </IfyField>

          <IfyField
            label="Email"
            type="is-danger"
            message="This email is invalid"
            horizontal
          >
            <IfyInput type="email" value="john@" maxlength="30" />
          </IfyField>

          <IfyField
            label="Username"
            type="is-success"
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
        </form>

        <form>
          <IfyField>
            <IfyInput placeholder="Extra-Small" size="xs" icon="account" />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Small" size="sm" icon="account" />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Medium" icon="account" />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Large" size="lg" icon="account" />
          </IfyField>

          <IfyField>
            <IfyInput placeholder="Extra-Large" size="xl" icon="account" />
          </IfyField>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
