import React from 'react';
import { Form } from "react-bootstrap";

const CreateActionPlan = ({infoSupervision}) => {

    console.log('info: ', infoSupervision);
    return (
        <>
            <div className="info-supervision">
                <Form className="form-container">
                    <h3>{infoSupervision.unidad}</h3>
                    <p>Fecha de Inicio: {infoSupervision.startDate}</p>
                    <p>Fecha de Cierre: {infoSupervision.expirationDate}</p>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select" name="findings" value="" required >
                            <option value="selecciona">Se presentaron hallazgos</option>
                            <option value="Si">Si</option>
                            <option value="No">No</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
};

export default CreateActionPlan;