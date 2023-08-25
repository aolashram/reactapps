import React from 'react'
import { ErrorMessage } from 'formik'

const AmErrorMessage = ({name}) => {
  return (
    <span className='error-message'>
        <ErrorMessage name={name} />
    </span>
    
  )
}

export default AmErrorMessage



  
