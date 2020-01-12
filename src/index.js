import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// not using App.js for now, doing everything through index
//import App from './App';
import Webcam from 'react-webcam';
import * as serviceWorker from './serviceWorker';

/* 
* DISPLAYING VIDEO FROM THE WEBCAM
*/
class WebcamComponent extends React.Component {
    render() {
        // specify the constraints for the webcam video
        const videoConstraints = {
            width: window.innerWidth,
            height: window.innerHeight - 50,
            facingMode: "user"
            };

        // render the webcam video with specific parameters
        return <Webcam 
            audio={false}
            videoConstraints={videoConstraints}/>;
    }
  }

// actually display stuff in the browser
ReactDOM.render(<WebcamComponent />, document.getElementById('root'));

// smth random???? -->

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
