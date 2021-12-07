import { render } from "@testing-library/vue";
import IfyLogo from "./Logo.vue";

describe("Logo.vue", () => {
  it("deve renderizar uma imagem", () => {
    const { container } = render(IfyLogo);
    expect(container.getElementsByTagName("img").length).toBe(1);
  });

  it("o texto alternativo da imagem deve renderizar corretamente", () => {
    const description = "Descrição do logotipo";
    const { getByAltText } = render(IfyLogo, {
      props: { description },
    });

    const image = getByAltText(description);
    expect(image.getAttribute("alt")).toBe(description);
  });
});
