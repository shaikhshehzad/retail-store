import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Components/Core/Home/Home.jsx';
import About from '../Components/Core/About/About.jsx';
import Contacts from '../Components/Core/Contacts/Contacts.jsx'
const Routes = () => {
    return (
      <>
      <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/about" component={About} />
      </Routes>
      </>
      );
};

export default Routes;