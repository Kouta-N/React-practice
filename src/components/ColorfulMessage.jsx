import React from 'react';

const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入 https://masayuki031.com/reactjs-spread-operator/
  const contentStyle = {
    color, //オブジェクト名と同一なので、color: colorと書く必要はない
    fontSize: '18px',
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
