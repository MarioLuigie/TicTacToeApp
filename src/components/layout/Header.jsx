/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { header } from "../../constants/dimensions.js";

const styles = css`
  width: ${header.width}%;
  height: ${header.height}px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #0000003d 0 5px 18px;
  background-color: #110f13;

  .title {
    font-size: 3.2rem;
    background: linear-gradient(
      to right, 
      #185dad, 
      #d31eac
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      font-weight: 100;
    }

    @media screen and (min-width: 540px) {
      font-size: 4.8rem;
    }
  }
`

export default function Header({ title }) {

  return (
    <header css={styles}>
      <h1 className='title'>{title} <span>&reg;</span></h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}