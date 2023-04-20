import Footer from "./footer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("has a title", () => {
    render(<Footer />);
    expect(screen.getByText("Tomtens Biograf")).toBeInTheDocument();
  });
});
