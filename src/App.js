
import React from 'react';
import './App.css';
import ClockContainer from './components/ClockContainer';
import SetTime from './components/SetTime';


const audio = document.getElementById('beep');
class App extends React.Component {
  
  state = {
    breakCount: 5,
    sessionCount: 25,
    clockCount: 25*60,
    currentTimer: "Session",
    isPlaying: false,
  }
  
  constructor(props) {
    super(props);
    this.loop = undefined;
    
  }
  componentWillUnmount() {
    clearInterval(this.loop);
  }

  controlPlayPause = () => {
    const {isPlaying} = this.state;
    if(isPlaying) {
      clearInterval(this.loop);
      this.setState({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });
      this.loop = setInterval(() => {
        const {clockCount, currentTimer, breakCount, sessionCount} = this.state;

        if(clockCount === 0) {
          this.setState({
            currentTimer: (currentTimer === "Session") ? "Break" : "Session",
            clockCount: (currentTimer === "Session") ? (breakCount * 60) : (sessionCount * 60)
          });
          
          audio.play()
          
        } else {
          this.setState({
            clockCount:clockCount - 1
          });
        }

        
      }, 1000);
    }
  }

  controlReset = () => {
    this.setState({
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25*60,
      currentTimer: "Session",
      isPlaying: false,
    });
    clearInterval(this.loop);

    
    
  }

  changeToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    minutes = minutes < 10 ? ("0" + minutes) : minutes;
    
    seconds = seconds < 10 ? ("0" + seconds) : seconds;
    return `${minutes} : ${seconds}`;
}

handleLengthChange = (count, timerType) => {
    const { 
      sessionCount, 
      breakCount, 
      isPlaying, 
      currentTimer
    } = this.state;
    
    let newCount;
    
    if(timerType === 'session') {
      newCount = sessionCount + count;
    } else {
      newCount = breakCount + count;
    }
    
    if(newCount > 0 && newCount < 61 && !isPlaying) {
      this.setState({
        [`${timerType}Count`]: newCount
      });
      
      if(currentTimer.toLowerCase() === timerType) {
        this.setState({
          clockCount: newCount * 60
        })
      }
    }
  }


handleBreakDecrease = () => {
  const {breakCount, isPlaying, currentTimer} = this.state;
  if(breakCount >1) {
    if(!isPlaying && currentTimer === "Break") {
      this.setState({
        breakCount: breakCount - 1,
        clockCount: (breakCount - 1) * 60
      });
    } else {
      this.setState({
        breakCount: breakCount -1
      });
    }
  }
}

handleBreakIncrease = () => {
  const {breakCount, isPlaying, currentTimer} = this.state;
  if(breakCount <60) {
    if(!isPlaying && currentTimer === "Break") {
      this.setState({
        breakCount: breakCount + 1,
        clockCount: (breakCount + 1) * 60
      });
    } else {
      this.setState({
        breakCount: breakCount +1
      });
    }
  }
}
handleSessionIncrease = () => {
  const {sessionCount, isPlaying, currentTimer} = this.state;
  if(sessionCount >1) {
    if(!isPlaying && currentTimer === "Session") {
      this.setState({
        sessionCount: sessionCount - 1,
        clockCount: (sessionCount - 1) * 60
      });
    } else {
      this.setState({
        sessionCount: sessionCount -1
      });
    }
  }
}
handleSessionDecrease = () => {
  const {sessionCount, isPlaying, currentTimer} = this.state;
  if(sessionCount < 60) {
    if(!isPlaying && currentTimer === "Session") {
      this.setState({
        sessionCount: sessionCount + 1,
        clockCount: (sessionCount + 1) * 60
      });
    } else {
      this.setState({
        sessionCount: sessionCount +1
      });
    }
  }
}


  render() { 
    const {breakCount, sessionCount, clockCount,currentTimer} = this.state;
    const breakProps = {
      title: "Break",
      count: breakCount,
      handleDecrease: this.handleBreakIncrease,
      handleIncrease: this.handleBreakDecrease
    }

    const sessionProps = {
      title: "Session",
      count: sessionCount,
      handleDecrease: this.handleSessionDecrease,
      handleIncrease: this.handleSessionIncrease
    }

    
  

    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="flex">
          <SetTime {...breakProps} />
          <SetTime {...sessionProps} />
        </div>
        <div>
          <ClockContainer 
            controlPlayPause={this.controlPlayPause.bind(this)} 
            clockCount={clockCount} currentTimer={currentTimer} 
            changeToTime = {this.changeToTime}
            controlReset={this.controlReset.bind(this)}
          />
        </div>  
      </div>
    );
  }
}

export default App;
