import React from 'react';

import { Aside, Main } from 'src/containers';

import 'src/scss/app.scss';

const App = () => {
  return (
    <div className="app">
      <Aside />
      <Main />
    </div>
  );
};

export default App;
