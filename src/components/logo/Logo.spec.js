import { shallowMount } from "@vue/test-utils";
import IfyLogo from "./Logo.vue";

describe("Logo.vue", () => {
  it("deve renderizar uma imagem", () => {
    const wrapper = shallowMount(IfyLogo);
    const list = wrapper.findAll("img");
    expect(list.length).toBe(1);
  });

  describe.skip("o arquivo da imagem deve possuir a orientação correta", () => {
    const orientation = "horizontal";
    const color = "colored";

    const wrapper = shallowMount(IfyLogo, {
      propsData: {
        orientation,
        color,
      },
    });

    const image = wrapper.find("img");
    expect(image.attributes("src")).toBe(`./logo-${orientation}-${color}.svg`);
  });

  it("o texto alternativo da imagem deve renderizar corretamente", () => {
    const description = "Descrição do logotipo";
    const wrapper = shallowMount(IfyLogo, {
      propsData: { description },
    });

    expect(wrapper.find("img").attributes("alt")).toEqual(description);
  });

  it("o arquivo da imagem deve possuir a paleta de cores correta", () => {});
});
