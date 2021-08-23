import IfyTable from "./Table.vue";

export default {
  title: "Table",
  component: IfyTable,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IfyTable },
  template: '<ify-table v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  columns: [
    { field: "name", label: "Nome" },
    { field: "email", label: "E-mail" }
  ],
  data: [
    { name: "Isabel", email: "isabel@example.com" },
    { name: "Lorenna", email: "lorenna@example.com" }
  ]
};
