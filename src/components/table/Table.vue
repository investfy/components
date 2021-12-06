<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead v-if="columns.length" class="bg-gray-100">
      <tr>
        <th
          v-for="(column, index) in columns"
          :key="index"
          class="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider"
        >
          {{ column.label }}
        </th>
      </tr>
    </thead>

    <tbody v-if="data.length" class="bg-white divide-y divide-gray-200">
      <tr v-for="(row, index) in data" :key="index">
        <template v-for="column in columns">
          <td class="px-4 py-2 whitespace-nowrap" :key="column.field">
            {{ row[column.field] || "" }}
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",

  props: {
    data: {
      type: Array,
      default: () => [],
    },

    columns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
