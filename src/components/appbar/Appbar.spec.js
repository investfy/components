import { shallowMount, mount } from "@vue/test-utils";
import AppBar from "./AppBar.vue";

describe("AppBar.vue", () => {
  it("deve possuir o link", () => {
    const brandLink =
      "horizontalhttps://vuejs.org/v2/guide/instance.html#Creating-a-Vue-Instance";

    const wrapper = shallowMount(AppBar, {
      propsData: {
        brandLink,
      },
    });

    const image = wrapper.find("a");
    expect(image.attributes("href")).toBe(brandLink);
  });

  it("deve possuir classes mx-auto e ml-4", () => {
    const centered = true;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        centered,
      },
    });

    expect(wrapper.find(".ml-4").exists()).toBe(true);
    expect(wrapper.find(".mx-auto").exists()).toBe(true);
  });

  it("deve possuir classes mr-auto e ml-auto", () => {
    const centered = false;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        centered,
      },
    });

    expect(wrapper.find(".mr-auto").exists()).toBe(true);
    expect(wrapper.find(".ml-auto").exists()).toBe(true);
  });

  it("deve possuir classe container", () => {
    const full = false;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        full,
      },
    });
    expect(wrapper.find(".container").exists()).toBe(true);
  });

  it("não deve possuir classe container", () => {
    const full = true;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        full,
      },
    });
    expect(wrapper.find(".container").exists()).toBe(false);
  });

  it("deve possuir classe shadow-md", () => {
    const shadow = true;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        shadow,
      },
    });
    expect(wrapper.find(".shadow-md").exists()).toBe(true);
  });

  it("não deve possuir classe shadow-md", () => {
    const shadow = false;
    const wrapper = shallowMount(AppBar, {
      propsData: {
        shadow,
      },
    });
    expect(wrapper.find(".shadow-md").exists()).toBe(false);
  });

  it("Não deve possuir classe bg-white", () => {
    const transparent = true;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        transparent,
      },
    });
    expect(wrapper.find(".bg-white").exists()).toBe(false);
  });

  test("não deve possuir classe bg-white", () => {
    const transparent = false;
    const wrapper = mount(AppBar, {
      propsData: {
        transparent,
      },
    });
    expect(wrapper.find(".bg-white").exists()).toBe(true);
  });
});
