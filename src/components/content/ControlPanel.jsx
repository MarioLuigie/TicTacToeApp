/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faXmark } from '@fortawesome/free-solid-svg-icons';

import Player from "./Player.jsx";

const styles = css`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  .playerList {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media screen and (min-width: 540px) {
      flex-direction: row;
    }
  }
`

export default function ControlPanel() {
  const xPlayer = <FontAwesomeIcon icon={faXmark} />
  const oPlayer = <FontAwesomeIcon icon={faCircleNotch} />

  return (
    <div css={styles}>
      <ol className='playerList'>
        <Player name={"Peter"} symbol={xPlayer} onHandle={() => {}}/>
        <Player name={"Bruce"} symbol={oPlayer} onHandle={() => {}}/>
      </ol>
    </div>
  )
}