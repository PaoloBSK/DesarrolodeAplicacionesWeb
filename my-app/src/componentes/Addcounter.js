import React from "react"
import PropTypes from 'prop-types'

export const Addcounter = ({onAddPress}) => {
   
    return(
        <button
        
        onClick={onAddPress}>
            +1
        </button>
        
    )

}
Addcounter.propTypes = {
    onAddPress : PropTypes.number.isRequired
}