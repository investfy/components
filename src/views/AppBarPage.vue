<template>
  <IfyAppBar brand-link="/" class="mb-8">
    <template #end>
      <IfyProfileDropdown
        name="John Doe"
        subname="john.doe@example.com"
        avatar="https://images.pexels.com/users/avatars/2417028/erik-mclean-965.jpeg?auto=compress&fit=crop&h=40&w=40"
        :active.sync="isDropdownActive"
      >
        <IfyDropdownItem link="/appbar">AppBar</IfyDropdownItem>
        <IfyDropdownItem link="/avatar">Avatar</IfyDropdownItem>
        <IfyDropdownItem link="/drawer">Drawer</IfyDropdownItem>
        <IfyDropdownItem link="/dropdown">Dropdown</IfyDropdownItem>
        <IfyDropdownItem link="/icon">Icon</IfyDropdownItem>
        <IfyDropdownItem link="/link">Link</IfyDropdownItem>
        <IfyDropdownItem link="/logo">Logo</IfyDropdownItem>
        <IfyDropdownItem link="/nav">Nav</IfyDropdownItem>
        <IfyDropdownItem link="/profiledropdown"
          >ProfileDropdown</IfyDropdownItem
        >
        <IfyDropdownItem link="/table">Table</IfyDropdownItem>
        <IfyDropdownItem link="/tag">Tag</IfyDropdownItem>
        <IfyDropdownItem separator />
        <IfyDropdownItem link="/field">Field</IfyDropdownItem>
        <IfyDropdownItem link="/input">Input</IfyDropdownItem>
        <IfyDropdownItem link="/select">Select</IfyDropdownItem>
      </IfyProfileDropdown>
    </template>
  </IfyAppBar>
</template>

<script>
export default {
  name: "AppBarPage",

  data() {
    return {
      isDropdownActive: false,
    };
  },

  watch: {
    $route() {
      this.isDropdownActive = false;
    },
  },
};
</script>
