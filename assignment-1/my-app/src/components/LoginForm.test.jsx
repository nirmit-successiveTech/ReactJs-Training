import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  test("inputs accept user typing and form submits correctly", async () => {
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(usernameInput, "testuser");
    await userEvent.type(passwordInput, "testpass");
    await userEvent.click(submitButton);

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("testpass");

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      username: "testuser",
      password: "testpass",
    });
  });
});
