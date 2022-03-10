import { shallowMount } from "@vue/test-utils";
import IfyAppBar from "./AppBar.vue";

describe("IfyAppBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IfyAppBar, {
      stubs: {
        IfyLogo: { template: '<img class="logo" />' },
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
    expect(
      wrapper.findAll(
        `.ifyappbar__brand-slot--centered,
        .ifyappbar__start-slot--centered,
        .ifyappbar__end-slot--centered`
      ).length
    ).toBe(3);
  });

  it("pode se comportar de maneira responsiva", async () => {
    await wrapper.setProps({ full: true });
    expect(wrapper.find(".ifyappbar__wrapper--container").exists()).toBeFalsy();
    await wrapper.setProps({ full: false });
    expect(
      wrapper.find(".ifyappbar__wrapper--container").exists()
    ).toBeTruthy();
  });

  it("pode ter a sombra desabilitada", async () => {
    await wrapper.setProps({ shadow: false });
    expect(wrapper.find(".ifyappbar--shadow").exists()).toBeFalsy();
    await wrapper.setProps({ shadow: true });
    expect(wrapper.find(".ifyappbar--shadow").exists()).toBeTruthy();
  });

  it("pode ter o fundo transparente", async () => {
    await wrapper.setProps({ transparent: true });
    expect(wrapper.find(".ifyappbar--transparent").exists()).toBeTruthy();
    await wrapper.setProps({ transparent: false });
    expect(wrapper.find(".ifyappbar--transparent").exists()).toBeFalsy();
  });

  it("pode ter o logotipo substituído", () => {
    expect(wrapper.find(".logo").exists()).toBeTruthy();
    const localWrapper = shallowMount(IfyAppBar, {
      slots: { brand: "Investfy" },
    });
    expect(localWrapper.find(".logo").exists()).toBeFalsy();
    expect(localWrapper.find(".ifyappbar__brand-slot").text()).toBe("Investfy");
  });

  it("deve exibir conteúdo ao lado do logotipo", () => {
    const localWrapper = shallowMount(IfyAppBar, {
      slots: { start: "Investfy" },
    });
    expect(localWrapper.find(".ifyappbar__start-slot").text()).toBe("Investfy");
  });

  it("deve exibir conteúdo no lado direito", () => {
    const localWrapper = shallowMount(IfyAppBar, {
      slots: { end: "Investfy" },
    });
    expect(localWrapper.find(".ifyappbar__end-slot").text()).toBe("Investfy");
  });
});
