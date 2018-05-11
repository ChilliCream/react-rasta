import {injectGlobal} from "../theme/StyledComponents";

let initialized: boolean = false;

function bootstrap() {
  if (!initialized) {
    // tslint:disable-next-line:no-unused-expression
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
    initialized = true;
  }
}

bootstrap();
