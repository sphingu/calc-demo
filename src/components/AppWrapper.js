import React from 'react'
import PropTypes from 'prop-types'

import Snackbar from 'material-ui/Snackbar'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

const AppWrapper = ({
  title,
  children,
  isShowNotification,
  onCloseNotification
}) => {
  return (
    <div className="App">
      <AppBar title={title} />
      <Paper className="box" zDepth={2}>
        {children}
      </Paper>
      <Snackbar
        open={isShowNotification}
        message="Bad operation"
        autoHideDuration={4000}
        onRequestClose={onCloseNotification}
      />
    </div>
  )
}

AppWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  isShowNotification: PropTypes.bool.isRequired,
  onCloseNotification: PropTypes.func.isRequired
}

export default AppWrapper
