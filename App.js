import React from 'react';
import './App.css';
import Draggable from "react-draggable";
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      }
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  onStart() {
    this.setState({ activeDrags: ++this.state.activeDrags });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });
  }
  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  }
  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <div>
        
        <Draggable {...dragHandlers}>
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
        <Draggable axis="x" {...dragHandlers}>
          <div className="box cursor-x">
            I can only be dragged horizonally (x axis)
          </div>
        </Draggable>
         <Draggable bounds="parent" {...dragHandlers} >
         <div
          className="box"
          style={{
            // height: "500px",
            // width: "500px",
            position: "relative",
            overflow: "auto",
            padding: "0"
          }}
        >
          <div style={{ height: "100px", width: "185px", padding: "10px" }}>
           
            <div >
            <strong className="no-cursor">Drag here</strong>
            <div style={{background:"yellow"}}>I have a long scrollable content with a handle 
            <br/>
            x<br/>
            x<br/>
            x<br/>
            x<br/>
            x<br/>
            x<br/>
            </div>
          </div>
          </div>
        </div>
        </Draggable>
        
         <Draggable cancel="strong" {...dragHandlers}>
          <div className="box">
            <strong className="no-cursor">Can't drag here</strong>
            <div style={{marginTop:"10px"}}>Dragging here works</div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default App;
