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
      defaultValue: false,
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyDrawer,
  },
  template: `
    <IfyDrawer v-bind="$props">
      <template v-if="${"content" in args}">${args.content}</template>
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
