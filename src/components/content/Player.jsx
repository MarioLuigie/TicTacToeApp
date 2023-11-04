/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = (id) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  box-shadow: #000000cc 0 0 10px;
  border-radius: 8px;
  padding: 20px 10px;
  color: #bebebe;

  .playerName {
    width: 40%;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-end;
  }

  .playerSymbol {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 3.5rem;
    color: ${id === "playerO" ? "#d31eac" : "#185dad"};
  }

  .buttonWrapper {
    display: flex;
    justify-content: flex-start;
    width: 40%;
  }

  .button {
    padding: 5px 0;
    width: 70px;
    font-size: 1.1rem;
    border-radius: 3px;
    cursor: pointer;
    background-color: #242424;
    color: #7e7e7e;
    box-shadow: #000000ae 0 0 8px;
  }
`

export default function Player({ id, name, symbol, onHandle }) {

  return (
    <li css={styles(id)}>
      <p className='playerName'>{name}</p>
      <div className='playerSymbol'>{symbol}</div>
      <div className='buttonWrapper'>
        <button className='button' onClick={onHandle}>Edit</button>
      </div>
    </li>
  )
}

Player.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.object,
  onHandle: PropTypes.func
}