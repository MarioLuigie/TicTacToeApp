/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`
  box-shadow: #000000ea 0 0 22px;
  background: 
    linear-gradient(#111111, #111111) padding-box,
    linear-gradient(to right, #135197, #701e99) border-box
  ;
  border-radius: 8px;
  border: 1px solid transparent;
`

export default function Card({ children }) {

  return (
    <div css={styles}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}