import { Progress } from "antd";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

import styles from "../styles/PasswordStrength.module.css";

function PasswordStrength() {
	const [password, setPassword] = useState("");
	const [bar, setBar] = useState(0);
	const [color, setColor] = useState("red");
	useEffect(() => {
		var bar = 0;
		if (password.length > 8) {
			bar += 20;
		} 
		if (password.match(/[a-z]+/)) {
			console.log("lowercase");
			bar += 20;
		}
		if (password.match(/[A-Z]+/)) {
			bar += 20;
		} 
		if (password.match(/[0-9]+/)) {
			bar += 20;
		} 
		if (password.match(/[$@#&!./]+/)) {
			bar += 20;
		} 
		if (bar < 0) {
			bar = 0;
		}
		if (bar > 100) {
			bar = 100;
		}
		setBar(bar);
		if (typeof window !== "undefined") {
			document.querySelector(".ant-progress-text").innerHTML = bar + "%";
			if (bar > 35) {
				document.querySelector(".ant-progress-text").style.color = "blue";
				setColor("blue");
			}
			if (bar === 100) {
				console.log("bar",bar);
				document.querySelector(".ant-progress-text").style.color = "green";
				setColor("green");
			}
		}
	}, [password]);
	
	if (typeof window !== "undefined") {
		if (bar<35) {
			if (document.querySelector(".ant-progress-text")) {
				document.querySelector(".ant-progress-text").style.color = "red";
			}
		}
	}

	return (
		<>
			<Helmet>
				<body style="height:100vh;background:wheat;display:flex;justify-content:center;align-items:center;"></body>
			</Helmet>
			<div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
				<input
					className={styles.input}
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder="Check Password Strength" />
				
				<Progress
					type="circle"
					strokeColor={{
						'0%': color,
						'100%': color,
					}}
					percent={bar}
				/>
			</div>
		</>
	)
}

export default PasswordStrength;