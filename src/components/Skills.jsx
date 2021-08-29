import React from "react";
import { Li, Ul } from "../style/Skills";
import { HtmlIcon } from "./svg/HtmlIcon";
import { CssIcon } from "./svg/CssIcon";
import { JavaScriptIcon } from "./svg/JavaScriptIcon";
import { GitIcon } from "./svg/GitIcon";
import { ReactIcon } from "./svg/ReactIcon";
const Skills = () => {
  return (
    <div>
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
      </Ul>
    </div>
  );
};

export { Skills };
