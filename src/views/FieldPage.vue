<template>
  <section>
    <IfyField message="What do you want to search?">
      <IfyInput placeholder="Search..." type="search" icon="search" />
      <div class="ifycontrol">
        <IfyButton type="primary" label="Search" />
      </div>
    </IfyField>

    <IfyField message="What a beautiful email!!">
      <IfyInput placeholder="This is expanded" expanded />
      <div class="ifycontrol">
        <span class="ifyfield__static">@gmail.com</span>
      </div>
    </IfyField>

    <hr class="my-4" />

    <IfyField>
      <IfySelect placeholder="Currency">
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </IfySelect>
      <IfyInput type="number" placeholder="0,00" />
      <p class="ifycontrol">
        <IfyButton type="success" label="Transfer" />
      </p>
    </IfyField>

    <IfyField>
      <p class="ifycontrol">
        <IfyButton icon-left="bold" />
      </p>
      <p class="ifycontrol">
        <IfyButton icon-left="italic" />
      </p>
      <p class="ifycontrol">
        <IfyButton icon-left="underline" />
      </p>
      <p class="ifycontrol">
        <IfyButton icon-left="align-left" />
      </p>
      <p class="ifycontrol">
        <IfyButton icon-left="align-center" />
      </p>
      <p class="ifycontrol">
        <IfyButton icon-left="align-right" />
      </p>
      <IfyInput placeholder="Search..." type="search" icon="search" />
    </IfyField>

    <IfyField>
      <p class="ifycontrol">
        <IfyButton label="Button" type="primary" />
      </p>
      <p class="ifycontrol">
        <IfyDropdown>
          <template #trigger>
            <IfyButton type="primary" icon-left="caret-down" />
          </template>

          <div class="w-40">
            <IfyDropdownItem>Action</IfyDropdownItem>
            <IfyDropdownItem>Another action</IfyDropdownItem>
            <IfyDropdownItem>Something else</IfyDropdownItem>
          </div>
        </IfyDropdown>
      </p>
    </IfyField>

    <IfyField>
      <p class="ifycontrol">
        <IfyDropdown>
          <template #trigger>
            <IfyButton label="Filters" icon-right="caret-down" icon-size="xs" />
          </template>

          <div class="w-40">
            <IfyDropdownItem value="open_issues"
              >Open Issues and Pull Requests</IfyDropdownItem
            >
            <IfyDropdownItem value="your_issues">Your Issues</IfyDropdownItem>
            <IfyDropdownItem value="pull_requests"
              >Your Pull Requests</IfyDropdownItem
            >
            <IfyDropdownItem value="everything">Everything</IfyDropdownItem>
          </div>
        </IfyDropdown>
      </p>
      <IfyInput icon="search" type="search" placeholder="Search..." />
    </IfyField>
  </section>
</template>

<script>
export default {
  name: "FieldPage",
};
</script>
