/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { header } from "../../constants/dimensions.js";
import colors from "../../constants/colors.js";

const styles = css`
  width: ${header.width}%;
  height: ${header.height}px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${colors.line} solid 1px;
  box-shadow: #0000003d 0 5px 18px;

  .title {
    font-size: 3.2rem;
    background: linear-gradient(
      to right, 
      #193181, 
      #d31eac, 
      orange
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (min-width: 540px) {
      font-size: 4.8rem;
    }
  }
`

export default function Header({ title }) {

  return (
    <header css={styles}>
      <h1 className='title'>{title} &reg;</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}