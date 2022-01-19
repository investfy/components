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

      <section>
        <h2>IfyNav :</h2>
        <div style="float: right">
          <!-- <IfyNav :data="['Item 1', 'Item 2', 'Item 3']" /> -->
          <IfyDropdown>
            <template #trigger>Botão</template>
            <a href=""><span>asdasdsad</span></a>
            <IfyDropdownItem>Lorem ipsum dolor</IfyDropdownItem>
            <IfyDropdownItem separator />
            <IfyDropdownItem>Lorem ipsum dolor</IfyDropdownItem>
            <IfyDropdownItem>Lorem ipsum dolor</IfyDropdownItem>
            <IfyDropdownItem>Lorem ipsum dolor</IfyDropdownItem>
            <p class="w-96 relative z-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              possimus deserunt commodi, exercitationem ex earum ullam,
              temporibus ipsa ea aperiam eius? Quo earum consequuntur quisquam
              expedita reiciendis in alias quas.
            </p>
          </IfyDropdown>
        </div>
      </section>

      <section>
        <h2>IfyLogo :</h2>
        <div>
          <IfyNavbar brand-link="/" centered class="mb-8">
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
                <IfyDropdownItem link="https://www.google.com"
                  >Licença</IfyDropdownItem
                >
                <IfyDropdownItem separator />
                <IfyDropdownItem clickable>Sair</IfyDropdownItem>
              </IfyProfileDropdown>
            </template>
          </IfyNavbar>
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
      isDropdownActive: false,
    };
  },

  methods: {
    clearIconClick() {
      this.email = "";
    },
  },
};
</script>
