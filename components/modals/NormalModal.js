import React from 'react'
import "../../styles/modals.module.css"

export default const NormalModal = ({ openNotif, setOpenNotif, Children }) => {
	return (
		openNotif &&
			<div className="globalContainer">
				<div className="modalContainer">                
					<div className="centeredGrid">
						<div>
							{Children}	
						</div>
						<button type="button" className="formBtn" onClick={() => setOpenNotif(false)}>
							cerrar
						</button>
					</div>
				</div>
			</div>
	)
}
