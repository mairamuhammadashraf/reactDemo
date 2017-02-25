import React, { Component } from 'react';
import Timer from './timer';
import Button from './button';

class TimerWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { timeLeft: null, timer: null }
        this.startTimer = this.startTimer.bind(this);
    }
    startTimer(timeLeft) {
        clearInterval(this.state.timer);
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) clearInterval(timer);
            this.setState({ timeLeft: timeLeft })
        }, 1000)
        return this.setState({ timeLeft: timeLeft, timer: timer })
    }
    render() {
        const element = (
            <div>
                <h2>Timer</h2>
                <div >
                    <Button time="5" startTimer={this.startTimer} />
                    <Button time="10" startTimer={this.startTimer} />
                    <Button time="15" startTimer={this.startTimer} />
                </div>
                <Timer timeLeft={this.state.timeLeft} />
            </div>
        );

        return element;
    }
}

export default TimerWrapper;