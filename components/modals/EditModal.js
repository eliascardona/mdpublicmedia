import React from 'react'
import "../../styles/modals.module.css"

export default function EditModal ({ openNotif, setOpenNotif, onFileChange, uploaderRef, upFile }) {
	return (
		openNotif &&
			<div className="globalContainer">
				<div className="modalContainer">                
					<div className="centeredGrid">
						<h3>Seleccione una imagen</h3>
						<label htmlFor="edit" className="fileLabel">
							<input type="file" id="edit" className="fileInput" accept="image/*" onChange={onFileChange} />
							<div>
								<ion-icon name="cloud-upload-outline"></ion-icon>
							</div>
						</label>
						<progress value="0" max="100" ref={uploaderRef} className="progress">
							0%
						</progress>
						<button type="button" className="formBtn" onClick={upFile}>
							subir imagen
						</button>
						<button type="button" className="formBtn" onClick={() => setOpenNotif(false)}>
							cancelar
						</button>
					</div>                
				</div>
			</div>
	)
}
