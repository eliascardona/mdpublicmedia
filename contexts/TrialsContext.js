import { createContext, useEffect, useState } from "react"
import { firestore } from "../firebase/base"
import {
		collection,
		limit,
		query,
		onSnapshot,
		where
} from "firebase/firestore"
export const TrialsContext = createContext([])

export default function TProvider({ children }) {
	const [array, setArray] = useState([])

	useEffect(()=> {
		const q = query(
			collection(firestore, "pruebas-fisicas"),
			where("errores", "==", "1"),
			limit(7)
		)
		const unsub = onSnapshot(q,
			(snapshot) => {
				const A = []
				snapshot.forEach(info => {
					A.push(info.data())
				})
				setArray(A)
			},
			(error) => {
				console.log("The following error have its origin on DB")
				console.log(error, error.code)
			}
		)
		return unsub
	}, [])

	return (
		<TrialsContext.Provider value={[array, setArray]}>
			<div>
				{children}
			</div>
		</TrialsContext.Provider>
	)
}
