import styled from "styled-components";
import Column from "../column";
import Container from "../container";
import Row from "../row";
import StoryProperties from "./StoryProperties";

const Story = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  ${(props: StoryProperties) => (props.fullscreen ? "height: 100%;" : "")}

  ${Container},
  ${Row} {
    background: #ccc;
    ${(props: StoryProperties) => (props.fullscreen ? "" : "height: 300px;")}
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
