import React from "react";
import { render, screen } from "@testing-library/react";
import Appointments from "@/app/ui/Appointments";

describe("Appointments component", () => {
  it("renders the component without errors", () => {
    render(<Appointments />);
  });

  it("renders the title 'REUNIONES'", () => {
    render(<Appointments />);
    const titleElement = screen.getByTestId("appointments-title");
    expect(titleElement).toHaveTextContent("REUNIONES");
  });


  it("renders the description text", () => {
    render(<Appointments />);
    expect(
      screen.getByText("EXPLORA NUESTRO JARDÍN, DONDE LA FRESCURA SE MEZCLA CON LA CREATIVIDAD. iDEAL PARA ENCUENTROS RELAJADOS Y PRODUCTIVOS.")
    ).toBeInTheDocument();
  });

  it("renders the images", () => {
    render(<Appointments />);
    const images = screen.getAllByAltText("a picture of botanic garden");
    expect(images.length).toBeGreaterThan(0);
  });
});
