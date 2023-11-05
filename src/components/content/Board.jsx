/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = css`
  width: 100%;
  height: 450px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    padding-bottom: 20px;
    color: #474747;
  }

`

export default function Board() {

  return (
    <div css={styles}>
      <p className='label'>Game Board</p>
    </div>
  )
}