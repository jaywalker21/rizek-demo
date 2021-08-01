import "@testing-library/jest-dom";

import { getDefaultSelectedFromArray, formatCurrency, formatTime } from "./";

import {
  buttonGroupListWithDefault,
  buttonGroupListWithoutDefault
} from "../mocks/mock-data-for-utils";

describe("Test the util functions", () => {
  test("getDefaultSelectedFromArray function unit tests", () => {
    const defaultEntryWithDefault = buttonGroupListWithDefault.find(
      (entry) => entry.isDefault
    );
    const defaultEntryFromUtilWithDefault = getDefaultSelectedFromArray(
      buttonGroupListWithDefault
    );
    expect(defaultEntryFromUtilWithDefault).not.toBeNull();
    expect(defaultEntryWithDefault.id).toBe(defaultEntryFromUtilWithDefault.id);

    const resultFromUtilWithoutDefault = getDefaultSelectedFromArray(
      buttonGroupListWithoutDefault
    );
    expect(resultFromUtilWithoutDefault).not.toBeNull();
    expect(resultFromUtilWithoutDefault.id).toBe(
      buttonGroupListWithoutDefault[0].id
    );

    expect(getDefaultSelectedFromArray([])).toBe(null);
    expect(getDefaultSelectedFromArray()).toBe(null);
  });

  test("Format Currency unit tests", () => {
    expect(formatCurrency(1200, "USD")).toBe("$1,200.00");
    expect(formatCurrency(1200, "OMR")).toBe("OMR 1,200.000");
    expect(formatCurrency(1200000, "USD", "en-US")).toBe("$1,200,000.00");
  });

  test("Format Time unit tests", () => {
    expect(formatTime()).toBe(undefined);
    expect(
      formatTime({
        h: "01",
        m: "22"
      })
    ).toBe("01h22");
  });
});
