/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

import Container from "./layout/Container.jsx";

export default function App() {

  return (
    <div css={styles}>
      <Container />
    </div>
  )
}


