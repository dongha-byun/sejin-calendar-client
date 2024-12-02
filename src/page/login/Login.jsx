import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import LoginService from "../../js/login/login";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [loginParam, setLoginParam] = useState({
        "loginId": "",
        "password": ""
    });

    const changeLoginParam = (event) => {
        setLoginParam({
            ...loginParam,
            [event.target.id]: event.target.value
        });
    }

    const sendLogin = () => {
        LoginService.login(loginParam).then(() => {
            navigate("/main");
        });
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row>
                <Col>
                    <div className="p-4 shadow rounded">
                        <h2 className="text-center mb-4">세진정판</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="loginId">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" onChange={changeLoginParam}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    onChange={changeLoginParam}  
                                    onKeyDown={(event) => {
                                        if(event.code === "Enter") {
                                            sendLogin();
                                        }
                                    }}/>
                            </Form.Group>
                        </Form>
                        <Button className="w-100" onClick={sendLogin}>로그인</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}