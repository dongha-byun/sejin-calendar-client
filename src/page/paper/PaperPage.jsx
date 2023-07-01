import React, { useEffect, useState } from "react";
import { Col, Form, Row, InputGroup, Button } from "react-bootstrap";
import PaperService from "../../js/paper/paper";
import ListTable from "../common/list/ListTable";
import ValueHistoryCombo from "../common/selectinput/ValueHistoryCombo";

export default function PaperPage() {

    const [papers, setPapers] = useState([]);
    const [paperKinds, setPaperKinds] = useState([]);
    const [standards, setStandards] = useState([]);
    const [paperParam, setPaperParam] = useState({
        "weight": 0,
        "paperKind": "",
        "standard": ""
    });

    const tableHeaders = [
        {
            "id" : "id",
            "name" : "id",
            "width" : "76px"
        }, 
        {
            "id" : "weight",
            "name" : "weight",
            "width" : "120px"
        },
        {
            "id" : "paperKind",
            "name" : "지질",
            "width" : "180px"
        },
        {
            "id" : "standard",
            "name" : "규격",
            "width" : "180px"
        }
    ];

    useEffect(() => {
        getPapers();
    }, []);

    const getPapers = () => {
        PaperService.getPapers().then((result) => {
            setPapers(result.data.data);
            setPaperKinds(result.data.paperKinds);
            setStandards(result.data.standards);
        })
    }

    const changePaperParam = (id, value) => {
        setPaperParam({
            ...paperParam,
            [id]: value
        });
    }

    const save = () => {
        PaperService.savePaper(paperParam).then(() => {
            cancel();
            getPapers();
        });
    }

    const cancel = () => {
        setPaperParam({
            "weight": 0,
            "paperKind": "",
            "standard": ""
        });
    }

    const exit = () => {
        
    }

    return (
        <div className="mt-3">
            <Form>
                <Form.Group className="mb-3" as={Row} controlId="weight">
                    <Form.Label column sm={1}>무게</Form.Label>
                    <Col sm={3}>
                        <InputGroup>
                            <Form.Control type="text" value={paperParam.weight || ''} onChange={(event) => {
                                changePaperParam(event.target.id, event.target.value);
                            }} />
                            <InputGroup.Text>g</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row} controlId="paperKind">
                    <Form.Label column sm={1}>지질</Form.Label>
                    <Col sm={3}>
                        <InputGroup>
                            <Form.Control type="text" value={paperParam.paperKind || ''} onChange={(event) => {
                                changePaperParam(event.target.id, event.target.value);
                            }} />
                            <ValueHistoryCombo id="paperKind" valueHistories={paperKinds} changeValue={changePaperParam}/>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3" as={Row} controlId="standard">
                    <Form.Label column sm={1}>규격</Form.Label>
                    <Col sm={3}>
                        <InputGroup>
                            <Form.Control type="text" value={paperParam.standard || ''} onChange={(event) => {
                                changePaperParam(event.target.id, event.target.value);
                            }} />
                            <ValueHistoryCombo id="standard" valueHistories={standards} changeValue={changePaperParam} />
                        </InputGroup>
                    </Col>
                </Form.Group>
            </Form>
            <div>
                <Button variant="outline-primary" size="sm" className="mx-1" onClick={save}>확인</Button>
                <Button variant="outline-secondary" size="sm" className="mx-1" onClick={cancel}>취소</Button>
                <Button variant="outline-danger" size="sm" className="mx-1" onClick={exit}>종료</Button>
            </div>

            <div className="mt-3 mb-3 border"></div>

            <ListTable tableHeaders={tableHeaders} datas={papers} />

        </div>
    );
}