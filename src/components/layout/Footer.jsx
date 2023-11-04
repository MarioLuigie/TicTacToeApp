/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

import { footer } from "../../constants/dimensions.js";
import colors from "../../constants/colors.js";

const styles = css`
  width: ${footer.width}%;
  height: ${footer.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: ${colors.line} solid 1px;
  box-shadow: #0000003d 0 -5px 18px;

  .sign {
    font-size: 0.7rem;
    background: linear-gradient(to right, #8236e6, #ee25c2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }

`

export default function Footer({ sign }) {

  return (
    <footer css={styles}>
      <p className='sign'>{sign}</p>
    </footer>
  )
}

Footer.propTypes = {
  sign: PropTypes.string
}