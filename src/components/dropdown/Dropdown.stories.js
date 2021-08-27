import IfyDropdown from "./Dropdown.vue";

export default {
  title: "Dropdown",
  component: IfyDropdown,
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
  components: { IfyDropdown },
  props: Object.keys(argTypes),
  template: `<ify-dropdown v-bind="$props" />`,
  setup: () => ({ args: { ...args } }),
});

export const Default = Template.bind({});
Default.argTypes = {};
