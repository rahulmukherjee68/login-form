import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:""
        }
    }
    changeState=(event)=>{
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username);
    }
    render() {
        return (
            <div>
                <form>
                    <div class="form">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="username"
                        value={this.state.username}
                        onChange={this.changeState}
                        ></input>

                        <label>Password</label>
                        <input  type="password" name="password" placeholder="password"></input>

                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
