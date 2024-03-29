import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormRegister from './formik/FormRegister';
import FormLogin from './formik/FormLogin';
import ContactForm from './formik/contactForm/ContactForm';
import MailForm from './formik/mailForm/MailForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <FormRegister/>
    <FormLogin/>
   <ContactForm/>
   <MailForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
