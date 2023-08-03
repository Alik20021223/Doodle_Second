import React, {Suspense}from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wall from './Components/Wall/Wall';
import Services from './Views/services';
import Projects from './Views/projects';
import Technologies from './Views/technologies';
import Vacansies from './Views/vacancies';
import Contacts from './Views/contacts';
import Blog from './Views/blog';
import './18n'
import Mobile from './Views/mobile';
import Web from './Views/web';
import Design from './Views/design';
import MachineLearning from './Views/ml';
import Audit from './Views/qa';
import FirstProject from './Views/project_1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense>
      <Router>
          <Routes>
            <Route path='/' element={<App/>} >
              <Route index element={<Wall/>} ></Route>
              <Route path='services' element={<Services/>} ></Route>
              <Route path='projects' element={<Projects/>} ></Route>
              <Route path='technologies' element={<Technologies/>} ></Route>
              <Route path='vacancies' element={<Vacansies/>} ></Route>
              <Route path='contacts' element={<Contacts/>} ></Route>
              <Route path='blog' element={<Blog/>} ></Route>
              <Route path='services/mobile' element={<Mobile/>} ></Route>
              <Route path='services/web' element={<Web/>} ></Route>
              <Route path='services/design' element={<Design/>} ></Route>
              <Route path='services/ml' element={<MachineLearning/>} ></Route>
              <Route path='services/qa' element={<Audit/>} ></Route>
              <Route path='projects/firstProject' element={<FirstProject/>}></Route>
            </Route>
          </Routes>
      </Router>
    </Suspense>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
