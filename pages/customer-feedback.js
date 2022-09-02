import { Button } from "antd"
import { Helmet } from "react-helmet"
import { useState } from "react"

import styles from "../styles/CustomerFeedback.module.css"

export default function CustomerFeedback() {
	const [feedback, setFeedback] = useState(null);
	const voteHandler = () => {
		setFeedback("Thank you for your feedback!");	
	}
	if (feedback) {
		return (
			<>
				<Helmet>
					<body style="height:100vh;background:wheat;display:flex;justify-content:center;align-items:center;"></body>
				</Helmet>
				<div style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}>
					<h1 style={{ textAlign: "center" }}>We got your feedback <br/>thank you 😊</h1>
				</div>
			</>
		)
	}
	return (
		<>
			<Helmet>
				<body style="height:100vh;background:wheat;display:flex;justify-content:center;align-items:center;"></body>
			</Helmet>
			<div style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}>
				<h2 style={{textAlign: "center"}}>How satisfied are you with our
					customer support performance?</h2>
				<div style={{ display: "flex", gap: "10px", justifyContent: "space-evenly", marginTop: "20px", width: "90%" }}>
					<div onClick={voteHandler} className={styles.vote}>
						<span>Unhappy</span>
						<span style={{ fontSize: "50px" }}>🙁</span>
					</div>
					<div onClick={voteHandler} className={styles.vote}>
						<span>Neutral</span>
						<span style={{ fontSize: "50px" }}>😐</span>
					</div>
					<div onClick={voteHandler} className={styles.vote}>
						<span>Satisfied</span>
						<span style={{ fontSize: "50px" }}>😃</span>
					</div>
				</div>
			</div>
		</>
	)
}
