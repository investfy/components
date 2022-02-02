import { shallowMount } from "@vue/test-utils";
import IfyNavItem from "./NavItem.vue";
import IfyLink from "../link/Link.vue";

let wrapper;

describe("IfyNavItem", () => {
  beforeEach(() => {
    wrapper = shallowMount(IfyNavItem, {
      slots: {
        start: "Start",
        default: `<span>Default</span>`,
        end: `<i class="icon" />`,
      },
      stubs: {
        IfyLink,
      },
    });
  });

  it("deve renderizar um item de lista", () => {
    expect(wrapper.find("li").exists()).toBeTruthy();
  });

  it("deve possuir 3 slots", () => {
    expect(wrapper.text()).toBe("Start Default");
    expect(wrapper.find(".icon").exists()).toBeTruthy();
  });

  it("pode ser um separador", async () => {
    await wrapper.setProps({ separator: true });
    expect(wrapper.find("hr").exists()).toBeTruthy();
  });

  it("pode possuir um link", async () => {
    await wrapper.setProps({ link: "https://google.com" });
    expect(wrapper.findComponent(IfyLink).exists()).toBeTruthy();
  });

  it("pode ser clicável", async () => {
    await wrapper.setProps({ clickable: true });
    expect(wrapper.find(".nav-clickable").exists()).toBeTruthy();
  });
});
