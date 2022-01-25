import { mount } from "@vue/test-utils";
import Drawer from "./Drawer.vue";

describe("Drawer.vue", () => {
  it("drawer deve estar oculto à direita", () => {
    const active = false;
    const side = "right";

    const wrapper = mount(Drawer, {
      stubs: {
        IfyIcon: { template: "<div> STUB ICON DIV </div>" },
      },
      propsData: {
        active,
        side,
      },
    });

    expect(wrapper.find(".shadowarea").exists()).toBe(false);
  });

  it("drawer deve estar oculto à esquerda", () => {
    const active = false;
    const side = "left";

    const wrapper = mount(Drawer, {
      stubs: {
        IfyIcon: { template: "<div> STUB ICON DIV </div>" },
      },
      propsData: {
        active,
        side,
      },
    });
    expect(wrapper.find(".shadowarea").exists()).toBe(false);
  });

  it("drawer da direita deve estar visível", async () => {
    const active = true;
    const side = "right";

    const wrapper = mount(Drawer, {
      stubs: {
        IfyIcon: { template: "<div> STUB ICON DIV </div>" },
      },
      propsData: {
        active,
        side,
      },
    });

    expect(wrapper.find(".shadowarea").exists()).toBe(true);
    expect(wrapper.find(`.${side}-0`).exists()).toBe(true);
  });

  it("drawer da esquerda deve estar visível", async () => {
    const active = true;
    const side = "left";

    const wrapper = mount(Drawer, {
      stubs: {
        IfyIcon: { template: "<div> STUB ICON DIV </div>" },
      },
      propsData: {
        active,
        side,
      },
    });

    expect(wrapper.find(".shadowarea").exists()).toBe(true);
    expect(wrapper.find(`.${side}-0`).exists()).toBe(true);
  });

  it("a cor de fundo deve ser classe danger", async () => {
    const active = true;
    const side = "left";
    const bgcolor = "danger";

    const wrapper = mount(Drawer, {
      stubs: {
        IfyIcon: { template: "<div> STUB ICON DIV </div>" },
      },
      propsData: {
        active,
        side,
        bgcolor,
      },
    });

    expect(wrapper.find(`.is-${bgcolor}`).exists()).toBe(true);
  });
});
