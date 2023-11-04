/* eslint-disable react/no-unknown-property */
// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from "prop-types";

const styles = css`

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