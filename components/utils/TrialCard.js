import { useContext, useEffect } from "react"
import { firestore } from "../../firebase/base.js"
import {
		collection,
		limit,
		query,
		onSnapshot,
		where
} from "firebase/firestore"
import { TrialsContext } from "../../contexts/TrialsContext"
import styles from "../../styles/cards.module.css"

export default function TrialCard() {
	const [array, setArray] = useContext(TrialsContext)

	useEffect(()=> {
		const q = query(
			collection(firestore, "pruebas-fisicas"),
			where("errores", "==", "1"),
			limit(7)
		)
		const unsub = onSnapshot(q,
			(snapshot) => {
				const A = []
				snapshot.forEach(info => A.push(info.data()))
				setArray(A)
			},
			(error) => {
				console.log(error, error.code)
			}
		)
		return unsub
	},[])

	return (
		<section>
				{
					array.map((el, i) => (
						<InnerCard
							Athlete={el.nombre}
							Pushs={el.lagartijas}
							Abs={el.abdominales}
							Squats={el.sentadillas}
							Burpees={el.burpees}
							Period={el.periodo}
							key={i}
						/>
					))
				}
		</section>
	)
}

function InnerCard({ Athlete, Pushs, Abs, Squats, Burpees, Period }) {
	return(
		<div className={styles.cardBox}>
			<div className={styles.cardLy}>

				<div className={styles.rone}>
					<strong>{Athlete} </strong>
				</div>

				<div className={styles.rtwo}>
					<span>
						lagartijas
						<br/>
						{Pushs}
					</span>
						<span>
						abdominales	
						<br/>
						{Abs}
					</span>
					<span>
						sentadillas
						<br/>
						{Squats}
					</span>
					<span>
						burpees
						<br/>
						{Burpees}
					</span>
				</div>

				<div className={styles.rthree}>
					<span>{Period} </span>
				</div>

			</div>
		</div>
	)
}
