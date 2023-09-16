import { useContext, useEffect, useState } from "react"
import { TrialsContext } from "../contexts/TrialsContext"
//import TProvider from "../contexts/TrialsContext"
import CustomNav from "../components/utils/CustomNav"
import TrialCard from "../components/utils/TrialCard"
import styles from "../styles/home.module.css"

export default function Home() {
	const [array, setArray] = useContext(TrialsContext)
	useEffect(() => {
		console.log("Datos actualizados:", array)
	}, [array])
	return (
			<div className={styles.container}>
				<div className={styles.row}>
					{
						array && array.map(el => (
							<TrialCard {...el} />
						))	
					}
				</div>
			</div>
	)

}
