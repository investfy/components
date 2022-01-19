<template>
  <section>
    <h2 class="title">IfyTag</h2>
    <IfyTagList>
      <IfyTag size="xs">architecto</IfyTag>
      <IfyTag type="primary" size="sm">animi</IfyTag>
      <IfyTag type="success">architecto</IfyTag>
      <IfyTag type="warning">minus</IfyTag>
      <IfyTag type="danger" size="lg"
        ><IfyLink to="http://aperiam.com" target="_blank"
          >explicabo</IfyLink
        ></IfyTag
      >
      <IfyTag type="info" size="xl">esse</IfyTag>
    </IfyTagList>
  </section>
</template>

<script>
export default { name: "Tag" };
</script>
