<template>
  <section class="container">
    <div class="float-right">
      <IfyDropdown>
        <template #trigger>
          <IfyButton>Abrir</IfyButton>
        </template>

        <IfyDropdownItem>Item</IfyDropdownItem>
        <IfyDropdownItem link="#">Link</IfyDropdownItem>
        <IfyDropdownItem separator />
        <IfyDropdownItem clickable>Clickable</IfyDropdownItem>
      </IfyDropdown>
    </div>
  </section>
</template>

<script>
export default {
  name: "DropdownPage",
};
</script>
