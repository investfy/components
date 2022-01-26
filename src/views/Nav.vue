<template>
  <div>
    <section class="pt-5">
      <h2>IfyNav</h2>
      <div class="bg-blue-900 w-96 p-4 rounded-sm">
        <IfyNav :items="navLinkItems" />
      </div>
    </section>
    <hr class="divide-x-4 my-4" />
    <section>
      <h2>IfyNav com Nav Item</h2>
      <div class="bg-blue w-1/3 p-4 mt-3">
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
