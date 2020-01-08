import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('renders without crashing', () => {
    const section = document.createElement('section');
    ReactDOM.render(<List header="" cards={[]} />, section);
    ReactDOM.unmountComponentAtNode(section);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="First list"  cards={[
        { id: 'a', title: 'First card', content: 'lorem ipsum' },
        { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
      ]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});
