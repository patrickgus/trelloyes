import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('List component', () => {
  it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(<List />, section);
    ReactDOM.unmountComponentAtNode(section);
  });
});
