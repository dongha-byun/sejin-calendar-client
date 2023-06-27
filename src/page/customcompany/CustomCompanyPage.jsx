import React from "react";
import { Col, Form, FormGroup, Row, Table } from "react-bootstrap";

export default function CustomCompanyPage() {
    return(
        <div className="mt-3">
            <Form>
                <FormGroup className="mb-3" as={Row}>
                    <Form.Label column sm={1}>분 류</Form.Label>
                    <Col sm={3}>
                        <Form.Select>
                            <option>자재관련</option>
                            <option>인쇄소</option>
                            <option>지업사</option>
                            <option>제본소</option>
                            <option>총판</option>
                        </Form.Select>
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <Form.Label column sm={1}>업체명</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>대표자</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>사업자번호</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <Form.Label column sm={1}>주소</Form.Label>
                    <Col>
                        <Form.Control column type="text" />
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <Form.Label column sm={1}>전화</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>팩스</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>E-mail</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                </FormGroup>
                <FormGroup className="mb-3" as={Row}>
                    <Form.Label column sm={1}>webhard</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>할인요금</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                    <Form.Label column sm={1}>할인율</Form.Label>
                    <Col sm={3}>
                        <Form.Control type="text" />
                    </Col>
                </FormGroup>
            </Form>

            <div className="mt-3 mb-3 border"></div>

            <Table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>분류</td>
                        <td>거래처명</td>
                        <td>대표자</td>
                        <td>주소</td>
                        <td>전화번호</td>
                        <td>팩스번호</td>
                        <td>사업자번호</td>
                        <td>e-mail</td>
                        <td>webhard</td>
                        <td>입력일</td>
                        <td>가격표</td>
                        <td>D.C</td>
                        <td>etc</td>
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