import {
		collection,
		limit,
		query,
		onSnapshot,
		where
} from "firebase/firestore"
import { createContext, useEffect, useState } from "react"
export const TrialsContext = createContext([])

export default function TProvider() {
	const [array, setArray] = useState(TrialsContext)

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
		<TrialsContext.Provider value={[array, setArray]}>
			<div></div>
		</TrialsContext.Provider>
	)
}
