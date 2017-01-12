import React from 'lib/react';

const style = {
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',
};

const Row = ({ rowStyle, children }) => {
  const completeStyle = Object.assign({}, style, rowStyle);

  return (
    <div style={completeStyle}>
      {children}
    </div>
  );
};

export default Row;
