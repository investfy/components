import IfyAvatar from "./Avatar.vue";

export default {
  title: "Avatar",
  component: IfyAvatar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IfyAvatar },
  template: '<IfyAvatar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  src: "https://images.pexels.com/users/avatars/2417028/erik-mclean-965.jpeg?auto=compress&fit=crop&h=80&w=80",
};
