/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Card from "../ui/Card.jsx";
import ControlPanel from "../content/ControlPanel.jsx";
import Board from "../content/Board.jsx";
import History from "../content/History.jsx";

const styles = css`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default function GameContainer() {

  return (
    <div css={styles}>
      <Card>
        <ControlPanel />
      </Card>
      <Card>
        <Board />
      </Card>
      <Card>
        <History />
      </Card>
    </div>
  )
}