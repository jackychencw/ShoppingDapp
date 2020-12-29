import React from "react";


const greetingStyle = {
    height: '20%',
    lineHeight: '560px',
    textAlign: 'center',
};

class LandingPage extends React.Component {
    state = {
        time: null
    }

    componentDidMount() {
        this.getHour()
    }

    getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        var time;
        if (hour < 12) {
            time = "Morning"
        } else if (hour < 17) {
            time = "Afternoon"
        } else {
            time = "Evening"
        }
        this.setState({
            time: time
        });
    }

    render() {
        return (
            <div className='App'>
                <h1 style={greetingStyle}>{ `Good  ${this.state.time}! Welcome to Ethershop!`}</h1>
            </div>

        )
    }

}

export default LandingPage;