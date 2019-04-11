// Tree shaking 只支持 ES modules

import '@babel/polyfill'

import React, {Component} from 'react'
import ReactDom from 'react-dom';

class App extends Component {
  render () {
    return <div>REACT</div>
  }
}

ReactDom.render(<App/>, document.getElementById('root'))