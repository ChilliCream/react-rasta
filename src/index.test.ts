// Module mocks must mocked before importing modules
jest.mock("./utils/bootstrap", () => jest.fn());

import { Column, Container, Row } from ".";

describe("index", () => {
  it("should verify Column not null", () => {
    expect(Column).not.toBeNull();
  });

  it("should verify Container not null", () => {
    expect(Container).not.toBeNull();
  });

  it("should verify Row not null", () => {
    expect(Row).not.toBeNull();
  });
});
