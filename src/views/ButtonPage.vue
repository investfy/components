<template>
  <section class="container">
    <IfyButtonsGroup>
      <IfyButton type="primary">Primary</IfyButton>
      <IfyButton type="primary" light>Primary Light</IfyButton>

      <IfyButton type="success">Success</IfyButton>
      <IfyButton type="success" light>Success Light</IfyButton>

      <IfyButton type="danger">Danger</IfyButton>
      <IfyButton type="danger" light>Danger Light</IfyButton>

      <IfyButton type="warning">Warning</IfyButton>
      <IfyButton type="warning" light>Warning Light</IfyButton>

      <IfyButton type="info">Info</IfyButton>
      <IfyButton type="info" light>Info Light</IfyButton><br />

      <IfyButton type="light">Light</IfyButton>
      <IfyButton type="dark">Dark</IfyButton>
      <IfyButton type="text">Text</IfyButton>
      <IfyButton type="ghost">Ghost</IfyButton>
    </IfyButtonsGroup>

    <IfyButtonsGroup>
      <IfyButton>Normal</IfyButton>
      <IfyButton disabled>Disabled</IfyButton>
      <IfyButton loading>Loading</IfyButton>
      <IfyButton rounded>Rounded</IfyButton>
      <IfyButton focused>Focused</IfyButton>
      <IfyButton hovered>Hovered</IfyButton>
    </IfyButtonsGroup>

    <IfyButtonsGroup>
      <IfyButton type="primary" outlined>Outlined</IfyButton>
      <IfyButton type="success" outlined>Outlined</IfyButton>
      <IfyButton type="danger" outlined>Outlined</IfyButton>
      <IfyButton type="warning" outlined>Outlined</IfyButton>
      <IfyButton type="info" outlined>Outlined</IfyButton>
    </IfyButtonsGroup>

    <IfyButtonsGroup>
      <IfyButton type="primary" expanded>Expanded</IfyButton>
    </IfyButtonsGroup>

    <div class="bg-brand p-4 mb-4">
      <IfyButtonsGroup>
        <IfyButton type="primary" inverted>Primary</IfyButton>
        <IfyButton type="success" inverted>Success</IfyButton>
        <IfyButton type="danger" inverted>Danger</IfyButton>
        <IfyButton type="warning" inverted>Warning</IfyButton>
        <IfyButton type="info" inverted>Info</IfyButton>
      </IfyButtonsGroup>
      <IfyButtonsGroup>
        <IfyButton type="primary" inverted outlined>Primary</IfyButton>
        <IfyButton type="success" inverted outlined>Success</IfyButton>
        <IfyButton type="danger" inverted outlined>Danger</IfyButton>
        <IfyButton type="warning" inverted outlined>Warning</IfyButton>
        <IfyButton type="info" inverted outlined>Info</IfyButton>
      </IfyButtonsGroup>
    </div>

    <IfyButtonsGroup>
      <IfyButton size="xs">extra-small</IfyButton>
      <IfyButton size="sm">small</IfyButton>
      <IfyButton>normal</IfyButton>
      <IfyButton size="lg">large</IfyButton>
      <IfyButton size="xl">extra-large</IfyButton>
    </IfyButtonsGroup>
  </section>
</template>

<script>
export default {
  name: "ButtonPage",
};
</script>
