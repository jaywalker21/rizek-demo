import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import CommuteSearchResultCard from "./commute-search-result-card";

import { formatCurrency, formatTime } from "../../../../utils";
import renderWithTheme from "../../../../../test-helpers/render-with-theme";

describe("Commute Search Result Card Unit Tests", () => {
  const props = {
    from: "Start",
    to: "Stop",
    transport: "Transport",
    duration: {
      h: "02",
      m: "55"
    },
    cost: 100,
    currency: "USD",
    reference: "reference"
  };
  test("Shows data correctly when respective props are passed", () => {
    renderWithTheme(<CommuteSearchResultCard {...props} />);
    expect(screen.getByText(props.from)).toBeInTheDocument();
    expect(screen.getByText(props.to)).toBeInTheDocument();
    expect(screen.getByText(`${props.reference} for`)).toBeInTheDocument();
    expect(
      screen.getByText(formatCurrency(props.cost, props.currency))
    ).toBeInTheDocument();
    expect(screen.getByText(formatTime(props.duration))).toBeInTheDocument();
  });
});
