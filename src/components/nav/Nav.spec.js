import { shallowMount } from "@vue/test-utils";
import IfyNav from "./Nav.vue";

describe("Nav.vue", () => {
  it("Nav deve renderizar uma lista de array", () => {
    const items = [
      "Fontawesome 1",
      "Fontawesome 2",
      "Fontawesome 3",
      "Fontawesome 4",
    ];
    const title = "Título do Nav";

    const wrapper = shallowMount(IfyNav, {
      propsData: {
        items,
        title,
      },
    });

    expect(wrapper.find(".list-none > ul > li").exists()).toBe(true);

    expect(wrapper.find(".list-none > ul > li").text()).toBe("Fontawesome 1");
  });

  it("Nav deve exibir o título conforme definido", () => {
    const items = ["Fontawesome 1"];
    const title = "Título do Nav";

    const wrapper = shallowMount(IfyNav, {
      propsData: {
        items,
        title,
      },
    });
    expect(wrapper.find("nav > p").text()).toBe(title);
  });

  it("Nav Não deve exibir o título", () => {
    const items = ["Fontawesome 1"];
    const title = null;

    const wrapper = shallowMount(IfyNav, {
      propsData: {
        items,
        title,
      },
    });
    expect(wrapper.find("nav > p").exists()).toBe(false);
  });
});
