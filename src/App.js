import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import themeProvider from './themeProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import { Admin, Resource } from 'react-admin';
import { CachedpriceList } from './resources/cachedprices';

const App = () => {
  return (
    <Router>
      <Admin theme={themeProvider} dataProvider={simpleRestProvider(process.env.REACT_APP_ENDPOINT)}>
        <Resource name="cachedprices" list={CachedpriceList} />
        <Resource name="boardgames" />
        <Resource name="stores" />
      </Admin>
    </Router>
  );
}

export default App;
