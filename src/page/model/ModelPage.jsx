import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function ModelPage() {
    return(
        <div className="mt-3">
            <Form>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>모델</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>모델명</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>가로</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>세로</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>규격(inch)</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>매수</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>국내가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>해외A2가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>해외A1가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>해외B가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>국내가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>해외A2가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>해외A1가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>해외B가</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>용지무게(표)</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>용지지질(표)</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>용지규격(표)</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" as={Row}>
                            <Form.Label column>부당용지소요량(표)</Form.Label>
                            <Col>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}