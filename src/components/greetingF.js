import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function GreetingF(props) {

    const [age, setage] = useState(20)

    const birthday = ( ) => {
        setage(age-1)

        if(age === 0){
            return setage(age+1)
        }

    }

  return (
    <div>
    <p>
    hola  {props.name}!
    </p>

     <h2>
         tu edad es: {age}
    </h2> 

    <div>
     <button onClick={birthday}>te pones joven</button>
    </div>
    </div>
  )
}


GreetingF.protoTypes = {
    name: PropTypes.string,
}