/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { container } from "../../constants/dimensions.js";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

const styles = css`
  width: ${container.width}%;
  min-width: ${container.minWidth}px;
  max-width: ${container.maxWidth}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9e9e9;
  box-shadow: #00000052 0 0 30px;

  @media screen and (min-width: 780px) {
    width: 75%;
  }
`

export default function Container() {

  return (
    <div css={styles}>
      <Header title={"Tic Tac Toe"}/>
      <Main />
      <Footer sign={"Powered by ARWcode 2023"}/>
    </div>
  )
}