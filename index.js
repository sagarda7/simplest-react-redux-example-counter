import React, {Component} from "react"
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'


//reducer
const counterReducer = (state={count: 0, name:'sagar'}, action) => {
  switch(action.type) {
    case 'INCREMENT':
      reObject.assign({}, {count: state.count+1})
    case 'DECREMENT':
      return Object.assign({}, {count: state.count-1})
    default: 
      return state
  }
}

//action creators
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementAction = () => {
  return {
    type: 'DECREMENT'
  }
}


let store = createStore(counterReducer)


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button onClick={()=> this.props.decrement()}>-</button>
        <input type='text' value={this.props.count}/>
        <button onClick={()=> this.props.increment()}>+</button>
      </div>
    )
  }
}


const mapStateToProps = (state)  => {
  return {
    count: state.count
  }
}


const mapDispatchToProps = (dispatch)  => {
  return {
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction())
  }
}


const App = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(<Provider store={store}> <App/> </Provider>, document.getElementById("root"))

