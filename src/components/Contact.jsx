import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";
import { Div, DivA, A, Cv } from "../style/Contact";
const Contact = () => {
  return (
    <Div>
      <h3>CONTACTO</h3>
      <DivA>
        <A href="#">
          <AiFillLinkedin size="42px" />
        </A>
        <A href="#">
          <DiGithubBadge size="45" />
        </A>
      </DivA>
      <Cv
        target="_blank"
        href="https://by3301files.storage.live.com/y4p13hoyQouOgUk98juHQIjRu3osEEEetb0jdb-kcshEph8tqGWjQb9sKtUhhoWpCCWR7XiCyG4SFYzETUSBz41DbHCtVRkzCAekt3gttu8WaieKxsBNncSfoDhBsNEUKyPAvvxvNZmVN7uaDhslhzHLiJIyPZVgGIQrahPjkGhN4RbQtoto-9Ci-6QuYr2cdbRoZVGurVNxMrRT_HgoT_fRTMfEAWaqnYRCXnkc9j4Cuk/DSC_7001%5B1%5D.JPG?psid=1&width=670&height=893"
      >
        Descargar CV
      </Cv>
    </Div>
  );
};

export { Contact };
