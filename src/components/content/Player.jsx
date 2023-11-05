/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const styles = (id) => css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  box-shadow: #000000cc 0 0 10px;
  border-radius: 8px;
  padding: 20px 20px;
  color: #bebebe;

  .playerName {
    width: 40%;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-end;
    color: #585858;
  }

  .playerSymbol {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 3.5rem;
    color: ${id === "playerO" ? "#d31eac" : "#185dad"};
  }

  .buttons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 40%;
  }

  .button {
    padding: 5px 0;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    border-radius: 3px;
    cursor: pointer;
    background-color: #202020;
    color: #414141;
    box-shadow: #000000ae 0 0 8px;

    &:hover {
      color: #694eb3;
    }
  }

  .changeButtons {
    display: flex;
    gap: 18px;
  }

  .changeBtn {
    font-size: 2rem;
    cursor: pointer;
    color: #2eda7b;

    &--red {
      color: #df4c59;
    }
  }

  input {
    width: 40%;
    font-size: 1.5rem;
    padding: 7px 12px;
    color: #757575;
    background-color: #111111;
    border: #252525 solid 1px;
    border-radius: 6px;
  }
`

export default function Player({ id, name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(true);
  }

  const handleApply = () => {
    setIsEdit(false);
  }

  const handleCancel = () => {
    setIsEdit(false);
  }

  return (
    <li css={styles(id)}>
      {isEdit
        ? <input/>
        : <p className='playerName'>{name}</p>
      }
      <div className='playerSymbol'>{symbol}</div>
      <div className='buttons'>
        <button className='button' onClick={handleEdit}>Edit</button>
        {isEdit && 
          <div className='changeButtons'>
            <div className='changeBtn changeBtn--green' onClick={handleApply}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className='changeBtn changeBtn--red' onClick={handleCancel}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        }
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