import { shallowMount, mount, RouterLinkStub } from "@vue/test-utils";
import AppBar from "./AppBar.vue";

describe("AppBar.vue", () => {
  it("deve possuir o link", () => {
    const brandLink = "/forum";
    const wrapper = shallowMount(AppBar, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
      propsData: {
        brandLink,
      },
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe(brandLink);
  });

  it("slot #start deve estar centralizado", () => {
    const centered = true;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        centered,
      },
      slots: {
        start: '<div class="fake-msg"></div>',
      },
    });

    const startSlot = wrapper.find(".start-slot");
    expect(startSlot.classes().includes("is-centered")).toBe(true);
  });

  it("o start slot não deve estar centralizado", () => {
    const centered = false;

    const wrapper = shallowMount(AppBar, {
      propsData: {
        centered,
      },
      slots: {
        start: '<div class="fake-msg"></div>',
      },
    });

    const startSlot = wrapper.find(".start-slot");
    expect(startSlot.classes().includes("is-centered")).toBe(false);
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
