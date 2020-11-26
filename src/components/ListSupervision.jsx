import React from 'react'

const ListSupervision = ({ setSeeSupervision, dataSupervisions, setInfoSupervision }) => {

    console.log('list: ', dataSupervisions);
    const handleClickCard = () => {
        console.log('clickCard');
        setSeeSupervision(true);
        setInfoSupervision(dataSupervisions);
    };

    return (
        <div className="question-card" onClick={handleClickCard} >
            <div>
                <div>
                    <i className="fas fa-exclamation-circle"></i>
                </div>
                <div>
                    <i className="fas fa-cloud-upload-alt icon-upload"></i>
                </div>
            </div>

            <div className="list-cards-container">
                <p>{dataSupervisions.unidad} - Supervisión {dataSupervisions.typeSupervision}</p>
                <p>{dataSupervisions.startDate}</p>
                <p>Estado: En {dataSupervisions.stateSupervision}</p>
            </div>

            <i className="fas fa-chevron-right icon-right"></i>
        </div>
    )
}

export default ListSupervision;