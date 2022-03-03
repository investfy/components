import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import IfyLink from "./Link.vue";

describe("IfyLink", () => {
  let wrapper;

  describe("Links internos", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    const router = new VueRouter();
    const params = { path: "/feed" };

    beforeEach(() => {
      wrapper = mount(IfyLink, {
        localVue,
        router,
        propsData: { to: params },
        slots: { default: "Página" },
      });
    });

    it("deve ser um link válido", () => {
      const link = wrapper.find("a");
      expect(link.exists()).toBeTruthy();
      expect(link.attributes("href")).toContain(params.path);
    });

    it("deve abrir na mesma janela/aba", () => {
      const link = wrapper.find("a");
      expect(link.attributes("target")).not.toBe("_blank");
      expect(link.attributes("rel")).not.toBe("nofollow");
    });
  });

  describe("Links externos", () => {
    const href = "https://investfy.com";

    beforeEach(() => {
      wrapper = shallowMount(IfyLink, {
        propsData: { to: href },
        slots: { default: "Investfy" },
        stubs: ["RouterLink"],
      });
    });

    it("deve ser um link válido", () => {
      const link = wrapper.find("a");
      expect(link.exists()).toBeTruthy();
      expect(link.attributes("href")).toBe(href);
    });

    it("deve abrir numa nova janela/aba", () => {
      const link = wrapper.find("a");
      expect(link.attributes("target")).toBe("_blank");
      expect(link.attributes("rel")).toBe("nofollow");
    });
  });
});
