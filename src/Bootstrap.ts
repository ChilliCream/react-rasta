import { injectGlobal } from "./StyledComponents";

let _initialized: boolean = false;

function _bootstrap() {
  if (!_initialized) {
    injectGlobal`
        @-ms-viewport {
          width: device-width;
        }
  
        html {
          box-sizing: border-box;
          -ms-overflow-style: scrollbar;
        }
  
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
      `;
    _initialized = true;
  }
}

_bootstrap();
