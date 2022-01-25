<template>
  <VueGoodTable v-bind="$props" v-on="$listeners">
    <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
      ><slot :name="name" v-bind="slotData"
    /></template>
  </VueGoodTable>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "IfyTable",

  components: {
    VueGoodTable,
  },

  props: Object.assign(VueGoodTable.props, {
    styleClass: {
      default: "vgt-table striped bordered",
    },
  }),
};
</script>
