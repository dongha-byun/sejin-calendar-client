import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

// == pages == //
import Login from './page/login/Login';
import MainPage from './page/MainPage';
import CustomCompanyPage from './page/customcompany/CustomCompanyPage';
import MaterialPage from './page/material/MaterialPage';
import PaperPage from './page/paper/PaperPage';

function App() {
  return (
    <Container fluid="xxl">
      <Row>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            
            <Route path="/custom-company" element={<CustomCompanyPage />}></Route>
            <Route path="/material" element={<MaterialPage />}></Route>
            <Route path="/paper" element={<PaperPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Row>
    </Container>
  );
}

export default App;
