import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from './components/Loader'

class App extends Component {
  render() {
    const { loading } = this.props

    return (
      <div className="main">
        <Loader loading={ loading } />
        <h1>Memory Game</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps, {})(App)
