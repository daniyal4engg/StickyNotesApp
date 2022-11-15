import { fireEvent, render, screen } from "@testing-library/react";
import NoteHome from "../components/NoteHome";

describe("NoteHome", () => {
  render(<NoteHome />);
  describe("form", () => {
    it("should render", () => {
      const form = screen.getByTestId("formContainer");
      expect(form).toBeInTheDocument();
    });
  });

  it("should give value", () => {
    render(<NoteHome />);
    const inp = screen.getByTestId("title");
    fireEvent.change(inp, { target: { value: "react" } });
    expect(inp).toHaveValue("react");
  });
});
// button to be in document
it("should have Button ", async () => {
  render(<NoteHome />);
  const headingElement = screen.getByRole("tab", { selected: true });
  expect(headingElement).toBeInTheDocument();
});
// role noteInput should have specific length
it("should check all input feild", async () => {
  render(<NoteHome />);
  const headingElements = screen.getAllByRole("noteInput");
  expect(headingElements.length).toBe(2);
});

// button should be truuthy
it("should have button element to be true", async () => {
  render(<NoteHome />);
  const buttonElement = screen.getByRole("tab");
  expect(buttonElement).not.toBeFalsy();
});

// Section
describe("NoteHome", () => {
  it("should render input element", () => {
    render(<NoteHome />);
    const inputElement = screen.getByTestId("title");
    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type in input", () => {
    render(<NoteHome />);
    const inputElement = screen.getByTestId("title");
    fireEvent.change(inputElement, { target: { value: "task1" } });
    expect((inputElement as HTMLInputElement).value).toBe("task1");
  });
  it("should be empty when add button is clicked", () => {
    render(<NoteHome />);
    const inputElement = screen.getByTestId("title");
    const buttonElement = screen.getByRole("tab");
    fireEvent.change(inputElement, { target: { value: "task1" } });
    fireEvent.click(buttonElement);
    expect((inputElement as HTMLInputElement).value).toBe("task1");
  });
});
