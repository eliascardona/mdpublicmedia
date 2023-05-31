import React from 'react'
import "./modals.css"

const NormalModal = ({ openNotif, setOpenNotif, parentText }) => {
    return (
        openNotif &&
        <div className="globalContainer">
            <div className="modalContainer">                
				<div className="centeredGrid">
                    <h4>Desde firebase, pasando por custom claims</h4>
                    <p>
                        {parentText}
                    </p>
                    <br />
                    <button type="button" className="formBtn" onClick={() => setOpenNotif(false)}>
                        Cancelar
                    </button>
				</div>                
            </div>
        </div>
    )
}

export default NormalModal