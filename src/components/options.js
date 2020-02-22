import React from 'react';
import Option from './option';

const Options = (props) =>  {
  return (
    <div>
      {props.data.map(option => <Option key={option} optionText={option} deleteRecord={props.deleteRecord}/>)}
      {props.dept.map(department => <Option key={department} department={department} deleteRecord={props.deleteRecord}/>)}
      <button className="btn btn-danger" onClick={props.deleteAll} disabled={!props.hasUsers}>Delete all user</button>
    </div>
  )
}

export default Options;