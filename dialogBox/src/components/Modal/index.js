import React, { Component } from 'react';
import ReactDom from 'react-dom';
import propTypes from 'prop-types';
import FocusLock from 'react-focus-lock';


const backDropeStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor:'rgba(0,0,0,0.5)',
    padding: 50
}

const modalStyle = {
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 8,
    maxWidth: 500,
    minHeight: 300,
    margin: 'auto',
    padding: 30
}

const footerStyle = {
    position: 'absolute',
    bottom: 20,
    borderTop: '1px solid',
    width: 490,
    padding: 5
}

const dialogRoot = document.getElementById('dialogPlaceHolder');

class Modal extends Component {
  
onClose = ()=>{
    this.props.onClose();
}

onKeyUp = (e)=>{
    if(e.which === 27){
        this.onClose();
    }
}

componentDidMount(){
    document.addEventListener('keyup', this.onKeyUp);
}

componentWillUnmount(){
    document.removeEventListener('keyup', this.onKeyUp);
}

  render() {
      if(!this.props.show){
          return null;
      }
    return ReactDom.createPortal( (
    <div>
      <div onClick={()=>this.onClose()} style={backDropeStyle}></div>
      <FocusLock>
      <div style={modalStyle} role="dialog">
        <div  role="document">
            {this.props.children} 
            <div style={footerStyle}>
                <button onClick={()=>this.onClose()}>Close</button>
            </div>
        </div>  
       </div> 
       </FocusLock> 
    </div>
    ) ,dialogRoot);
  }
}

Modal.propTypes ={
    onClose: propTypes.func.isRequired,
    show: propTypes.bool.isRequired
}

export default Modal;

