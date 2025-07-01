import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Model";


describe("Modal", () => {
  test("renders children when open and calls setopen on close button click", async () => {
    const setopen = jest.fn();

    // Render modal with open=true
    render(
      <Modal open={true} setopen={setopen}>
        <div>Modal Content</div>
      </Modal>
    );

    // Modal content should be visible
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    // Close button should be visible
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();

    // Click close button triggers setopen(false)
    await userEvent.click(closeButton);
    expect(setopen).toHaveBeenCalledWith(false);
  });

  test("does not render when open is false", () => {
    render(
      <Modal open={false} setopen={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    // Modal content should NOT be in the document
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();

    // Close button should NOT be in the document
    expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument();
  });
});
