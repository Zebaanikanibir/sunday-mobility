import React from 'react';

const User = (props) => {
  return (
    <div>
      <li>{props.data.name}</li>
    </div>
  );
}

export default User;
