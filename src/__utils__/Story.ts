// These imports are needed for declaration files
import * as _React from "react";
import * as _StyledComponents from "styled-components";
// -------------------------------------------------------------------
import styled from "styled-components";
import Column from "../column";
import Container from "../container";
import Row from "../row";

const Story = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";

  ${Container},
  ${Row} {
    background: #ccc;
    height: 300px;
  }

  ${Row} > ${Column} {
    background: #0a5991;
    border: 5px solid #ccc;
    color #fff;
    font-size: 2em;
    line-height: 65px;
    text-align: center;
  }
`;

export default Story;
