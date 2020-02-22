import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      {props.department}
      {props.optionText && 
        <button onClick={() => props.deleteRecord('users', props.optionText)}>Delete</button>
      }
      {/* {props.department && 
        <button onClick={() => props.deleteRecord('departments', props.department)}>Delete</button>
      } */}
    </div>
  )
}

export default Option;