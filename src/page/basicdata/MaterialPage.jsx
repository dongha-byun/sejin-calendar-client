import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ListTable from "../common/list/ListTable";

export default function MaterialPage() {
    const [materialParam, setMaterialParam] = useState({
        "type": "",
        "standard1": "",
        "standard2": "",
        "content": "",
        "color": ""
    });
    const tableHeaders = [
        {
            "id": "id",
            "name": "번호",
            "width": "76px"
        },
        {
            "id": "type",
            "name": "번호",
            "width": "76px"
        },
        {
            "id": "standard1",
            "name": "규격1",
            "width": "76px"
        },
        {
            "id": "standard2",
            "name": "규격2",
            "width": "76px"
        },
        {
            "id": "content",
            "name": "내역",
            "width": "76px"
        },
        {
            "id": "color",
            "name": "색상",
            "width": "76px"
        }
    ];

    const changeParam = (id, value) => {

    }

    return(
        <div className="mt-3">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="type">
                        <Form.Label>분류</Form.Label>
                        <Form.Control type="text" />                        
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="standard1">
                        <Form.Label>규 격1</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="standard2">
                        <Form.Label>규 격2</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="content">
                        <Form.Label>내 역</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="color">
                        <Form.Label>색 상</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Row>
            </Form>

            <div className="mt-3 mb-3 border"></div>

            <ListTable tableHeaders={tableHeaders} datas={[]} />
        </div>
    );
}