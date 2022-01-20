import IfyDrawerr from "./Drawerr.vue";

export default {
  title: "Drawerr",
  component: IfyDrawerr,
  decorators: [() => `<div class="flex justify-center h-full"><story/></div>`],
  argTypes: {
    side: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
    bgcolor: {
      control: {
        type: "select",
        options: ["primary", "success", "warning", "danger", "info"],
      },
    },
    active: {
      control: "boolean",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyDrawerr,
  },
  template: `<IfyDrawerr v-bind="$props">
      <template #trigger>
        <button class="border border-gray-400 px-4 py-2 rounded">Dropdown</button>
      </template>
      <div class="w-40 py-1">
        <a href="#">Test href</a>
        <a href="#">Test href 2</a>
        <a>Disabled</a>
        <a separator />
        <a clickable>Button</a>
      </div>
    </IfyDrawerr>`,
});

export const Default = Template.bind({});
Default.args = {
  bgcolor: "warning",
  side: "left",
  active: false,
};
