import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// not using App.js for now, doing everything through index
//import App from './App';
import Webcam from 'react-webcam';
import * as serviceWorker from './serviceWorker';

/* 
* Display video from the webcam
*/
class WebcamComponent extends React.Component {
    constructor(props) {
    super(props);
    this.place = 'place';    
  }


    testFunction() {
        console.log("wlakjsdlkfjdslkafj");
        fetch('localhost:5000/process_image?place=');
    }

    render() {
        // Specify the constraints for the webcam video
        const videoConstraints = {
            width: window.innerWidth,
            height: window.innerHeight - 50,
            facingMode: "user"
            };

        // Render the webcam video with specific parameters
        return [
            <Webcam
                audio={false}
                videoConstraints={videoConstraints} />,
            <button onClick={this.testFunction.bind(this)}>
                submit
            </button>   
        ];
    }
  }

// Display the webcam component in the browser
ReactDOM.render(<WebcamComponent />, document.getElementById('root'));

// serviceWorker stuff that came with the boilerplate, not sure if we need it (nO fUnNy CoMmEnTs) -->

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
