import React, {Component} from 'react';
import './Registration.module.css';

class Registration extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        shouldEnableButton: false,
        errors: {
            username: '',
            password: '',
            confirmPassword: '',
          }
    }

    validateChange = (event) => {

        let errors = this.state.errors;
        let shouldEnableButton = this.state.shouldEnableButton;
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case 'username': 
                errors.username = 
                    event.target.value.length < 8
                        ? 'Username must be 8 characters long'
                        : '';
                    break;
            case 'password': 
                errors.password = 
                    event.target.value.length < 8
                        ? 'Password must be 8 characters long'
                        : '';
                break;
            case 'confirmPassword':
                errors.confirmPassword = 
                    event.target.value !== this.state.password
                        ? 'Password Does not match'
                        : '';
                break;
            default :
                break;
        }
                      
 
        let emptyCheck = this.state.username !== '' && this.state.password !== '' && this.state.confirmPassword !== '';
        let errorCheck = this.state.errors.username === '' && this.state.errors.password === '' && this.state.errors.confirmPassword === '';
        shouldEnableButton = emptyCheck && errorCheck;

        this.setState({errors, [name]: value, shouldEnableButton: shouldEnableButton});
            
    }

    render () {
        return(
            <div className="Registration">
                <h1>Registration Form</h1>
                <form className="Form">
                    <input 
                        className="Input" 
                        type="text" 
                        name="username" 
                        onChange={this.validateChange}
                        placeholder="Username" />
                    {
                        this.state.errors.username.length > 0 && 
                        <span className='Error'>{this.state.errors.username}</span>
                    }
                    <input 
                        className="Input" 
                        type="password" 
                        name="password" 
                        onChange={this.validateChange}
                        placeholder="Password" />
                    {
                        this.state.errors.password.length > 0 && 
                        <span className='Error'>{this.state.errors.password}</span>
                    }
                    <input 
                        className="Input" 
                        type="password" 
                        name="confirmPassword" 
                        onChange={this.validateChange}
                        placeholder="Confirm Password" />
                    {
                        this.state.errors.confirmPassword.length > 0 && 
                        <span className='Error'>{this.state.errors.confirmPassword}</span>
                    }    
                    <button className="Button" disabled={!this.state.shouldEnableButton}>Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;