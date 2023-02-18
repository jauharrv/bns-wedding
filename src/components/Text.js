import React from 'react';

const Text = ({ children, ...props }) => {
  return (
    <p
      style={{
        fontFamily: 'Hendycroft Signature',
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export default Text;
