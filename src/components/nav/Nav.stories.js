import IfyNav from "./Nav.vue";
import IfyNavItem from "./NavItem.vue";

export default {
  title: "Nav",
  component: IfyNav,
  decorators: [
    () =>
      `<div class="flex justify-center mx-auto h-full w-96 bg-gray-700 pb-4"><story/></div>`,
  ],
  argTypes: {
    title: {},
    items: [],
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyNav,
    IfyNavItem,
  },
  template: `
  <IfyNav v-bind="$props">
  ${args.IfyNavItem ? args.IfyNavItem : ""}
  </IfyNav>`,
});

export const Empty = Template.bind({});
Empty.argTypes = {};

export const Slots = Template.bind({});
Slots.args = {
  title: "Título de Exemplo com slots",
  IfyNavItem: `<IfyNavItem centered>
  <div class="rounded mx-2 h-9 w-9 bg-indigo-100" slot="start"></div>
  <p>Start, Centro e End</p>
  <div class="rounded mx-2 h-9 w-9 bg-indigo-300" slot="end"></div>
 </IfyNavItem>`,
};

export const SimpleList = Template.bind({});
SimpleList.args = {
  title: "Lista Simples",
  items: ["AA", "BB"],
  template: `<IfyNavItem >  </IfyNavItem>`,
};
