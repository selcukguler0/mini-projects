import {useState} from "react";

export default function EventKeycodes() {
	const [initial, setInitial] = useState(true);
	const [key, setKey] = useState("");
	const [keyCode, setKeyCode] = useState("");
	const [code, setCode] = useState("");

	if (typeof window !== "undefined") {
		window.addEventListener("keydown", function (e) {
			setInitial(false);
			setKey(e.key);
			setKeyCode(e.keyCode);
			setCode(e.code);
		});
	}

	if (initial) {
		return (
			<div
				style={{
					height: "100vh",
					width: "100vw",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "1rem",
					backgroundColor: "#FFFAFF",
				}}>
				<div
					style={{
						marginTop: "0.5rem",
						width: "fit-content",
						height: "75px",
						padding: "1rem",
						border: "1px solid #161B33",
						boxShadow: " 1px 1px 3px rgb(0 0 0 / 50%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#474973",
						fontWeight: "bold",
					}}>
					Press any key to see the keycode and code
				</div>
			</div>
		);
	}
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "1rem",
				backgroundColor: "#FFFAFF",
			}}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}>
				<span style={{ color: "#A69CAC" }}>event.key</span>
				<div
					style={{
						marginTop: "0.5rem",
						width: "150px",
						height: "75px",
						border: "1px solid #161B33",
						boxShadow: " 1px 1px 3px rgb(0 0 0 / 50%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#474973",
						fontWeight: "bold",
					}}>
					{key}
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}>
				<span style={{ color: "#A69CAC" }}>event.keyCode</span>
				<div
					style={{
						marginTop: "0.5rem",
						width: "150px",
						height: "75px",
						border: "1px solid #161B33",
						boxShadow: " 1px 1px 3px rgb(0 0 0 / 50%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#474973",
						fontWeight: "bold",
					}}>
					{keyCode}
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}>
				<span style={{ color: "#A69CAC" }}>event.code</span>
				<div
					style={{
						marginTop: "0.5rem",
						width: "150px",
						height: "75px",
						border: "1px solid #161B33",
						boxShadow: " 1px 1px 3px rgb(0 0 0 / 50%)",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#474973",
						fontWeight: "bold",
					}}>
					{code}
				</div>
			</div>
		</div>
	);
}
