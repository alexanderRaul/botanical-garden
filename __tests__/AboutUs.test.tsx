import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUs from "@/app/ui/AboutUs";
import Wrapper from "@/app/ui/Wrapper";

describe("AboutUs component", () => {
  it("renders the component without errors", () => {
    render(<AboutUs />);
  });

  it("renders the tag 'Sobre nosotros'", () => {
    render(<AboutUs />);
    expect(screen.getByText("Sobre nosotros")).toBeInTheDocument();
  });

  it("renders the main text content", () => {
    render(<AboutUs />);
    expect(
      screen.getByText("61 años de exploración. Reunidos para abrir una nueva era de la botánica")
    ).toBeInTheDocument();
  });

  it("renders additional text content", () => {
    render(<AboutUs />);
    expect(
      screen.getByText("Explorando desde la vegetación hasta los rincones más remotos de nuestro jardín botánico Martin Cardenas, ha recorrido un amplio espectro de paisajes, conectando con visitantes de diversas áreas de interés.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Concentración en la contemplación de la naturaleza y distracción en la diversidad de nuestras especies.")
    ).toBeInTheDocument();
  });

  it("renders the Wrapper component", () => {
    render(<AboutUs />);
    expect(screen.getByTestId("wrapper")).toBeInTheDocument();
  });
});

describe("Wrapper component", () => {
  it("renders children components", () => {
    render(<Wrapper><div data-testid="child">Child Component</div></Wrapper>);
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
