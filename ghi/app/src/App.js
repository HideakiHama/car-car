import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceLists';
import TechnicianForm from './TechnicianForm';

function App(props) {
  // if (props.service === undefined) {
  //   return null;
  // }
  return (
    <BrowserRouter>
      <Nav />
      {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="technician/new" element={<TechnicianForm />} />
          <Route path="service/new" element={<ServiceForm />} />
          <Route path="service/list" element={<ServiceList service={props.service} />} />
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
