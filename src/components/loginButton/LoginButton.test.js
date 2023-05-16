import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";
import { LoggedInContext } from "@/pages/_app";

describe("LoginButton", () => {
  it("Renders the LoginButton on initial load", () => {
    render(<LoginButton isLoggedIn={false} />);
    expect(screen.getByTestId("logInButton")).toBeInTheDocument();
  });

  it("Renders the LoginButton when logged in", () => {
    const isLoggedIn = true;
    render(
      <LoggedInContext.Provider value={{ isLoggedIn }}>
        <LoginButton />
      </LoggedInContext.Provider>
    );
    expect(screen.getByTestId("loggedInButton")).toBeInTheDocument();
  });

  it("Renders the text 'Inloggad som:' and the username in the button, when successfully logged in", () => {
    const isLoggedIn = true;
    const username = "test-user";
    render(
      <LoggedInContext.Provider value={{ isLoggedIn, username }}>
        <LoginButton />
      </LoggedInContext.Provider>
    );
    expect(screen.getByText("Inloggad som:")).toBeInTheDocument();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByText("test-user")).toBeInTheDocument();
  });

  it("The menu (Profile & logout) is displayed when logged in", () => {
    const isLoggedIn = true;
    render(
      <LoggedInContext.Provider value={{ isLoggedIn }}>
        <LoginButton />
      </LoggedInContext.Provider>
    );
    expect(screen.getByTestId("menuItem")).toBeInTheDocument();
  });
});
