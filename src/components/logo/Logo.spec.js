import { shallowMount } from "@vue/test-utils";
import IfyLogo from "./Logo.vue";

describe("IfyLogo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IfyLogo);
  });

  it("deve renderizar uma imagem", () => {
    expect(wrapper.findAll("img").length).toBe(1);
  });

  it("deve renderizar corretamente o texto alternativo da imagem", async () => {
    const description = "Descrição do logotipo";
    await wrapper.setProps({ description });
    expect(wrapper.find("img").attributes("alt")).toBe(description);
  });
});
