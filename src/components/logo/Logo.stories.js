import IfyLogo from "./Logo.vue";

export default {
  title: "Logo",
  component: IfyLogo,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IfyLogo },
  template: '<IfyLogo v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: "horizontal",
};
