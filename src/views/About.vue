<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, facere
      corporis! Praesentium minus atque suscipit consectetur id! Eum dignissimos
      quidem earum expedita, nulla, porro quae, excepturi ab delectus rerum
      nobis!
    </p>
    <p>
      <IfyTag type="default" size="xs">architecto</IfyTag>
      <IfyTag type="success" size="sm">animi</IfyTag>
      <IfyTag type="warning" size="md">minus</IfyTag>
      <IfyTag type="danger" size="lg"
        ><IfyLink to="http://aperiam.com" target="_blank"
          >explicabo</IfyLink
        ></IfyTag
      >
      <IfyTag type="info" size="xl">esse</IfyTag>
    </p>
    <p>
      Nam magni deserunt enim error sequi totam ipsa nostrum! Hic accusantium
      aspernatur perspiciatis?
      <IfyLink to="http://aperiam.com" target="_blank"
        >Ipsam aperiam enim dolorem</IfyLink
      >
      a hic. Quam, voluptate soluta! Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Id natus aut unde voluptatum obcaecati veniam repellat
      soluta, voluptates hic provident in assumenda, maxime sunt laudantium est
      debitis sit beatae. Molestias!
    </p>

    <section class="w-1/3 mx-auto mt-4">
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
  </div>
</template>
