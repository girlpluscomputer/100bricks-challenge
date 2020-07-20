import React from 'react';

import LoaderStyle from './styles';

const Loader = () => {
  return (
    <LoaderStyle>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyle>
  );
};

export default Loader;