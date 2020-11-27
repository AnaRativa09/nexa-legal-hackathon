import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import firestore from '../controller/firestore';

const NewActionPlan = ({dataSupervisions, handleFinalizeActionPlan}) => {

    const initialStateActionPlan = {
        idSupervision:'',
        taskDetail: '',
        responsibleArea: '',
        responsibleLeader: '',
        anotherResponsible: '',
        startDate: '',
        expirationDate: '',
        stateAction: 'EN PROCESO',
    };

    const [newActionPlan, setActionPlan] = useState(initialStateActionPlan );
    const [sendConfirmation, setSendConfirmation] = useState(false);

    const addDocActionPlan = (arrayActionPlan) => {
        firestore.addActionPlan(arrayActionPlan);
        console.log(arrayActionPlan);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setActionPlan({ ...newActionPlan, [name]: value,idSupervision:dataSupervisions.id });
    };

     // Agregar nuevo plan de acción
    const handleRegisterActionPlan = (e) => {
        e.preventDefault();
        addDocActionPlan(newActionPlan);
        setSendConfirmation(true);
        handleFinalizeActionPlan('EN PROCESO');
        setTimeout(() => {
            setSendConfirmation(false);
        }, 3000);
        setActionPlan({ ...initialStateActionPlan });
    };

    return (
        <div className="new-action-plan-container">
            <Form className="form-container">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="orange-text">Detallar Tarea</Form.Label>
                    <Form.Control as="textarea" rows={3} name="taskDetail" onChange={handleInputChange} value={newActionPlan.taskDetail}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" name="responsibleArea" onChange={handleInputChange} value={newActionPlan.responsibleArea} required>
                        <option value="">Área Responsable</option>
                        <option value="Almacén">Almacén</option>
                        <option value="Campamentos">Campamentos</option>
                        <option value="Mina">Mina</option>
                        <option value="Planta Concentradora">Planta Concentradora</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" name="responsibleLeader" defaultValue="Líder Responsable" onChange={handleInputChange} value={newActionPlan.responsibleLeader} required >
                        <option value="">Líder Responsable</option>
                        <option value="Daniel Fernandez Suárez">Daniel Fernandez Suárez</option>
                        <option value="Pedro Pérez">Pedro Pérez</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicAnotherResponsible">
                    <Form.Control type="text" placeholder="Otros Responsable" name="anotherResponsible" onChange={handleInputChange} value={newActionPlan.anotherResponsible} required />
                </Form.Group>

                <Form.Group controlId="formBasicDate">
                    <Form.Label className="orange-text">Fecha de Inicio de Plan de Acción</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de inicio" name="startDate" onChange={handleInputChange} value={newActionPlan.startDate} required />
                </Form.Group>

                <Form.Group controlId="formBasicDate">
                    <Form.Label className="orange-text">Cierre estimado de Plan de Acción</Form.Label>
                    <Form.Control type="date" placeholder="Fecha de cierre" name="expirationDate" onChange={handleInputChange} value={newActionPlan.expirationDate} required />
                </Form.Group> 

                <Button className="btn-primary-custom" type="submit"  onClick={handleRegisterActionPlan}>
                    CREAR PLAN DE ACCIÓN
                </Button>
            </Form>

            {
                sendConfirmation ?
                    <div className="confirmation">
                        Guardado en Colección
                    </div>
                : null
            }
        </div>
    )
}

export default NewActionPlan;