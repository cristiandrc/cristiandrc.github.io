import React from "react";
import { Div, Li, Ul } from "../style/Skills";
import { HtmlIcon } from "./svg/HtmlIcon";
import { CssIcon } from "./svg/CssIcon";
import { JavaScriptIcon } from "./svg/JavaScriptIcon";
import { GitIcon } from "./svg/GitIcon";
import { ReactIcon } from "./svg/ReactIcon";
import { NodeIcon } from "./svg/NodeIcon";
const Skills = () => {
  return (
    <Div>
      <h3>SKILL</h3>
      <Ul>
        <Li>
          <HtmlIcon />
        </Li>
        <Li>
          <CssIcon />
        </Li>
        <Li>
          <JavaScriptIcon />
        </Li>
        <Li>
          <GitIcon />
        </Li>
        <Li>
          <ReactIcon />
        </Li>
        <Li>
          <NodeIcon />
        </Li>
      </Ul>
    </Div>
  );
};

export { Skills };
