import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LogInModal from "./logInModal";
import LogInForm from "../logInForm/LogInForm";

describe("LogInModal", ()=> {
    it("Renders the LogInForm on initial load", ()=> {
        render(<LogInModal showLogInModal={true} formToShow={"login"}/>)
        expect(screen.getByTestId("logInForm")).toBeInTheDocument();
    });
    it("Renders the RegisterForm form with formToShow prop set to'register'", ()=> {
        render(<LogInModal showLogInModal={true} formToShow={"register"}/>)
        expect(screen.getByTestId("registerForm")).toBeInTheDocument();
    });
    it("Renders the ForgotPasswordForm with formToShow prop set to'password'", ()=> {
        render(<LogInModal showLogInModal={true} formToShow={"password"}/>)
        expect(screen.getByTestId("passwordForm")).toBeInTheDocument();
    });
    it("Renders the AnonymousUserForm with formToShow prop set to 'anonymous'", ()=> {
        render(<LogInModal showLogInModal={true} formToShow={"anonymous"}/>)
        expect(screen.getByTestId("anonymousForm")).toBeInTheDocument();
    });
});