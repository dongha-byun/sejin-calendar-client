import React from "react";
import { Col, Form, Row, Table } from "react-bootstrap";

export default function MaterialPage() {
    return(
        <div className="mt-3">
            <Form>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={1}>분류</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />                        
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={1}>규 격1</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>규 격2</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row}>
                    <Form.Label column sm={1}>내 역</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>색 상</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                </Form.Group>
            </Form>

            <div className="mt-3 mb-3 border"></div>

            <Table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>무게</td>
                        <td>지질</td>
                        <td>규격</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </Table>
        </div>
    );
}