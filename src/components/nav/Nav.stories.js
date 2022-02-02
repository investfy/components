import IfyNav from "./Nav.vue";
import IfyNavItem from "./NavItem.vue";

export default {
  title: "Nav",
  component: IfyNav,
};

export const Complete = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyNav,
    IfyNavItem,
  },
  template: `
    <IfyNav v-bind="$props">
      <IfyNavItem clickable>Item 1</IfyNavItem>
      <IfyNavItem>Item 2</IfyNavItem>
      <IfyNavItem>Item 3</IfyNavItem>
      <IfyNavItem separator />
      <IfyNavItem clickable>Item 4</IfyNavItem>
      <IfyNavItem><a href="#">Item com link</a></IfyNavItem>
    </IfyNav>`,
});
Complete.args = {
  title: "Exemplo de Título",
};

export const NavSlot = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyNav,
    IfyNavItem,
  },
  template: `
    <IfyNav v-bind="$props">
      <template v-if="${"default" in args && args.default !== ""}">
        ${args.default}
      </template>
    </IfyNav>`,
});
NavSlot.args = {
  default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt iusto sint nisi numquam alias laborum dolor quae consequatur, qui ipsum incidunt explicabo dolore facere! Eveniet, deleniti odio? Quidem, nihil nemo.`,
};

export const NavItems = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {
    IfyNav,
    IfyNavItem,
  },
  template: `
    <IfyNav>
      <IfyNavItem v-bind="$props">
        <template v-if="${"start" in args && args.start !== ""}" #start>
          ${args.start}
        </template>
        <template v-if="${"default" in args && args.default !== ""}">
          ${args.default}
        </template>
        <template v-if="${"end" in args && args.end !== ""}" #end>
          ${args.end}
        </template>
      </IfyNavItem>
    </IfyNav>`,
});
NavItems.args = {
  separator: false,
  clickable: false,
  centered: false,
  start: "",
  default: `Lorem ipsum dolor`,
  end: "",
};
