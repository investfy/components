import { shallowMount } from "@vue/test-utils";
import IfyLogo from "./Logo.vue";

describe("Logo.vue", () => {
  it("deve renderizar uma imagem", () => {
    const wrapper = shallowMount(IfyLogo);
    expect(wrapper.findAll("img").length).toBe(1);
  });

  it("o texto alternativo da imagem deve renderizar corretamente", () => {
    const description = "Descrição do logotipo";
    const wrapper = shallowMount(IfyLogo, {
      propsData: { description },
    });

    expect(wrapper.find("img").attributes("alt")).toBe(description);
  });
});
