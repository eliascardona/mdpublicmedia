import styles from "../../styles/cards.module.css"

export default function TrialCard({ Athlete, Pushs, Abs, Squats, Burpees, Period }) {
	return (
		<section>
			<div className={styles.cardBox}>
				<div className={styles.cardLy}>
					{/* row one */}
					<div className={styles.rone}>
						<strong>{Athlete} </strong>
					</div>
					{/* row two */}
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
					{/* row three */}
					<div className={styles.rthree}>
						<span>{Period} </span>
					</div>
					{/* end of rows */}
				</div>
			</div>
		</section>
	)
}
