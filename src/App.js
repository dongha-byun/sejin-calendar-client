import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

// == pages == //
import Login from './page/login/Login';
import MainPage from './page/MainPage';
import CustomCompanyPage from './page/customcompany/CustomCompanyPage';

function App() {
  return (
    <Container fluid="xxl">
      <Row>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            
            <Route path="/custom-company" element={<CustomCompanyPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Row>
    </Container>
  );
}

export default App;
