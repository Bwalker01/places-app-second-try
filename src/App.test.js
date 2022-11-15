import { render, screen } from "@testing-library/react";
import App from "./App";

test("Homepage appears", () => {
  render(<App />);
  const linkElement = screen.getByText(/Homepage/i);
  expect(linkElement).toBeInTheDocument();
});
