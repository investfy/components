<template>
  <section>
    <h2 class="title">IfyIcon</h2>
    <div class="space-y-2">
      <div>
        <IfyIcon icon="user-circle" size="xs" />
        <IfyIcon icon="home" size="xs" />
        <IfyIcon icon="tachometer-alt" size="xs" />
      </div>
      <div>
        <IfyIcon icon="user-circle" size="sm" />
        <IfyIcon icon="home" size="sm" />
        <IfyIcon icon="tachometer-alt" size="sm" />
      </div>

      <div>
        <IfyIcon icon="user-circle" />
        <IfyIcon icon="home" />
        <IfyIcon icon="tachometer-alt" />
      </div>

      <div>
        <IfyIcon icon="user-circle" size="lg" />
        <IfyIcon icon="home" size="lg" />
        <IfyIcon icon="tachometer-alt" size="lg" />
      </div>

      <div>
        <IfyIcon icon="user-circle" size="2x" />
        <IfyIcon icon="home" size="2x" type="success" />
        <IfyIcon icon="tachometer-alt" size="2x" type="warning" />
      </div>

      <div>
        <IfyIcon icon="user-circle" size="3x" type="danger" />
        <IfyIcon icon="home" size="3x" type="info" />
        <IfyIcon icon="tachometer-alt" size="3x" type="primary" />
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "Icon" };
</script>
