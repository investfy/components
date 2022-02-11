import { shallowMount } from "@vue/test-utils";
import IfyNav from "./Nav.vue";
import IfyNavItem from "./NavItem.vue";

let wrapper;

describe("IfyNav", () => {
  beforeEach(() => {
    wrapper = shallowMount(IfyNav, {
      slots: {
        default: `<span>Default</span>`,
      },
    });
  });

  it("deve sempre renderizar um item de lista", () => {
    expect(wrapper.find("nav > ul > li").exists()).toBeTruthy();
  });

  it("pode renderizar os itens da lista a partir de um array", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    const wrapper = shallowMount(IfyNav, {
      propsData: {
        items,
      },
      stubs: {
        IfyNavItem,
      },
    });

    const listitems = wrapper.findAll("li");
    expect(listitems.length).toBe(3);
    for (const i of items) expect(listitems.at(i)).toBe(items[i]);
  });

  it("pode variar a cor do conteúdo", async () => {
    await wrapper.setProps({ light: true });
    expect(wrapper.find(".nav-light").exists()).toBeTruthy();
  });

  it("pode possuir um título", async () => {
    const title = "Título da navegação";
    await wrapper.setProps({ title });
    expect(wrapper.text()).toContain(title);
  });

  it("altera a tag do título para a tag especificada", async () => {
    const title = "Título da navegação";
    await wrapper.setProps({ title, titleTag: "h1" });
    expect(wrapper.find("h1").text()).toContain(title);
  });

  it("deve renderizar uma tag LI dentro da área do slot caso o conteúdo do slot não contenha", async () => {
    let li;

    // Sem tag LI
    const firstWrapper = shallowMount(IfyNav, {
      slots: { default: `<span>Default</span>` },
    });
    li = firstWrapper.find(".nav-list > li.nav-list-item");
    expect(li.exists()).toBeTruthy();

    // Com tag LI
    const secondWrapper = shallowMount(IfyNav, {
      slots: { default: `<li>Default</li>` },
    });
    li = secondWrapper.find(".nav-list > li.nav-list-item > li");
    expect(li.exists()).not.toBeTruthy();
  });
});
