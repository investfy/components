import { shallowMount } from "@vue/test-utils";
import IfyLogo from "./Logo.vue";

describe("Logo.vue", () => {
  it("deve renderizar uma imagem", () => {
    const wrapper = shallowMount(IfyLogo);
    expect(wrapper.find("img").length).toEqual(1);
  });

  it("o arquivo da imagem deve possuir a orientação correta", () => {});

  it("o arquivo da imagem deve possuir a paleta de cores correta", () => {});

  it("o texto alternativo da imagem deve renderizar corretamente", () => {
    const description = "Descrição do logotipo";
    const wrapper = shallowMount(IfyLogo, {
      propsData: { description },
    });

    expect(wrapper.find("img").prop("alt")).toEqual(description);
  });
});
