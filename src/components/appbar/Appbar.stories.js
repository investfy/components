import IfyAppBar from "./AppBar.vue";

export default {
  title: "AppBar",
  component: IfyAppBar,
  argTypes: {
    brandImg: {
      table: {
        disable: true,
      },
    },
    brandLink: {
      table: {
        disable: true,
      },
    },
    centered: {
      control: "boolean",
    },
    full: {
      control: "boolean",
    },
    shadow: {
      control: "boolean",
    },
    transparent: {
      control: "boolean",
    },
  },
  args: {
    centered: false,
    full: false,
    shadow: true,
    transparent: false,
  },
};

const Template = (args, { argTypes }) => ({
  components: { IfyAppBar },
  props: Object.keys(argTypes),
  template: `<IfyAppBar v-bind="$props">
    <template v-if="${"start" in args}" #start>${args.start}</template>
    <template v-if="${"end" in args}" #end>${args.end}</template>
  </IfyAppBar>`,
  setup: () => ({ args: { ...args } }),
});

export const Default = Template.bind({});
Default.argTypes = {};

export const Slots = Template.bind({});
Slots.args = {
  start: "Start Slot",
  end: "End Slot",
};