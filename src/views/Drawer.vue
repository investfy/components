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
          <IfyNav title="IfyNav Titulo" :items="navLinkItems">
            <IfyNavItem>Estes são IfyNavItem's</IfyNavItem>
            <IfyNavItem>IfyNavItem possuem 3 slots:</IfyNavItem>
            <IfyNavItem>start, default e end</IfyNavItem>
            <IfyNavItem>A props centered altera o default</IfyNavItem>
            <IfyNavItem clickable>Este IfyNavItem é clickável</IfyNavItem>
            <IfyNavItem centered>Estes possui centered</IfyNavItem>
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

            <IfyNavItem clickable>
              <IfyAvatar
                slot="start"
                src="https://img2.gratispng.com/20180702/pt/kisspng-the-king-of-fighters-maximum-impact-kof-maximum-5b3a30ddd007c7.9281114115305402538521.jpg"
                title=""
                size="sm"
                class="mr-2"
              />
              <p slot="default">KOF MI clickable</p>
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
              <div class="rounded h-9 w-9 bg-indigo-500" slot="end"></div>
            </IfyNavItem>

            <IfyNavItem centered>
              <IfyAvatar
                slot="start"
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
                title=""
                size="sm"
                class="mr-2"
              />
              <p>Start, Centro e End Slots</p>
              <div class="rounded h-9 w-9 bg-indigo-100" slot="end"></div>
            </IfyNavItem>
          </IfyNav>
        </template>
      </IfyDrawer>
    </section>
    <hr class="divide-x-4 my-4" />
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

      <hr class="divide-x-4 my-4" />
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

      <hr class="divide-x-4 my-4" />

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

        <hr class="divide-x-4 my-4" />

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
              <IfyNav slot="content" :items="navLinkItems" />
            </IfyDrawer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      email: "email@example.com",
      showDrawerRight: false,
      showDrawerLeft: false,
      showDrawerBoxLeft: false,
      showDrawerBoxRight: false,
      showDrawerBoxRightWithNav: false,
      navLinkItems: [
        "Fontawesome 1",
        "Fontawesome 2",
        "Fontawesome 3",
        "Fontawesome 4",
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.title {
  @apply pb-2 mb-4 border-b border-gray-200 text-2xl font-bold;
}
</style>
