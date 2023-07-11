import React from "react";
import { Button } from "react-bootstrap";

export default function ButtonComponent(props) {
    const { saveFunc, cancelFunc } = props;

    const closePop = () => {
        window.close();
    }

    return (
        <div>
            <Button variant="outline-primary" size="sm" className="mx-1" onClick={saveFunc}>확인</Button>
            <Button variant="outline-secondary" size="sm" className="mx-1" onClick={cancelFunc}>취소</Button>
            <Button variant="outline-danger" size="sm" className="mx-1" onClick={closePop}>종료</Button>
        </div>
    );
}