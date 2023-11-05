/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { header, main, footer } from "../../constants/dimensions.js";
import GameContainer from "../content/GameContainer.jsx";

const styles = css`
  width: ${main.width}%;
  min-height: calc(100vh - ${header.height + footer.height}px);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(to top,#131313, rgb(12, 12, 12), #1b121d, #07080e, #110f13);
`

export default function Main() {

  return (
    <main css={styles}>
      <GameContainer />
    </main>
  )
}