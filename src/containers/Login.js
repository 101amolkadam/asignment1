import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting userId: " + this.state.userId + ' && password: ' + this.state.password);
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {

        const divstyle = {
            color: "white",
            backgroundColor: "gray",
            padding: "20px",
            fontFamily: "Arial",
            // textAlign: "center",
            width: "350px"
        }

        const txtboxStyle = {
            width: "300px",
            border: "2px solid lightblue" ,
        }

        return (
            <form onSubmit={this.mySubmitHandler} style = {{margin: "15% 0 20px 40%"}} >
                <div style= {divstyle }>
                    <h1 style = {{color:"black" , margin: "10px 0 50px 0"}} >
                        Login 
                    </h1>
                    <p style = {{color:"black"}}>
                        Enter User Id:
                    </p>
                    <input
                        type='text'
                        name='userId'
                        onChange={this.myChangeHandler}
                        style= {txtboxStyle}
                    />
                    <p style = {{color:"black"}}> 
                        Enter password:
                    </p>
                    <input
                        type='text'
                        name='password'
                        onChange={this.myChangeHandler}
                        style= {txtboxStyle }
                    /><br /><br />
                   
                    <input
                        type='submit'
                        style = {{width: "150px" , borderRadius: "8px" , border: "2px solid #4CAF50" , fontSize: "16px"}}
                    />
                </div>
            </form>
        );
    }
}

export default Login;