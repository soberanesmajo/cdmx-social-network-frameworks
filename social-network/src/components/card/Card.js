import React from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

const cardPrint = () =>
<Row>
    <Col s={12} m={5}>
        <CardPanel className="teal lighten-4 black-text">
            <span>Comentarios</span>
        </CardPanel>
    </Col>
</Row>

export default cardPrint;