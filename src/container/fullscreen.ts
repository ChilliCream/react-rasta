import { injectGlobal } from "../theme/StyledComponents";

let _applied: boolean = false;

export default () => {
  if (!_applied) {
    injectGlobal`
      html,
      body,
      body > div {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    _applied = true;
  }
};
