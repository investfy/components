<template>
  <section class="my-8">
    <IfyTable :columns="columns" :rows="rows" compact-mode />
  </section>
</template>

<script>
const rows = require("@/data/sample.json");

export default {
  name: "Table",

  computed: {
    columns() {
      return [
        {
          field: "id",
          label: "ID",
          width: "40",
          numeric: true,
        },
        {
          field: "user.first_name",
          label: "First Name",
        },
        {
          field: "user.last_name",
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
      ];
    },
    rows() {
      return rows;
    },
  },
};
</script>
