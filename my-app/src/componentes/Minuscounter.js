import React from "react"
import PropTypes from 'prop-types'

export const Minuscounter = ({onMinusPress}) => {
   
    return(
        <button
        
        onClick={onMinusPress}>
            -1
        </button>
        
    )

}
Minuscounter.propTypes = {
    onMinusPress : PropTypes.number.isRequired
}