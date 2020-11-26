import React, { useState } from 'react';
import { storage } from '../controller/main';

const ActualSupervision = () => {

    return (
        <>
            { !url ? (
                <form onSubmit={handleUpload}>
                    <div className="file-container">
                        <div className="btn-file-container">
                            <i className="fas fa-cloud-upload-alt"></i>
                            <p className="btn-file-text">Credenciales supervisor</p>
                            <input type="file" className="btn_enviar" onChange={handleChange}/>
                        </div>

                        <button disabled={!file} className="btn-secondary-custom">Subir</button>
                    </div>
                </form>    
            )        
            :
            <div className="file-container">
                <img src={url} alt={url} />
            </div>

            }
        </>
    );
};

export default ActualSupervision;