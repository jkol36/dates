import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from 'actions'
import { TopBar } from 'components'

class _AppContainer extends Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='app-container'> 
        <TopBar user={{name:'hello'}} />
      </div>
    )
  }
}


export const AppContainer = connect(state => state)(_AppContainer)