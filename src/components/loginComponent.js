import React, { Component } from 'react'
import { loginRequest } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import '../less/loginAndSignup.less'


class _LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
     'password': '',
     'loading': false,
     'error': null
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onEmailChange(e) {
    this.setState({
      email:e.target.value
    })
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit() {
    const { dispatch } = this.props
    if(!this.state.email.length > 0 || !this.state.password.length > 0) {
      this.setState({
        error: 'You did not type in an email or a password'
      })
      return
    }
    return dispatch(loginRequest({email:this.state.email, password:this.state.password}))


  }

  render() {
    let button = <button type='submit' onClick={this.onSubmit} className='btn btn-success'>Login</button>
    if(this.state.loading) {
      button = <button type='submit' disabled className='btn btn-success'><i className='fa fa-fw fa-spin fa-spinner'></i></button>
    }
    let alert = null
    if(this.state.error) {
      alert = (
        <div className='alert alert-dismissible alert-warning'> 
          <button type='button' className='close' data-dismiss='alert'></button>
          <strong> Oh snap!</strong> {this.state.error}
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
                <div className='login-wrapper'> 
                  <span className='login-text'> Login </span>
                </div>
                <form className='form' onSubmit={this.onEmailChange}>
                  <div className='form-group'> 
                    <div className='input-group'> 
                      <span className='input-group-addon'> <i className='fa fa-envelope fa-fw'></i></span>
                      <input className='form-control' type='email' placeholder='you@gmail.com' value={this.state.email} onChange={this.onEmailChange}/>
                    </div>
                   <div className='input-group'> 
                      <span className='input-group-addon'> <i className='fa fa-lock fa-fw'></i></span>
                      <input className='form-control' type='password' placeholder='****' value={this.state.password} onChange={this.onPasswordChange}/>
                    </div>
                  </div>
                </form>
              </div>
              {button}
              <div className='panel-footer'> 
                <Link to='/signup'> Don't have an account yet? Get started now.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const LoginComponent = connect(state => state)(_LoginComponent)