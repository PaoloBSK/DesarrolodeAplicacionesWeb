import React from "react"
import PropTypes from 'prop-types'
export const ShowCounter = ({number}) =>{
    return (
        <p>{number}</p>
    )
}
// proptypes sirve para forzar a que se use correctamente el componente
ShowCounter.propTypes = {
    number : PropTypes.number.isRequired
}