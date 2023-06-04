import { useRouter } from "next/router"

export default function CustomNav() {
	const router = useRouter()

//	function goback() {
//		router.back()
//	}

	const navStyle = {
		height: '2.2em',
		lineHeight: '2.2em',
		fontSize: '1.3em',
		color: '#fff',
		backgroundColor: '#0a0a0a'
	}
	return (
		<div style={navStyle}>
			<span onClick={() => router.back()}>
				<ion-icon name="arrow-back-outline"></ion-icon>
			</span>
		</div>
	)	
}
