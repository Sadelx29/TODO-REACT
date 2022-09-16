import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Greeting extends Component {
  static propTypes = { 
    name: PropTypes.string,

}

  constructor(props){
    super(props)
    this.state = {
        age : 21,

    }
  }

  render() {
    return (
      <div>
      <p>
       hola  {this.props.name}!
       </p>

       <h2>
            tu edad es: {this.state.age}
       </h2>

       <div>
        <button onClick={this.birthday}>cumplir años</button>
       </div>
        
      </div>
      
    )
  }

  birthday = () => {
   this.setState((prevState) => ({

        age: prevState.age +1
   }))
  }

}
