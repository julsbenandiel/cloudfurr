import React, { FC } from 'react';
import Main from 'components/Main';

interface AppProps {}

const App:FC<AppProps> = (props) => {
  return (
    <div className="container">
      <Main />
    </div>
  );
}

export default App;
