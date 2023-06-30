import React from "react";
import './tableStyle.css';
import { Table } from "react-bootstrap";

export default function ListTable(props) {

    const {tableHeaders, datas} = props;

    return(
        <div className="table-container">
            <Table hover>
                <thead>
                    <tr>
                    {tableHeaders.map((header) => {
                        return(
                            <td key={header.id} style={{width: header.width}}>{header.name}</td>
                        );
                    })}
                    </tr>
                </thead>
                <tbody>
                    {datas.map((data) => {
                        return (
                            <tr key={data.id}>
                                {tableHeaders.map((header) => {
                                    return (
                                        <td key={header.id}>{data[header.id]}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}