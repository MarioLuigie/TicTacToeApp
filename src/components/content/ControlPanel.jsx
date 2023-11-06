/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faXmark } from '@fortawesome/free-solid-svg-icons';

import Player from "./Player.jsx";

const styles = css`
  width: 100%;
  min-height: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .label {
    padding-bottom: 20px;
    color: #474747;
  }

  .playerList {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media screen and (min-width: 1100px) {
      flex-direction: row;
    }
  }
`

export default function ControlPanel() {
  const playerX = <FontAwesomeIcon icon={faXmark} />
  const playerO = <FontAwesomeIcon icon={faCircleNotch} />

  return (
    <div css={styles}>
      <p className='label'>Settings Panel</p>
      <ol className='playerList'>
        <Player 
          id={"playerX"} 
          name={"Player"} 
          symbol={playerX} 
        />
        <Player 
          id={"playerO"} 
          name={"Player"} 
          symbol={playerO} 
        />
      </ol>
    </div>
  )
}