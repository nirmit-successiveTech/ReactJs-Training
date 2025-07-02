import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("inputs accept user typing and form submits correctly", async () => {
    const mockSubmit = jest.fn();           //renders a mock function
    render(<LoginForm onSubmit={mockSubmit} />);

    const usernameInput = screen.getByPlaceholderText(/username/i);       //accessing input username by placeholder
    const passwordInput = screen.getByPlaceholderText(/password/i);       //accessing input password by placeholder
    const submitButton = screen.getByRole("button", { name: /login/i });  //accessing input button by placeholder

    // simulate a typing action
    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "testpass");
    await userEvent.click(submitButton);

    // gives an expected value
    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpass");

    expect(mockSubmit).toHaveBeenCalledTimes(1);  // tell the time demo function is called
    expect(mockSubmit).toHaveBeenCalledWith({
      username: "testuser",                               // expected name to be seen in username
      password: "testpass",                                // expected name to be seen in testpass
    });
  });
});
