import { shallowMount } from "@vue/test-utils";
import IfyIcon from "./Icon.vue";

describe("IfyIcon", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IfyIcon, {
      propsData: {
        icon: "camera",
      },
      stubs: {
        Fa: { template: "<i />" },
      },
    });
  });

  it("deve renderizar um ícone do FontAwesome", () => {
    expect(wrapper.find(".icon > i[icon]").exists()).toBeTruthy();
  });

  it("pode ter o tamanho do ícone alterado", async () => {
    await wrapper.setProps({ size: "xl" });
    expect(wrapper.find(".icon i[size='2x']").exists()).toBeTruthy();
  });

  it("pode passar classes customizadas diretamente para o ícone", async () => {
    await wrapper.setProps({ customClass: "custom-class" });
    expect(wrapper.find("i.custom-class").exists()).toBeTruthy();
  });
});
