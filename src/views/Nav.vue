<template>
  <div>
    <section class="flex pt-5 flex-wrap ">
      <div class="mr-2 w-50">
        <h2>IfyNav List simple In Dark</h2>
        <div class="bg-blue">
          <IfyNav isDark :items="navLinkItems" />
        </div>
      </div>

      <div class="mr-2 w-50">
        <h2>IfyNav List simple In Light</h2>
        <div>
          <IfyNav :items="navLinkItems" />
        </div>
      </div>
    </section>

    <hr class="divide-x-4 my-4" />
    <section>
      <div class="flex flex-wrap">
        <div class="bg-blue w-full md:w-80">
          <h2>IfyNav bg dark</h2>
          <IfyNav isDark title="IfyNav Titulo" :items="navLinkItems">
            <IfyNavItem isDark> A Estes são IfyNavItem's isdark</IfyNavItem>
            <IfyNavItem isDark>IfyNavItem possuem 3 slots:</IfyNavItem>
            <IfyNavItem isDark>start, default e end</IfyNavItem>
            <IfyNavItem isDark> A props centered altera o default</IfyNavItem>
            <IfyNavItem isDark clickable
              >Este IfyNavItem é clickável</IfyNavItem
            >
            <IfyNavItem isDark centered>Estes possui centered</IfyNavItem>
            <IfyNavItem isDark>Separador abaixo</IfyNavItem>

            <IfyNavItem separator />

            <IfyNavItem isDark centered>
              <IfyAvatar
                slot="start"
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
                title=""
                size="sm"
                class="mr-2"
              />
              <div>111111</div>
              <div class="rounded h-9 w-9 bg-indigo-100" slot="end"></div>
            </IfyNavItem>

            <IfyNavItem  centered isDark>
              <IfyAvatar
                slot="start"
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
                title=""
                size="sm"
                class="mr-2"
              />
              <div>not Centro Dark </div>
             <div class="rounded h-9 w-9 bg-indigo-100" slot="end"></div>
            </IfyNavItem>

            <IfyNavItem isDark clickable>
              <IfyAvatar
                slot="start"
                src="https://img2.gratispng.com/20180702/pt/kisspng-the-king-of-fighters-maximum-impact-kof-maximum-5b3a30ddd007c7.9281114115305402538521.jpg"
                title=""
                size="sm"
                class="mr-2"
              />
              <p slot="default">KOF MI clickable</p>
            </IfyNavItem>

            <IfyNavItem isDark>
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

            <IfyNavItem isDark centered>
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

        <div class="ml-6 w-50 border-2 border-gray-600">
          <h2>IfyNav bg light</h2>
          <IfyNav title="IfyNav Titulo" :items="navLinkItems">
            <IfyNavItem> c Estes são IfyNavItem's</IfyNavItem>
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
              <p>Texto centro B</p>
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
              <IfyAvatar
                slot="end"
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
                title=""
                size="sm"
                class="mr-2"
              />
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
        "Fontawesome 1 123456789456 45645645",
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
