import React, { Component } from 'react';
import List from './List';
import './App.css';
import STORE from './store';

class App extends Component {
  state = {
    store: STORE
  }

  handleDeleteCard() {
    console.log('handle delete card called');
  }

  handleAddRandomCard() {
    console.log('handle add random card called');
  }

  render() {
    const { store } = this.state;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteClick={this.handleDeleteCard}
              onAddClick={this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
