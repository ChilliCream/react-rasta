import { BreakpointValuesMap } from './BreakpointValue';
import { _map } from './Utilities';

describe('Utilities', () => {
  describe('_map', () => {
    it('Should return a valid map', () => {
      // arrange
      const input: BreakpointValuesMap = {
        'number': {
          'xs': 540,
          'md': 670
        },
        'string': {
          'sm': 'value 1',
          'md': 'value 2'
        }
      };

      // act
      const output = _map(input);

      // arrange
      expect(output).toEqual({
        'xs': {
          'number': 540
        },
        'sm': {
          'string': 'value 1'
        },
        'md': {
          'number': 670,
          'string': 'value 2'
        }
      });
    });
  });
});