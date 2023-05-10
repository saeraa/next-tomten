import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";

describe("LoginButton", () => {
  it("Renders the LoginButton on initial load", () => {
    render(<LoginButton isLoggedIn={false} />);
    expect(screen.getByTestId("logInButton")).toBeInTheDocument();
  });

  it("Renders the LoginButton when logged in", () => {
    render(<LoginButton isLoggedIn={true} />);
    expect(screen.getByTestId("loggedInButton")).toBeInTheDocument();
  });

  it("Renders the text 'Inloggad som:' in the button when successfully logged in", () => {
    render(<LoginButton isLoggedIn={true} />);
    expect(screen.getByText("Inloggad som:")).toBeInTheDocument();
  });

  it("The menu (Profile & logout) is displayed when logged in", () => {
    render(<LoginButton isLoggedIn={true} />);
    expect(screen.getByTestId("menuItem")).toBeInTheDocument();
  });
});
