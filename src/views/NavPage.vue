<template>
  <div>
    <IfyField class="mb-4">
      Fundo escuro: <input type="checkbox" v-model="bgDark" />
    </IfyField>

    <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div :class="['py-2', bgDark && 'bg-brand']">
        <IfyNav
          title="Exemplo com lista simples"
          :items="['Item 1', 'Item 2', 'Item 3', 'Item 4']"
          :light="bgDark"
        />
      </div>

      <div :class="['py-2', bgDark && 'bg-brand']">
        <IfyNav title="Exemplo com slot" :light="bgDark">
          <IfyNavItem>Item 1</IfyNavItem>
          <IfyNavItem>Item 2</IfyNavItem>
          <IfyNavItem link="field">Link</IfyNavItem>
          <IfyNavItem clickable @click="onClick">Clickable</IfyNavItem>
          <IfyNavItem>Separador abaixo</IfyNavItem>
          <IfyNavItem separator />
          <IfyNavItem link="https://google.com">
            <template #start>
              <IfyIcon icon="user" />
            </template>
            Slot com link
          </IfyNavItem>
          <IfyNavItem>
            <template #start>
              <IfyAvatar
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
              />
            </template>

            <em style="color: #009688"
              >Texto longo <strong>formatado</strong> consectetur adipisicing
              elit</em
            >

            <template #end>
              <IfyAvatar
                src="https://res.cloudinary.com/css-tricks/image/upload/c_scale,f_auto,q_auto,w_300/v1593634177/mailchimp_vcd4pk.png"
              />
            </template>
          </IfyNavItem>

          <IfyNavItem clickable @click="onClick">
            <template #start>
              <IfyIcon icon="envelope" size="xl" />
            </template>
            <div style="text-align: center">
              <IfyIcon icon="envelope" size="xl" />
            </div>
            <template #end>
              <IfyIcon icon="envelope" size="xl" />
            </template>
          </IfyNavItem>

          <IfyNavItem>
            <IfyAvatar
              slot="start"
              src="https://img2.gratispng.com/20180702/pt/kisspng-the-king-of-fighters-maximum-impact-kof-maximum-5b3a30ddd007c7.9281114115305402538521.jpg"
            />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </IfyNavItem>

          <IfyNavItem link="https://app.investfy.com">
            <template #start>Lorem</template>
            ipsum
            <template #end>dolor sit amet</template>
          </IfyNavItem>
        </IfyNav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavPage",

  data() {
    return {
      bgDark: false,
    };
  },

  methods: {
    onClick() {
      alert("Fui clicado!");
    },
  },
};
</script>
