<template>
  <div class="my-4">
    <div class="space-y-4">
      <!-- IfyTable -->
      <section>
        <h2 class="title">IfyTable</h2>
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
      </section>

      <!-- Form -->
      <section>
        <h2 class="title">Form</h2>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
          <form>
            <IfyField message="What do you want to search?">
              <IfyInput placeholder="Search..." type="search" icon="search" />
              <p class="control">
                <IfyButton type="primary" label="Search" />
              </p>
            </IfyField>

            <IfyField message="What a beautiful email!!">
              <IfyInput placeholder="This is expanded" expanded />
              <p class="control">
                <span class="is-static">@gmail.com</span>
              </p>
            </IfyField>

            <hr class="my-4" />

            <IfyField>
              <IfySelect placeholder="Currency">
                <option>$</option>
                <option>£</option>
                <option>€</option>
              </IfySelect>
              <IfyInput type="number" placeholder="0,00" />
              <p class="control">
                <IfyButton type="success" label="Transfer" />
              </p>
            </IfyField>

            <IfyField>
              <p class="control">
                <IfyButton icon-left="bold" />
              </p>
              <p class="control">
                <IfyButton icon-left="italic" />
              </p>
              <p class="control">
                <IfyButton icon-left="underline" />
              </p>
              <p class="control">
                <IfyButton icon-left="align-left" />
              </p>
              <p class="control">
                <IfyButton icon-left="align-center" />
              </p>
              <p class="control">
                <IfyButton icon-left="align-right" />
              </p>
              <IfyInput placeholder="Search..." type="search" icon="search" />
            </IfyField>

            <IfyField>
              <p class="control">
                <IfyButton label="Button" type="primary" />
              </p>
              <p class="control">
                <IfyDropdown>
                  <template #trigger>
                    <IfyButton type="primary" icon-left="caret-down" />
                  </template>

                  <div class="w-40">
                    <IfyDropdownItem>Action</IfyDropdownItem>
                    <IfyDropdownItem>Another action</IfyDropdownItem>
                    <IfyDropdownItem>Something else</IfyDropdownItem>
                  </div>
                </IfyDropdown>
              </p>
            </IfyField>

            <IfyField>
              <p class="control">
                <IfyDropdown>
                  <template #trigger>
                    <IfyButton
                      label="Filters"
                      icon-right="caret-down"
                      icon-size="xs"
                    />
                  </template>

                  <div class="w-40">
                    <IfyDropdownItem value="open_issues"
                      >Open Issues and Pull Requests</IfyDropdownItem
                    >
                    <IfyDropdownItem value="your_issues"
                      >Your Issues</IfyDropdownItem
                    >
                    <IfyDropdownItem value="pull_requests"
                      >Your Pull Requests</IfyDropdownItem
                    >
                    <IfyDropdownItem value="everything"
                      >Everything</IfyDropdownItem
                    >
                  </div>
                </IfyDropdown>
              </p>
              <IfyInput icon="search" type="search" placeholder="Search..." />
            </IfyField>
          </form>

          <form>
            <IfyField>
              <IfyInput
                placeholder="Extra-Small"
                size="xs"
                icon="user-circle"
              />
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
              <IfyInput
                placeholder="Extra-Large"
                size="xl"
                icon="user-circle"
              />
            </IfyField>
          </form>
        </div>
      </section>

      <!-- IfyTag -->
      <section>
        <h2 class="title">IfyTag</h2>
        <IfyTagList>
          <IfyTag size="xs">architecto</IfyTag>
          <IfyTag type="primary" size="sm">animi</IfyTag>
          <IfyTag type="success">architecto</IfyTag>
          <IfyTag type="warning">minus</IfyTag>
          <IfyTag type="danger" size="lg"
            ><IfyLink to="http://aperiam.com" target="_blank"
              >explicabo</IfyLink
            ></IfyTag
          >
          <IfyTag type="info" size="xl">esse</IfyTag>
        </IfyTagList>
      </section>

      <!-- IfyLink -->
      <section>
        <h2 class="title">IfyLink</h2>
        <p>
          Nam magni deserunt enim error sequi totam ipsa nostrum! Hic
          accusantium aspernatur perspiciatis?
          <IfyLink to="http://aperiam.com" target="_blank"
            >Ipsam aperiam enim dolorem</IfyLink
          >
          a hic. Quam, voluptate soluta! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Id natus aut unde voluptatum obcaecati veniam
          repellat soluta, voluptates hic provident in assumenda, maxime sunt
          laudantium est debitis sit beatae. Molestias!
        </p>
      </section>

      <!-- IfyButton -->
      <section>
        <h2 class="title">IfyButton</h2>
        <div class="md:w-1/2 lg:w-1/3 mx-auto mt-4">
          <IfyButtonsGroup>
            <IfyButton type="primary">Primary</IfyButton>
            <IfyButton type="primary" light>Primary Light</IfyButton>

            <IfyButton type="success">Success</IfyButton>
            <IfyButton type="success" light>Success Light</IfyButton>

            <IfyButton type="danger">Danger</IfyButton>
            <IfyButton type="danger" light>Danger Light</IfyButton>

            <IfyButton type="warning">Warning</IfyButton>
            <IfyButton type="warning" light>Warning Light</IfyButton>

            <IfyButton type="info">Info</IfyButton>
            <IfyButton type="info" light>Info Light</IfyButton><br />

            <IfyButton type="light">Light</IfyButton>
            <IfyButton type="dark">Dark</IfyButton>
            <IfyButton type="text">Text</IfyButton>
            <IfyButton type="ghost">Ghost</IfyButton>
          </IfyButtonsGroup>

          <IfyButtonsGroup>
            <IfyButton>Normal</IfyButton>
            <IfyButton disabled>Disabled</IfyButton>
            <IfyButton loading>Loading</IfyButton>
            <IfyButton rounded>Rounded</IfyButton>
            <IfyButton focused>Focused</IfyButton>
            <IfyButton hovered>Hovered</IfyButton>
          </IfyButtonsGroup>

          <IfyButtonsGroup>
            <IfyButton type="primary" outlined>Outlined</IfyButton>
            <IfyButton type="success" outlined>Outlined</IfyButton>
            <IfyButton type="danger" outlined>Outlined</IfyButton>
            <IfyButton type="warning" outlined>Outlined</IfyButton>
            <IfyButton type="info" outlined>Outlined</IfyButton>
          </IfyButtonsGroup>

          <IfyButtonsGroup>
            <IfyButton type="primary" expanded>Expanded</IfyButton>
          </IfyButtonsGroup>

          <div class="bg-brand p-4 mb-4">
            <IfyButtonsGroup>
              <IfyButton type="primary" inverted>Primary</IfyButton>
              <IfyButton type="success" inverted>Success</IfyButton>
              <IfyButton type="danger" inverted>Danger</IfyButton>
              <IfyButton type="warning" inverted>Warning</IfyButton>
              <IfyButton type="info" inverted>Info</IfyButton>
            </IfyButtonsGroup>
            <IfyButtonsGroup>
              <IfyButton type="primary" inverted outlined>Primary</IfyButton>
              <IfyButton type="success" inverted outlined>Success</IfyButton>
              <IfyButton type="danger" inverted outlined>Danger</IfyButton>
              <IfyButton type="warning" inverted outlined>Warning</IfyButton>
              <IfyButton type="info" inverted outlined>Info</IfyButton>
            </IfyButtonsGroup>
          </div>

          <IfyButtonsGroup>
            <IfyButton size="xs">extra-small</IfyButton>
            <IfyButton size="sm">small</IfyButton>
            <IfyButton>normal</IfyButton>
            <IfyButton size="lg">large</IfyButton>
            <IfyButton size="xl">extra-large</IfyButton>
          </IfyButtonsGroup>
        </div>
      </section>

      <!-- IfyIcon -->
      <section>
        <h2 class="title">IfyIcon</h2>
        <div class="space-y-2">
          <div>
            <IfyIcon icon="user-circle" size="xs" />
            <IfyIcon icon="home" size="xs" />
            <IfyIcon icon="tachometer-alt" size="xs" />
          </div>
          <div>
            <IfyIcon icon="user-circle" size="sm" />
            <IfyIcon icon="home" size="sm" />
            <IfyIcon icon="tachometer-alt" size="sm" />
          </div>

          <div>
            <IfyIcon icon="user-circle" />
            <IfyIcon icon="home" />
            <IfyIcon icon="tachometer-alt" />
          </div>

          <div>
            <IfyIcon icon="user-circle" size="lg" />
            <IfyIcon icon="home" size="lg" />
            <IfyIcon icon="tachometer-alt" size="lg" />
          </div>

          <div>
            <IfyIcon icon="user-circle" size="2x" />
            <IfyIcon icon="home" size="2x" type="success" />
            <IfyIcon icon="tachometer-alt" size="2x" type="warning" />
          </div>

          <div>
            <IfyIcon icon="user-circle" size="3x" type="danger" />
            <IfyIcon icon="home" size="3x" type="info" />
            <IfyIcon icon="tachometer-alt" size="3x" type="primary" />
          </div>
        </div>
      </section>

      <!-- IfySelect -->
      <section>
        <h2 class="title">IfySelect</h2>
        <div>
          <IfyField label="Simple">
            <IfySelect placeholder="Select a name">
              <option value="flint">Flint</option>
              <option value="silver">Silver</option>
              <option value="vane">Vane</option>
              <option value="billy">Billy</option>
              <option value="jack">Jack</option>
            </IfySelect>
          </IfyField>

          <IfyField label="Grouped">
            <IfySelect placeholder="Select a character" icon="user-circle">
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
        </div>
      </section>
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

<style lang="postcss" scoped>
.title {
  @apply pb-2 mb-4 border-b border-gray-200 text-2xl font-bold;
}
</style>
