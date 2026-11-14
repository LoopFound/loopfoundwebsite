import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import NotFound from "../pages/NotFound";

describe("top-level routing", () => {
  it("renders the site-wide 404 page for an unknown path", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/missing-page"]}>
          <Routes>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText("This page moved, vanished, or was never here.")).toBeInTheDocument();
  });
});
