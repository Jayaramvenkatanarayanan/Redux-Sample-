import React, {Component} from 'react'
import classnames from 'classnames'
import {Redirect} from "react-router-dom";
import {Postcall} from '../../Common/Axios'
import './employeeList.css'
import common from '../../Common/common'
class NewEmployee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},
            loading: false,
            Apicallerrors: {},
            done:false
        };
        this.handleChange = this
            .handleChange
            .bind(this)
        this.errorHandlers = this
            .errorHandlers
            .bind(this)
    }
    handleChange(e) {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors)
            delete errors[e.target.name]
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        // Validation
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let errors = {}
        if (this.state.username === '')
            errors.username = "can't Empty"
        else if (this.state.username.length < 5)
            errors.username = "can't lessthan 5 character"
        if (this.state.email === '')
            errors.email = "can't Empty"
        else if (reg.test(this.state.email) === false)
            errors.email = "Please give valid email"
        if (this.state.password === '')
            errors.password = "can't Empty"
        else if (this.state.password.length < 5)
            errors.password = "can't lessthan 5 character"
        this.setState({errors})
        let isValid = Object
            .keys(errors)
            .length === 0
        if (isValid) {
            let currentComponent = this;
            const {username, email, password} = this.state
            this.setState({loading: true})
            let url = common.ApiUrl + 'adduser'
            Postcall(url, {
                username,
                email,
                password
            }, (response) => {
                this.errorHandlers(response)
            })
        }
    }
    errorHandlers = (data) => {
        if (data.status === false) {
            this.setState({errors: data, loading: false})
        } else {
            this.setState({done:true,loading: false})
        }
    }

    render() {
        const form = (
                <form
                    className={classnames('ui', 'form', {loading: this.state.loading})}
                    onSubmit={this.submitHandler}>
                    {!!this.state.errors.message && <div className='ui negative message'>
                        <p>{this.state.errors.message}
                        </p>
                    </div>}
                    <div
                        className={classnames('field', {
                        error: !!this.state.errors.username
                    })}>
                        <label htmlFor='User Name'>User Name</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}/>
                        <span>{this.state.errors.username}</span>
                    </div>
                    <div
                        className={classnames('field', {
                        error: !!this.state.errors.email
                    })}>
                        <label htmlFor='Email'>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                        <span>{this.state.errors.email}</span>
                    </div>
                    <div
                        className={classnames('field', {
                        error: !!this.state.errors.password
                    })}>
                        <label htmlFor='Password'>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}/>
                        <span>{this.state.errors.password}</span>
                    </div>
                    <div className="field">
                        <button className="ui primary button">
                            Create
                        </button>
                        <input type='button' className="ui button" value='Cancle'/>
                    </div>
                </form>

            )
        return (
            <div className='Page'>
            {this.state.done ? <Redirect to='/employee' /> : form}
            </div>
        )
    }
}

export default NewEmployee;