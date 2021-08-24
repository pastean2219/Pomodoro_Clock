import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faSyncAlt} from '@fortawesome/free-solid-svg-icons'


const ClockContainer = (props) => { 
       
    return ( 
        <div className="clock-container">
            <h1 id="timer-label">{props.currentTimer}</h1>
            <span id="time-left">{props.changeToTime(props.clockCount)}</span>
            <div className="flex">
                <button id="start_stop" onClick={props.controlPlayPause}>
                    <FontAwesomeIcon icon={faPlay}/> 
                    <FontAwesomeIcon icon={faPause}/> 
                    </button>
                <button id="reset" onClick={props.controlReset}><FontAwesomeIcon icon={faSyncAlt}/></button>
                
            </div>
        </div> 
     );
}
 
export default ClockContainer;
