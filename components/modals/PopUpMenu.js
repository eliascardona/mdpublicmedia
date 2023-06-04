import React from 'react'
import "../../styles/modals.module.css"

export default const NormalModal = ({ openNotif, setOpenNotif }) => {
	return (
		openNotif &&
			<div className={styles.globalContainer}>
				<div className={styles.modalContainer}>
					<div className={styles.centeredGrid}>
						<div>

						</div>
						<button type="button" onClick={() => setOpenNotif(false)}>
							cerrar
						</button>
					</div>
				</div>
			</div>
	)
}
