import IfyTable from "./Table.vue";

export default {
  title: "Table",
  component: IfyTable,
  argTypes: {
    columns: {
      type: "array",
    },
    rows: {
      type: "array",
    },
    maxHeight: {
      type: "string",
    },
    fixedHeader: {
      type: "boolean",
      defaultValue: false,
    },
    lineNumbers: {
      type: "boolean",
      defaultValue: false,
    },
    rowStyleClass: { type: "string" },
    rtl: {
      type: "boolean",
      defaultValue: false,
    },
    mode: { type: "string" },
    totalRecords: { type: "number" },
    compactMode: {
      type: "boolean",
      defaultValue: false,
    },
    // Slots
    tableActions: { control: "text" },
    tableActionsBottom: { control: "text" },
    emptystate: { control: "text" },
  },
};

const SimpleTemplate = (args, { argTypes }) => ({
  components: { IfyTable },
  props: Object.keys(argTypes),
  template: `
    <IfyTable v-bind="$props">
      <template v-if="tableActions !== ''" #table-actions>{{ tableActions }}</template>
      <template v-if="tableActionsBottom !== ''" #table-actions-bottom>{{ tableActionsBottom }}</template>
      <template v-if="emptystate !== ''" #emptystate>{{ emptystate }}</template>
    </IfyTable>`,
});

export const Simple = SimpleTemplate.bind({});
Simple.args = {
  columns: [
    {
      field: "id",
      label: "ID",
      width: "40",
      numeric: true,
    },
    {
      field: "first_name",
      label: "First Name",
    },
    {
      field: "last_name",
      label: "Last Name",
    },
    {
      field: "date",
      label: "Date",
      centered: true,
    },
    {
      field: "gender",
      label: "Gender",
    },
  ],
  rows: [
    {
      id: 1,
      first_name: "Jesse",
      last_name: "Simmons",
      date: "2016-10-15 13:43:27",
      gender: "Male",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Jacobs",
      date: "2016-12-15 06:00:53",
      gender: "Male",
    },
    {
      id: 3,
      first_name: "Tina",
      last_name: "Gilbert",
      date: "2016-04-26 06:26:28",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Clarence",
      last_name: "Flores",
      date: "2016-04-10 10:28:46",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Anne",
      last_name: "Lee",
      date: "2016-12-06 14:38:38",
      gender: "Female",
    },
  ],
};
