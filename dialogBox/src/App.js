import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';

class App extends Component {
  state={
    show: false
}

    openModal = ()=>{
        this.setState({
            show: true
        })
    }

    closeModal = ()=>{
      this.setState({
        show: false
      })
    }

  render() {
    return (
      <div aria-hidden = {this.state.show} className="App">
      <button onClick={this.openModal}>show Modal</button>
        <Modal 
        onClose={this.closeModal}
        show={this.state.show}
        >
         <h1>Title</h1>
         <p>dialog content..</p>
        </Modal>
      </div>
    );
  }
}

export default App;
