/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css } from '@emotion/react'
import { ChromePicker } from 'react-color';
import Pane from './components/Pane';

const bodyStyling = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const headingStyle = css`
  color: #FFFFFF;
  text-transform: uppercase;
  font-weight: 300;
`;

type State = {
  color: string,
};

class App extends React.Component {
  state: State = {
    color: '#FFFFFF',
  };

  render() {
    const { color } = this.state;

    return (
      <div css={bodyStyling}>
        <Pane color={color}>
          <h1 css={headingStyle}>{color}</h1>
        </Pane>

        <Pane>
          <ChromePicker
            color={color}
            onChange={({ hex }) => this.setState({ color: hex })}
          />
        </Pane>
      </div>
    );
  }
}

export default App;
