import { PropertyValuesMap } from "./BreakpointValue";
import { Theme } from "./Theme";
import { _getGutterWidth, _map } from "./Utilities";

describe("Utilities", () => {
  describe("_getGutterWidth", () => {
    it("Should return 15 if the theme is specified but gutterWidth is undefined", () => {
      // arrange
      const theme: Theme = {};

      // act
      const output = _getGutterWidth(theme);

      // arrange
      expect(output).toEqual(15);
    });

    it("Should return 20 if the theme is specified and gutter width is set to 40", () => {
      // arrange
      const theme: Theme = { gutterWidth: 40 };

      // act
      const output = _getGutterWidth(theme);

      // arrange
      expect(output).toEqual(20);
    });
  });

  describe("_map", () => {
    it("Should map a PropertyValuesMap to BreakpointValuesMap", () => {
      // arrange
      const input: PropertyValuesMap = {
        number: {
          xs: 540,
          md: 670
        },
        string: {
          sm: "value 1",
          md: "value 2"
        }
      };

      // act
      const output = _map(input);

      // arrange
      expect(output).toEqual({
        xs: {
          number: 540
        },
        sm: {
          string: "value 1"
        },
        md: {
          number: 670,
          string: "value 2"
        }
      });
    });
  });
});
