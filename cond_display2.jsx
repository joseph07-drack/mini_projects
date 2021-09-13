class LogIn extends React.Component {
    render() {
        return(
            <button onClick={this.props.method}>LOG OUT</button>
        )
    }
}

class LogOut extends React.Component {
    render() {
        return (
            <button onClick={this.props.method}>LOG IN</button>
        )
    }
}


class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn : this.props.loginStatus,
        }
        this.handleLoginBtnClick = this.handleLoginBtnClick.bind(this)
        this.handleLogoutBtnClick = this.handleLogoutBtnClick.bind(this)
    }

    handleLoginBtnClick() {
        this.setState({
            isLoggedIn : true
        })
    }

    handleLogoutBtnClick() {
        this.setState({
            isLoggedIn : false
        })
    }

    handle

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button;

        if(isLoggedIn) {
            button = <LogIn method={this.handleLogoutBtnClick} />
        }
        else{
            button = <LogOut method={this.handleLoginBtnClick} />
        }

        return(
            <div>
                {button}
            </div>
        )
    }

}

ReactDOM.render(
    <LoginControl loginStatus={false} />,
    document.getElementById('App')
);