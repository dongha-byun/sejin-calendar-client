import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { SEND_MAIN_PING } from "../../constants";
import LoginService from "../../js/login/login";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const { ipcRenderer } = window.require("electron");
    const [number, setNumber] = useState(0);
    const [loginParam, setLoginParam] = useState({
        "loginId": "",
        "password": ""
    });

    const sendMail = () => {
        // ipcRenderer.send(SEND_MAIN_PING, 'send');
        setNumber(number+1);
    }

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
        <div>
            <div>
                <img src="logo192.png" />
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="loginId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" onChange={changeLoginParam}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={changeLoginParam}/>
                </Form.Group>
            </Form>
            <Button onClick={sendLogin}>로그인</Button>
        </div>
    );
}