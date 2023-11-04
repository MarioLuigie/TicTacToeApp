/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  box-shadow: #000000cc 0 0 10px;
  border-radius: 8px;
  padding: 20px;
  color: #bebebe;

  .playerName {
    font-size: 1.3rem;
  }

  .playerSymbol {
    font-size: 2.6rem;
  }

  .button {
    padding: 5px 0;
    width: 70px;
    font-size: 1.1rem;
    border-radius: 3px;
    cursor: pointer;
    background-color: #2b2b2b;
    color: #8968a5;
    box-shadow: #000000ae 0 0 8px;
  }
`

export default function Player({ name, symbol, onHandle }) {

  return (
    <li css={styles}>
      <p className='playerName'>{name}</p>
      <div className='playerSymbol'>{symbol}</div>
      <button className='button' onClick={onHandle}>Edit</button>
    </li>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.object,
  onHandle: PropTypes.func
}