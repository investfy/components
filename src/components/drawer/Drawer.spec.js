import { shallowMount } from "@vue/test-utils";
import IfyDrawer from "./Drawer.vue";

let wrapper;

describe("IfyDrawer", () => {
  beforeEach(() => {
    wrapper = shallowMount(IfyDrawer, {
      propsData: {
        active: true,
      },
    });
  });

  it("deve estar visível na tela quando ativado", () => {
    expect(wrapper.classes()).toContain("is-active");
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

  it("renderiza a cor correta quando a prop 'type' é informada", async () => {
    await wrapper.setProps({ type: "danger" });
    expect(wrapper.classes()).toContain("is-danger");
  });

  it("muda de posição na tela de acordo com a prop especificada", async () => {
    await wrapper.setProps({ position: "top" });
    expect(wrapper.classes()).toContain("is-top");
  });

  it("deve ficar invisível quado o botão de fechar for clicado", async () => {
    const btn = wrapper.find(".drawer-close button");
    expect(btn.exists()).toBeTruthy();
    await btn.trigger("click");
    expect(wrapper.emitted()["update:active"]).toBeTruthy();
    expect(wrapper.classes()).not.toContain("is-active");
  });
});
