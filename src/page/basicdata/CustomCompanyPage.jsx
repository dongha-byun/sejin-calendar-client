import React, { useState } from "react";
import { Col, Form, FormGroup, Row, Table } from "react-bootstrap";
import CustomCompanyService from "../../js/customCompany/customCompany";
import ButtonComponent from "./component/ButtonComponent";

export default function CustomCompanyPage() {
    const [loading, setLoading] = useState(true);
    const [customCompanyList, setCustomCompanyList] = useState([]);
    const [customCompanyParam, setCustomCompanyParam] = useState({
        "type": "",
        "name": "",
        "ceoName": "",
        "registrationNumber": "",
        "address": "",
        "telNo": "",
        "fax": "",
        "email": "",
        "webhard": "",
        "discountType": "",
        "discountRate": "",
        "etc": ""
    });

    const save = () => {
        console.log(customCompanyParam);
        CustomCompanyService.save(customCompanyParam).then(() => {

        }).catch((error)=> {
            console.log(error);
        });
    }

    const cancel = () => {
        setCustomCompanyParam({
            "type": "",
            "name": "",
            "ceoName": "",
            "registrationNumber": "",
            "address": "",
            "telNo": "",
            "fax": "",
            "email": "",
            "webhard": "",
            "discountType": "",
            "discountRate": "",
            "etc": ""
        });
    }

    const changeParam = (event) => {
        setCustomCompanyParam({
            ...customCompanyParam,
            [event.target.id]: event.target.value
        })
    }
    
    return(
        <div className="mt-3">
            <Form>
                <Row className="mb-3" >
                    <Col sm={4} >
                        <FormGroup controlId="type">
                            <Form.Label>분 류</Form.Label>
                            <Form.Select onChange={changeParam} value={customCompanyParam.type}>
                                <option value="MATERIAL">자재관련</option>
                                <option value="PRINT">인쇄소</option>
                                <option value="PAPER">지업사</option>
                                <option value="BINDING">제본소</option>
                                <option value="AGENCY">총판</option>
                            </Form.Select>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col sm={4} >
                        <FormGroup controlId="name">
                            <Form.Label>업체명</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.name}/>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup controlId="ceoName">
                            <Form.Label >대표자</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.ceoName}/>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup controlId="registrationNumber">
                            <Form.Label >사업자번호</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.registrationNumber}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FormGroup controlId="address">
                            <Form.Label>주소</Form.Label>
                            <Form.Control column type="text" onChange={changeParam} value={customCompanyParam.address}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FormGroup controlId="telNo">
                            <Form.Label>전화</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.telNo}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="fax">
                            <Form.Label>팩스</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.fax}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.email}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <FormGroup controlId="webhard">
                            <Form.Label>webhard</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.webhard}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="discountType">
                            <Form.Label>할인요금</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.discountType}/>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup controlId="discountRate">
                            <Form.Label>할인율</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.discountRate}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup controlId="etc">
                            <Form.Label>기타</Form.Label>
                            <Form.Control type="text" onChange={changeParam} value={customCompanyParam.etc}/>
                        </FormGroup> 
                    </Col>
                </Row>
            </Form>
            <ButtonComponent saveFunc={save} cancelFunc={cancel} />

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