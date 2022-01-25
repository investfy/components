<template>
  <div>
    <section>
      <h2 @click="showDrawerBoxRightWithNav = !showDrawerBoxRightWithNav">
        IshowDrawerBoxRightWithNav
      </h2>

      <IfyDrawer
        :active.sync="showDrawerBoxRightWithNav"
        side="right"
        bgcolor="primary"
      >
        <template #content>
          <IfyNav title="IfyNav Titulo" :links="navLinkItems">
            <IfyNavItem>Separador abaixo</IfyNavItem>
            <IfyNavItem separator />

            <IfyNavItem centered>
              <IfyAvatar
                slot="start"
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
                title=""
                size="sm"
                class="mr-2"
              />
              <p>Texto centro</p>
            </IfyNavItem>

            <IfyNavItem>
              <IfyAvatar
                slot="start"
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
                title=""
                size="sm"
                class="mr-2"
              />
              <p>not Centro</p>
            </IfyNavItem>

            <IfyNavItem>
              <IfyAvatar
                slot="start"
                src="https://img2.gratispng.com/20180702/pt/kisspng-the-king-of-fighters-maximum-impact-kof-maximum-5b3a30ddd007c7.9281114115305402538521.jpg"
                title=""
                size="sm"
                class="mr-2"
              />
              <p slot="default">KOF MI rules not</p>
            </IfyNavItem>
          </IfyNav>
        </template>
      </IfyDrawer>
    </section>

    <section>
      <h2 @click="showDrawerRight = !showDrawerRight">IfyDrawer RIGHT:</h2>

      <IfyDrawer :active.sync="showDrawerRight" side="right" bgcolor="warning">
        <template #content>
          <IfyField :key="index" v-for="(i, index) in ['a', 'b', 'c', 'd']">
            <IfyInput
              :placeholder="`Extra-Small  ${i}`"
              size="xs"
              icon="user-circle"
            />
          </IfyField>
        </template>
      </IfyDrawer>

      <h2
        class="relative self-center text-left"
        @click="showDrawerLeft = !showDrawerLeft"
      >
        IfyDrawer LEFT:
      </h2>
      <IfyDrawer :active.sync="showDrawerLeft" side="left" bgcolor="success">
        <template #content>
          <p class="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus
            deserunt commodi, exercitationem ex earum ullam, temporibus ipsa ea
            aperiam eius? Quo earum consequuntur quisquam expedita reiciendis in
            alias quas.
          </p>

          <IfyField message="What do you want to search?">
            <IfyInput placeholder="Search..." type="search" icon="search" />
            <p class="control">
              <IfyButton type="primary" label="Search" />
            </p>
          </IfyField>
        </template>
      </IfyDrawer>

      <div class="flex space-x-3">
        <div>
          <h2
            class="relative self-center text-left"
            @click="showDrawerBoxLeft = !showDrawerBoxLeft"
          >
            IfyDrawer LEFT INBOX render slots:
          </h2>
          <div
            class="h-72 w-full md:w-72 border-2 border-red-400 relative overflow-hidden"
          >
            <IfyDrawer
              :active.sync="showDrawerBoxLeft"
              side="left"
              bgcolor="warning"
            >
              <p slot="content" v-for="index in 10" :key="index">
                BLA BLA BLA BLA {{ index }}
              </p>
            </IfyDrawer>
          </div>
        </div>

        <div>
          <h2
            class="relative self-center text-left"
            @click="showDrawerBoxRight = !showDrawerBoxRight"
          >
            IfyDrawer RIGHT INBOX Ifynav renreding links:
          </h2>
          <div
            slot="content"
            class="h-72 w-full md:w-72 border-2 border-red-400 relative overflow-hidden"
          >
            <IfyDrawer
              :active.sync="showDrawerBoxRight"
              side="right"
              bgcolor="primary"
            >
              <IfyNav slot="content" :links="navLinkItems" />
            </IfyDrawer>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-5">
      <h2>IfyNav :</h2>
      <div class="bg-blue-800 w-96 rounded-sm p-2">
        <IfyNav :links="navLinkItems" />
      </div>
    </section>

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

          <h2>IF IfyDropdown</h2>
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
          <IfyAppBar brand-link="/forum" centered class="mb-8">
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
          </IfyAppBar>
        </div>
      </section>

      <section>
        <h2>APPBAR centered = True :</h2>
        <div>
          <IfyAppBar brand-link="/forum" centered class="mb-8">
            <template #start>
              <p>START SLOT CENTERED</p>
            </template>
            <template #end>
              <p>END SLOT</p>
            </template>
          </IfyAppBar>
        </div>
      </section>

      <section>
        <div class="h-96 w-1/3">x</div>
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
      showDrawerRight: false,
      showDrawerLeft: false,
      showDrawerBoxLeft: false,
      showDrawerBoxRight: false,
      showDrawerBoxRightWithNav: true,
      navLinkItems: [
        {
          address:
            "https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons",
          label: "Fontawesome 1",
        },
        {
          address:
            "https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons",
          label: "Fontawesome 2",
        },
        {
          address:
            "https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons",
          label: "Fontawesome 3",
        },
        {
          address:
            "https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons",
          label: "Fontawesome 4",
        },
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
