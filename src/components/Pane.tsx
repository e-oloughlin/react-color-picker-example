/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

type Props = {
  children: React.ReactNode,
  color?: string,
};

const Pane = ({ children, color = '#FFFFFF' }: Props) => {
  const style = css`
    background-color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size: 80px;
  `;

  return (
    <section css={style}>
      {children}
    </section>
  );
};

export default Pane;
