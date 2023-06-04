import { useState } from "react"
import { TrialsContext } from "../contexts/TrialsContext"
import CustomNav from "../components/utils/CustomNav"
import TrialCard from "../components/utils/TrialCard"
import styles from "../styles/home.module.css"

export default function Home() {
	const [arr, setArr] = useState([])
	return (
		<TrialsContext.Provider value={[arr, setArr]}>
			<section>
				<CustomNav />
				<h1>MD PUBLIC MEDIA</h1>
				<div className={styles.container}>
					<div className={styles.row}>
						<TrialCard />
					</div>
				</div>
			</section>
		</TrialsContext.Provider>
	)

}
