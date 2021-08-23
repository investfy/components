import IfyHeader from "./Header.vue";

export default {
  title: "Header",
  component: IfyHeader,
};

export const Logged = () => ({
  components: { IfyHeader },
  template: '<ify-header />',
});
