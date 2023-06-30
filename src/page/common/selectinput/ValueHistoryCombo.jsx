import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export default function ValueHistoryCombo(props) {
    const { id, valueHistories, changeValue } = props;
    return(
        <DropdownButton align="end" variant="outline-secondary" title="">
            {valueHistories.map((valueHistory) => {
                return(
                    <Dropdown.Item key={valueHistory} onClick={() => {
                        changeValue(id, valueHistory);
                    }}>
                        {valueHistory}
                    </Dropdown.Item>
                );
            })}
        </DropdownButton>
    );
}