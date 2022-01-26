import { mount } from "@vue/test-utils";
import IfyNavItem from "./NavItem.vue";

describe("NavItem.vue", () => {
  it("NavItem Deve renderizar um hr separador", () => {
    const separator = true;
    const clickable = false;
    const centered = false;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
    });

    expect(wrapper.find("hr").exists()).toBe(separator);
  });

  it("NavItem Deve não deve renderizar um hr separador", () => {
    const separator = false;
    const clickable = false;
    const centered = false;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
    });

    expect(wrapper.find("hr").exists()).toBe(separator);
  });

  it("NavItem Deve ser clicável", () => {
    const separator = false;
    const clickable = true;
    const centered = false;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
    });

    expect(wrapper.find(".clickable").exists()).toBe(clickable);
  });

  it("NavItem Não Deve ser clicável ", () => {
    const separator = false;
    const clickable = false;
    const centered = false;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
    });

    expect(wrapper.find(".clickable").exists()).toBe(false);
  });

  it("NavItem - o slot default deve estar centrtalizado ", () => {
    const separator = false;
    const clickable = false;
    const centered = true;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
    });

    expect(wrapper.find(".is-centered").exists()).toBe(centered);
  });

  it("NavItem o slot default não deve estar centrtalizado ", () => {
    const separator = false;
    const clickable = false;
    const centered = null;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
    });

    expect(wrapper.find(".is-centered").exists()).toBe(false);
  });

  it("NavItem Um slot start foi renderizado ", () => {
    const separator = false;
    const clickable = false;
    const centered = null;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
      slots: {
        start: `<div class="divslotstart"> DIVSLOT </div>`,
      },
    });

    expect(wrapper.find(".start-slot").exists()).toBe(true);
    expect(wrapper.find(".divslotstart").exists()).toBe(true);
  });

  it("NavItem -Um slot end foi renderizado ", () => {
    const separator = false;
    const clickable = false;
    const centered = null;

    const wrapper = mount(IfyNavItem, {
      propsData: {
        separator,
        clickable,
        centered,
      },
      slots: {
        end: `<div class="divslotend"> DIVSLOT </div>`,
      },
    });

    expect(wrapper.find(".end-slot").exists()).toBe(true);
    expect(wrapper.find(".divslotend").exists()).toBe(true);
  });
});
