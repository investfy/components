import IfyDrawer from "./Drawer.vue";

export default {
  title: "Drawer",
  component: IfyDrawer,
  decorators: [() => `<div class="flex justify-center h-full"><story/></div>`],
  argTypes: {
    side: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    bgcolor: {
      control: {
        type: "select",
        options: ["primary", "success", "warning", "danger", "info"],
      },
    },
    active: {
      control: "boolean",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyDrawer,
  },
  template: `<IfyDrawer v-bind="$props">
      <template #content>
      <div class="flex flex-col">
        <p>Ponha teu conteúdo aqui.</p>
        <div class="w-full py-1 flex flex-col"  >
        <a href="https://www.google.com">Test href</a>
        <a href="https://v2.tailwindcss.com/docs/flex-direction#column">Test href 2</a>
        <button class="border border-gray-400 px-4 py-2 rounded">Some Button</button>
        </div>
        </div>
        </template>
    </IfyDrawer>`,
});

export const Default = Template.bind({});
Default.argTypes = {};

export const Slots = Template.bind({});
Slots.args = {
  bgcolor: "warning",
  side: "left",
  active: true,
};
