import IfyLogo from "./Logo.vue";

export default {
  title: "Logo",
  component: IfyLogo,
  decorators: [() => `<div class="flex justify-center"><story/></div>`],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["colored", "white", "mono"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IfyLogo },
  template: '<IfyLogo v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  orientation: "horizontal",
  color: "colored",
  description: "Logotipo Investfy",
};
