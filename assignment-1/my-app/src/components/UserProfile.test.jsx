import React from "react";
import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {               //groups all test related to login form.
  test("renders user data correctly", () => {         //a single test case to check data is displayed properly
    const userData = {                            // dummy data
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
    };

    render(
      <UserProfile                              //userprofile is rendered with props
        name={userData.name}
        email={userData.email}
        phone={userData.phone}
      />
    );

    // Assert that all user data is displayed
    expect(screen.getByText(/name:/i)).toBeInTheDocument();                 //checks the labels appear in dom
    expect(screen.getByText(userData.name)).toBeInTheDocument();            // checks the data appear in dom

    expect(screen.getByText(/email:/i)).toBeInTheDocument();
    expect(screen.getByText(userData.email)).toBeInTheDocument();

    expect(screen.getByText(/phone:/i)).toBeInTheDocument();
    expect(screen.getByText(userData.phone)).toBeInTheDocument();
  });
});
