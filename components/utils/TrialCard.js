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

	useEffect(()=>{
		array.map((el, i, arr) => console.log(arr))
	},[array])

	return (
		<div>
			{
				array.map(el => (<div>{el.nombre}</div>))
			}
		</div>
	)
}
