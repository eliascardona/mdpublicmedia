import { useState } from "react"
import { TrialsContext } from "../contexts/TrialsContext"
import TrialCard from "../components/utils/TrialCard"

export default function Home() {
	const [arr, setArr] = useState([])
	return (
		<TrialsContext.Provider value={[arr, setArr]}>
			<section className="dongle">
				<h1>MD PUBLIC MEDIA</h1>
				<TrialCard />
			</section>
		</TrialsContext.Provider>
	)

}
