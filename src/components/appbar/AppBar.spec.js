import { shallowMount } from "@vue/test-utils";
import IfyAppBar from "./AppBar.vue";

describe("IfyAppBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IfyAppBar, {
      stubs: {
        IfyLogo: { template: '<img class="logotipo" />' },
        RouterLink: { template: '<a class="router-link"><slot /></a>' },
      },
    });
  });

  it("pode ter um link associado ao logotipo", async () => {
    await wrapper.setProps({ brandLink: "/forum" });
    expect(wrapper.find(".router-link").attributes("to")).toBe("/forum");
  });

  it("pode ter o conteúdo central centralizado", async () => {
    await wrapper.setProps({ centered: true });
    expect(wrapper.findAll(".is-centered").length).toBe(3);
  });

  it("pode se comportar de maneira responsiva", async () => {
    await wrapper.setProps({ full: true });
    expect(wrapper.find("header > .container").exists()).toBeFalsy();
  });

  it("pode ter a sombra desabilitada", async () => {
    await wrapper.setProps({ shadow: false });
    expect(wrapper.find("header.shadow-md").exists()).toBeFalsy();
  });

  it("pode ter o fundo transparente", async () => {
    await wrapper.setProps({ transparent: true });
    expect(wrapper.find("header.bg-white").exists()).toBeFalsy();
  });

  it("pode ter o logotipo substituído", () => {
    expect(wrapper.find("img.logotipo").exists()).toBeTruthy();
    const localWrapper = shallowMount(IfyAppBar, {
      slots: { brand: "Investfy" },
    });
    expect(localWrapper.find("img.logotipo").exists()).toBeFalsy();
    expect(localWrapper.find(".brand-slot").text()).toBe("Investfy");
  });

  it("deve exibir conteúdo ao lado do logotipo", () => {
    const localWrapper = shallowMount(IfyAppBar, {
      slots: { start: "Investfy" },
    });
    expect(localWrapper.find(".start-slot").text()).toBe("Investfy");
  });

  it("deve exibir conteúdo no lado direito", () => {
    const localWrapper = shallowMount(IfyAppBar, {
      slots: { end: "Investfy" },
    });
    expect(localWrapper.find(".end-slot").text()).toBe("Investfy");
  });
});
