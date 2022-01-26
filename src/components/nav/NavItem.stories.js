import IfyNavItem from "./NavItem.vue";

export default {
  title: "NavItem",
  component: IfyNavItem,
  decorators: [
    () =>
      `<div class="flex items-center  h-7 w-3/4 bg-gray-300 container"> <story/></div>`,
  ],
  argTypes: {
    centered: {
      control: "boolean",
    },
    clickable: {
      control: "boolean",
    },
    separator: {
      control: "boolean",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { IfyNavItem },
  props: Object.keys(argTypes),
  template: `<IfyNavItem v-bind="$props">
    <template v-if="${"start" in args}" #start>${args.start}</template>
    <template v-if="${"default" in args}" >${args.default}</template>
    <template v-if="${"end" in args}" #end>${args.end}</template>
  </IfyNavItem>`,
  setup: () => ({ args: { ...args } }),
});

export const Slots = Template.bind({});
Slots.args = {
  start: "Start Slot",
  end: "End Slot",
  default: "Default Slot",
};
Slots.argTypes = { separator: false };

export const Default = Template.bind({});
Default.argTypes = {};
Default.args = {};
