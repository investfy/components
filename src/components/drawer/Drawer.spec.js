import { shallowMount } from "@vue/test-utils";
import IfyDrawer from "./Drawer.vue";

describe("IfyDrawer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IfyDrawer, {
      propsData: {
        active: true,
      },
    });
  });

  it("deve estar visível na tela quando ativado", () => {
    expect(wrapper.classes()).toContain("ifydrawer--active");
  });

  it("renderiza o conteúdo do slot padrão", () => {
    const html = `<div>Lorem ipsum</div>`;
    const wrapper = shallowMount(IfyDrawer, {
      propsData: {
        active: true,
      },
      slots: {
        default: `<div>Lorem ipsum</div>`,
      },
    });
    expect(wrapper.html()).toContain(html);
  });

  it("muda de posição na tela de acordo com a prop especificada", async () => {
    await wrapper.setProps({ position: "top" });
    expect(wrapper.classes()).toContain("ifydrawer--top");
  });

  it("deve ficar invisível quado o botão ESC for pressionado", async () => {
    const localWrapper = shallowMount(IfyDrawer, {
      attachTo: document.body,
      propsData: {
        active: true,
      },
    });
    await localWrapper.trigger("keyup.esc");
    expect(localWrapper.emitted()["update:active"]).toBeTruthy();
    expect(localWrapper.classes()).not.toContain("ifydrawer--active");
  });

  it("pode ter classes customizadas para o container", async () => {
    await wrapper.setProps({ customClass: "custom" });
    expect(wrapper.find(".ifydrawer__container.custom").exists()).toBeTruthy();
  });
});
