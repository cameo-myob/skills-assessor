import React from 'react';
import { StandardTemplate } from "@myob/myob-widgets";

const Protege = () => {
    return(
        <div
        style={{
            width: '100%',
            height: '100%',
            background: '#ebeef1',
        }}
        >
            <StandardTemplate pageHead={""}>
            <h1>Hello</h1>
            </StandardTemplate>
        </div>
    )
}

export default Protege;