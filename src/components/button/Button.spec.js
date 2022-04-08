import { shallowMount } from "@vue/test-utils";
import IfyButton from "./Button.vue";

describe("IfyButton", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(IfyButton, {
      stubs: ["IfyIcon"],
      slots: { default: `<span>Default</span>` },
    });
  });

  it("Se nenhuma prop que condiciona classe tem valor atribuido deve ter apenas a classe ifybutton", () => {
    expect(wrapper.classes()).toContain("ifybutton");
    expect(wrapper.classes().length).toBe(1);
  });

  it("As props  type e size, se validadas, formam classes do elemento button", async () => {
    const props = { type: "primary", size: "xs" };
    await wrapper.setProps(props);
    Object.entries(props).forEach((i) =>
      expect(wrapper.classes().some((f) => f.endsWith(i[1]))).toBeTruthy()
    );

    await wrapper.setProps({ type: null, size: null });
    Object.entries(props).forEach((i) =>
      expect(wrapper.classes().some((f) => f.endsWith(i[1]))).toBeFalsy()
    );
  });

  it("As props  iconLeft e iconRight, renderizam um ícone cada", async () => {
    const props = { iconLeft: "bars", iconRight: "caret" };
    await wrapper.setProps(props);
    const icons = wrapper.findAll("[icon]");
    expect(icons.length).toBe(2);
  });

  it("A prop  iconSize, é atrtribuída ao valor size de um ícone", async () => {
    const props = { iconRight: "caret", iconSize: "12px" };
    await wrapper.setProps(props);
    const icon = wrapper.find("[size]");
    expect(icon.attributes("size")).toBe(props.iconSize);
  });

  it("A prop label renderiza um span com seu conteúdo", async () => {
    const props = { label: "labelProp" };
    await wrapper.setProps(props);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe(props.label);
  });
});
