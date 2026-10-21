import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import MemberProfile from "../pages/MemberProfile";

describe("top-level routing", () => {
  it("renders the site-wide 404 page for an unknown member slug", () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={["/missing-page"]}>
          <Routes>
            <Route path="/:memberSlug" element={<MemberProfile />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>,
    );

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText("This page moved, vanished, or was never here.")).toBeInTheDocument();
  });
});
