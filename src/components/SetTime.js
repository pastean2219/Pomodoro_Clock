import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faMinusSquare, faPlusSquare} from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee, faMinusSquare, faPlusSquare)

const SetTime
 = (props) => {
     const id = props.title.toLowerCase();
    return ( 
        <div className="timer-container">
            <h2 id={`${id}-label`}>{props.title} Length</h2>
            <div className="flex buttonsSpan">
                <button id={`${id}-decrement`} onClick={ props.handleIncrease}><FontAwesomeIcon icon={faMinusSquare}/></button>
                <span id={`${id}-length`}> {props.count} </span>
                <button id={`${id}-increment`} onClick={ props.handleDecrease}><FontAwesomeIcon icon={faPlusSquare}/></button>
            </div>
        </div>
     );
}
 
export default SetTime;