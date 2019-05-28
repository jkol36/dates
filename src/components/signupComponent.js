import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signupRequest } from '../actions'
import '../less/loginAndSignup.less'
import { Link } from 'react-router'

class _SignupComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:'',
      passwordConfirm: '',
      error: null
    }
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onPasswordConfirmChange = this.onPasswordConfirmChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value
    })
  }
  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  onPasswordConfirmChange(e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  onSubmit(e) {
    const { dispatch } = this.props
    e.preventDefault()
    console.log('submitting sighnup')
    if(this.state.password !== this.state.passwordConfirm) {
      this.setState({
        error: "You password does not match"
      })
      return 
    }
    else if(!this.state.password.length > 0) {
      this.setState({
        error: 'You did not type in a password'
      })
      return
    }

    else if(!this.state.email.length > 0) {
      this.setState({
        error: 'You did not type in an email'
      })
      return

    }
    else if(!this.state.passwordConfirm.length > 0) {
      this.setState({
        error: 'you did not fill out your password in both fields'
      })
      return
    }
    return dispatch(signupRequest({
      email: this.state.email,
      password: this.state.password
    }))
  }
  render() {
    let button = <button type='submit' onClick={this.onSubmit} className='btn btn-success'> Sign Up</button>
    if(this.state.loading) {
      button = <button type='submit' disabled className='btn btn-success'><i className='fa fa-fw fa-spin fa-spinner'></i></button>
    }
    let alert = null
    if(this.state.error) {
      alert = (
        <div className='alert alert-dismissible alert-warning'> 
          <button type='button' className='close' data-dismiss='alert'>x</button>
          <strong> Oh snap</strong> {this.state.error}
        </div>
      )
    }
    return (
      <div className='login-and-signup-container'> 
        <div className='container-fluid'> 
          <div className='row'> 
            <div className='col-xs-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4'>
              <div className='panel'> 
                <div className='panel-body'> 
                  { alert }
                </div>
                <div className='signup-wrapper'> 
                  <span className='signup-text'> Signup</span>
                </div>
                <form className='form' onSubmit={this.onSubmit}> 
                  <div className='form-group'> 
                    <div className='input-group'> 
                      <span className='input-group-addon'><i className='fa fa-envelope fa-fw'/></span>
                      <input className='form-control' type='email' onChange={this.onEmailChange} value={this.state.email} placeholder={'your email @gmail.com'}/>
                    </div>
                    <div className='input-group'> 
                      <span className='input-group-addon'><i className='fa fa-lock fa-fw'/></span>
                      <input className='form-control' type='password' onChange={this.onPasswordChange} value={this.state.password} placeholder={'****'}/>
                    </div>
                    <div className='input-group'> 
                      <span className='input-group-addon'><i className='fa fa-lock fa-fw'/></span>
                      <input className='form-control' type='password' onChange={this.onPasswordConfirmChange} value={this.state.passwordConfirm} placeholder={'****'}/>
                    </div>
                  </div>
                  { button }
                </form>
              </div>
              <div className='panel-footer'> 
                { !this.state.loading && <Link disabled to='/login'> Already have an account? Click here to login</Link>}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const SignupComponent = connect(state => state)(_SignupComponent)