class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            timer : null
        }
    }

    componentDidMount() {
        this.resumeCount();
    }

    componentWillUnmount() {
        //do not call the set state in this method
        // this.pauseCount();
        window.clearInterval(this.state.timer);
    }

    handleAddOne = () => {
        this.setState(state => {
            return {count : state.count + 1}
        })
    }

    pauseCount = () => {
        //to pause this we can just call the clearInterval() to cancel the timer value set by the setInterval()
        window.clearInterval(this.state.timer);
        this.setState({
            timer : null
        })
    }

    resumeCount = () => {
        //reseting the previous timer so that we may not launch the resumeCount each time we click the butto
        window.clearInterval(this.state.timer);
        this.setState({
            timer : window.setInterval(this.handleAddOne, 1000)
        })
    }

    action = () => {
        return this.state.timer ? this.pauseCount() : this.resumeCount()
    }

    label() {
        return this.state.timer ? 'Pause' : 'Play'
    }

    render() {
        return(
            <div>
                <h1>Count : {this.state.count}</h1>
                {/* let's have one button that will be acting dynamically */}
                <button onClick={this.action}>{this.label()}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Event />,
    document.getElementById('App')
);