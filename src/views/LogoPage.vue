<template>
  <section>
    <div
      class="bg-gray-200 flex justify-center items-center w-1/2 mx-auto mb-4 p-4 text-center"
    >
      <IfyLogo
        :orientation="orientation"
        :color="color"
        :description="description"
      />
    </div>

    <IfyField label="orientation:">
      <IfySelect v-model="orientation">
        <option value="horizontal" selected>horizontal</option>
        <option value="mini">mini</option>
      </IfySelect>
    </IfyField>

    <IfyField label="color:">
      <IfySelect v-model="color">
        <option value="colored" selected>colored</option>
        <option value="inverted">inverted</option>
        <option value="white">white</option>
        <option value="black">black</option>
      </IfySelect>
    </IfyField>

    <IfyField label="description:">
      <IfyInput v-model="description" type="textarea" rows="2" />
    </IfyField>
  </section>
</template>

<script>
export default {
  name: "LogoPage",

  data() {
    return {
      orientation: "horizontal",
      color: "colored",
      description: "Logotipo Investfy",
    };
  },
};
</script>
