import * as module from ".";

describe("index", () => {
  it("should verify the API shape", () => {
    expect(module).toMatchSnapshot();
  });
});
