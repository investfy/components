<template>
  <div class="space-y-8">
    <section>
      <h2 class="pb-2 mb-4 border-b border-gray-200 text-2xl font-bold">
        Exemplo completo
      </h2>

      <IfyField label="Name">
        <IfyInput v-model="name" />
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

      <IfyField label="Password">
        <IfyInput type="password" value="iwantmytreasure" password-reveal />
      </IfyField>

      <IfyField label="Textarea">
        <IfyInput type="textarea" rows="1" />
      </IfyField>

      <IfyField label="Message">
        <IfyInput maxlength="200" type="textarea" />
      </IfyField>
    </section>

    <section>
      <h2 class="pb-2 mb-4 border-b border-gray-200 text-2xl font-bold">
        Tipos e estados
      </h2>

      <IfyField>
        <IfyInput placeholder="No label" />
      </IfyField>

      <IfyField label="Rounded">
        <IfyInput placeholder="Rounded" rounded />
      </IfyField>

      <IfyField label="Success" type="success">
        <IfyInput placeholder="Success" />
      </IfyField>

      <IfyField
        label="Error"
        type="danger"
        message="You can have a message too"
      >
        <IfyInput placeholder="Error" />
      </IfyField>

      <IfyField label="Info" type="info">
        <IfyInput placeholder="Info" />
      </IfyField>

      <IfyField label="Warning" type="warning">
        <IfyInput placeholder="Warning" />
      </IfyField>

      <IfyField label="Disabled">
        <IfyInput placeholder="Disabled" disabled />
      </IfyField>

      <IfyField label="Loading">
        <IfyInput placeholder="Loading" loading />
      </IfyField>
    </section>

    <section>
      <h2 class="pb-2 mb-4 border-b border-gray-200 text-2xl font-bold">
        Ícones
      </h2>

      <IfyField>
        <IfyInput placeholder="Search..." type="search" icon="search" />
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
        <IfyInput placeholder="Credit card" icon="credit-card" />
      </IfyField>
    </section>

    <section>
      <h2 class="pb-2 mb-4 border-b border-gray-200 text-2xl font-bold">
        Validação
      </h2>

      <IfyField>
        <IfyInput placeholder="Email" type="email" />
      </IfyField>

      <IfyField>
        <IfyInput placeholder="Number" type="number" min="10" max="20" />
      </IfyField>

      <IfyField>
        <IfyInput
          placeholder="User handle (custom validation for only lowercase)"
          type="text"
          required
          validation-message="Only lowercase is allowed"
          pattern="[a-z]*"
        />
      </IfyField>

      <IfyField>
        <IfyInput placeholder="URL" type="url" />
      </IfyField>

      <IfyField>
        <IfyInput
          type="textarea"
          minlength="10"
          maxlength="100"
          placeholder="Maxlength automatically counts characters"
        />
      </IfyField>
    </section>

    <section>
      <h2 class="pb-2 mb-4 border-b border-gray-200 text-2xl font-bold">
        Senha
      </h2>

      <IfyField>
        <IfyInput type="password" placeholder="Regular password input" />
      </IfyField>

      <IfyField>
        <IfyInput
          type="password"
          placeholder="Password reveal input"
          password-reveal
        />
      </IfyField>
    </section>

    <section>
      <h2 class="pb-2 mb-4 border-b border-gray-200 text-2xl font-bold">
        Tamanhos
      </h2>

      <IfyField>
        <IfyInput placeholder="Small" size="sm" icon="user" />
      </IfyField>

      <IfyField>
        <IfyInput placeholder="Default" icon="user" />
      </IfyField>

      <IfyField>
        <IfyInput placeholder="Medium" size="lg" icon="user" />
      </IfyField>

      <IfyField>
        <IfyInput placeholder="Large" size="xl" icon="user" />
      </IfyField>
    </section>
  </div>
</template>

<script>
export default {
  name: "InputPage",

  data() {
    return {
      name: "John Silver",
      email: "",
    };
  },
  methods: {
    searchIconClick() {
      alert("You wanna make a search?");
    },
    clearIconClick() {
      this.email = "";
      alert("Email cleared!");
    },
  },
};
</script>
