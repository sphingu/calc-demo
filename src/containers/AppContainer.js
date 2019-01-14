import React, { Component } from 'react'
import { connect } from 'react-redux'

import { closeNotification } from '../Actions'

import AppWrapper from '../components/AppWrapper'

import CalcButtonsContainer from './CalcButtonsContainer'
import CalcDisplayContainer from './CalcDisplayContainer'
import '../css/app.css'

class App extends Component {
  render() {
    const { isShowNotification, onCloseNotification } = this.props

    return (
      <AppWrapper
        title="Calculator"
        isShowNotification={isShowNotification}
        onCloseNotification={onCloseNotification}
      >
        <CalcDisplayContainer />

        <CalcButtonsContainer />
      </AppWrapper>
    )
  }
}

const mapStateToProps = state => ({
  isShowNotification: state.isShowNotification
})

const mapDispatchToProps = dispatch => ({
  onCloseNotification: () => dispatch(closeNotification())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
