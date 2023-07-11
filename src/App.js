import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

// == pages == //
import Login from './page/login/Login';
import MainPage from './page/main/MainPage';
import CustomCompanyPage from './page/basicdata/CustomCompanyPage';
import MaterialPage from './page/basicdata/MaterialPage';
import PaperPage from './page/basicdata/PaperPage';
import ModelPage from './page/basicdata/ModelPage';
import AdminMemberPage from './page/admin/AdminMemberPage';

function App() {
  return (
    <Container fluid="xxl">
      <Row>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
            
            {/** 기초자료 등록 화면 */}
            <Route path="/basic-data/custom-company" element={<CustomCompanyPage />}></Route>
            <Route path="/basic-data/material" element={<MaterialPage />}></Route>
            <Route path="/basic-data/paper" element={<PaperPage />}></Route>
            <Route path="/basic-data/model" element={<ModelPage />}></Route>

            <Route path="/admin/member" element={<AdminMemberPage />}></Route>
            <Route path="/admin/auth" element></Route>
          </Routes>
        </BrowserRouter>
      </Row>
    </Container>
  );
}

export default App;
