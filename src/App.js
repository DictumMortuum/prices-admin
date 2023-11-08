import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import themeProvider from './themeProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import { Admin, Resource } from 'react-admin';
import { CachedpriceList, CachedpriceEdit } from './resources/cachedprices';
import { StoresList } from './resources/stores';

const App = () => {
  return (
    <Router>
      <Admin theme={themeProvider} dataProvider={simpleRestProvider(`${process.env.REACT_APP_ENDPOINT}/prices`)}>
        <Resource name="prices" list={CachedpriceList} edit={CachedpriceEdit} />
        <Resource name="boardgames" />
        <Resource name="stores" list={StoresList} />
      </Admin>
    </Router>
  );
}

export default App;
