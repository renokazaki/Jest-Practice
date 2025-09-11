import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Form from "./Form";

// const user = userEvent.setup();

describe("Form Component", () => {
  it("初期状態ではテキストが空欄", () => {
    render(<Form />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveTextContent("");
  });
});
