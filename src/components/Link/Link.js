import React from 'react';

const Link = ({ link }) => {

  return (
    <div>
        {link.speed}
        {link.rotation}
        {link.distance}
    </div>
  );
};

export default Link;