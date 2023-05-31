import React from 'react'
import "./modals.css"

const EditModal = ({ openNotif, setOpenNotif, onFileChange, uploaderRef, upFile }) => {
    return (
        openNotif &&
        <div className="globalContainer">
            <div className="modalContainer">                
				<div className="centeredGrid">
					<h3>Select a file</h3>
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
						upload
					</button>
					<button type="button" className="formBtn" onClick={() => setOpenNotif(false)}>
						cancel
					</button>
				</div>                
            </div>
        </div>
    )
}

export default EditModal