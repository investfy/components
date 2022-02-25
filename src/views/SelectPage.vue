<template>
  <div class="my-8 space-y-4">
    <section>
      <IfyField label="Simple">
        <IfySelect placeholder="Select a name">
          <option v-for="option in data" :value="option.id" :key="option.id">
            {{ option.user.first_name }}
          </option>
        </IfySelect>
      </IfyField>

      <IfyField label="Grouped">
        <IfySelect placeholder="Select a character" icon="user">
          <optgroup label="Black Sails">
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
            <option value="vane">Vane</option>
            <option value="billy">Billy</option>
            <option value="jack">Jack</option>
          </optgroup>

          <optgroup label="Breaking Bad">
            <option value="heisenberg">Heisenberg</option>
            <option value="jesse">Jesse</option>
            <option value="saul">Saul</option>
            <option value="mike">Mike</option>
          </optgroup>

          <optgroup label="Game of Thrones">
            <option value="tyrion-lannister">Tyrion Lannister</option>
            <option value="jamie-lannister">Jamie Lannister</option>
            <option value="daenerys-targaryen">Daenerys Targaryen</option>
            <option value="jon-snow">Jon Snow</option>
          </optgroup>
        </IfySelect>
      </IfyField>

      <IfyField
        label="Error"
        type="is-danger"
        message="Something went wrong with this field"
      >
        <IfySelect placeholder="Select a character">
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField label="Rounded">
        <IfySelect placeholder="Select a character" rounded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField label="Required">
        <IfySelect placeholder="Select a character" required>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField label="Loading">
        <IfySelect placeholder="Select a character" loading>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField label="Disabled">
        <IfySelect placeholder="Select a character" disabled>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField label="Disabled option">
        <IfySelect placeholder="Select a character">
          <option value="flint">Flint</option>
          <option value="silver" disabled>Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField label="Expanded">
        <IfySelect placeholder="Select a character" expanded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>
    </section>

    <section>
      <h2 class="title">Multiple</h2>
      <p class="content"><b>selected</b>: {{ selectedOptions }}</p>
      <IfyField>
        <IfySelect multiple native-size="8" v-model="selectedOptions">
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
          <option value="vane">Vane</option>
          <option value="billy">Billy</option>
          <option value="jack">Jack</option>
          <option value="heisenberg">Heisenberg</option>
          <option value="jesse">Jesse</option>
          <option value="saul">Saul</option>
          <option value="mike">Mike</option>
        </IfySelect>
      </IfyField>
    </section>

    <section>
      <h2 class="title">Icons</h2>
      <IfyField>
        <IfySelect placeholder="Country" icon="globe">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </IfySelect>
      </IfyField>

      <IfyField>
        <IfySelect placeholder="Client" icon="user">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </IfySelect>
      </IfyField>
    </section>

    <section>
      <h2 class="title">Sizes</h2>
      <IfyField>
        <IfySelect placeholder="Small" size="is-small" expanded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField>
        <IfySelect placeholder="Default" expanded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField>
        <IfySelect placeholder="Medium" size="is-medium" expanded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>

      <IfyField>
        <IfySelect placeholder="Large" size="is-large" expanded>
          <option value="flint">Flint</option>
          <option value="silver">Silver</option>
        </IfySelect>
      </IfyField>
    </section>
  </div>
</template>

<script>
const data = require("@/data/sample.json");

export default {
  name: "SelectPage",

  data() {
    return {
      data,
      selectedOptions: [],
    };
  },
};
</script>
