import {injectGlobal} from "../theme/StyledComponents";

let applied: boolean = false;

export default () => {
  if (!applied) {
    // tslint:disable-next-line:no-unused-expression
    injectGlobal`
      html,
      body,
      body > div {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    applied = true;
  }
};
