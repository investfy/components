<template>
  <div class="my-4">
    <div class="space-y-4">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPage",

  data() {
    return {
      email: "email@example.com",
      isDropdownActive: false,
      showDrawerRight: false,
      showDrawerLeft: false,
      showDrawerBoxLeft: false,
      showDrawerBoxRight: false,
      showDrawerBoxRightWithNav: true,
      navLinkItems: [
        "Fontawesome 1",
        "Fontawesome 2",
        "Fontawesome 3",
        "Fontawesome 4",
      ],
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
