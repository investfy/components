import IfyDropdown from "./Dropdown.vue";
import IfyDropdownItem from "./DropdownItem.vue";

export default {
  title: "Dropdown",
  component: IfyDropdown,
  decorators: [() => ({ template: '<div class="text-center"><story/></div>' })],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyDropdown,
    IfyDropdownItem,
  },
  template: `<IfyDropdown v-bind="$props">
      <template #trigger>
        <button class="border border-gray-400 px-4 py-2 rounded">Dropdown</button>
      </template>
      <div class="w-40 py-1">
        <IfyDropdownItem link="#">Test link</IfyDropdownItem>
        <IfyDropdownItem link="#">Test link 2</IfyDropdownItem>
        <IfyDropdownItem>Disabled</IfyDropdownItem>
        <IfyDropdownItem separator />
        <IfyDropdownItem clickable>Button</IfyDropdownItem>
      </div>
    </IfyDropdown>`,
});

export const Default = Template.bind({});
Default.args = {};
