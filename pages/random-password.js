import { Button, Input, InputNumber, Checkbox, notification } from "antd"
import { useState, useRef } from "react"

import { HiClipboardCopy } from "react-icons/hi"
export default function RandomPassword() {
	const [password, setPassword] = useState("");
	const [length, setLength] = useState(10);
	const includeSymbols = useRef(false);
	const includeNumbers = useRef(false);
	const includeLowerCase = useRef(false);
	const includeUpperCase = useRef(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(password);
		if (password.length > 0) {
			notification.success({
				message: "Password Copied!",
				placement: "top",
			});
		} else {
			notification.error({
				message: "Please first generate a password!",
				placement: "top",
			});
		}
	}

	const generatePassword = () => {
		console.log(includeSymbols.current.state.checked);
		if (!includeSymbols.current.state.checked && !includeNumbers.current.state.checked && !includeLowerCase.current.state.checked && !includeUpperCase.current.state.checked) {
			notification.error({
				message: `Please select at least one option!`,
				placement: "top",
			});
		} else {
			var password = "";
			if (includeSymbols.current.state.checked) {
				var symbols = randomSymbol(length);
				password += symbols;
			}
			if (includeNumbers.current.state.checked) {
				var numbers = randomNumber(length);
				password += numbers;
			}
			if (includeLowerCase.current.state.checked) {
				var lowerCase = randomLower(length);
				password += lowerCase;
			}
			if (includeUpperCase.current.state.checked) {
				var upperCase = randomUpper(length);
				password += upperCase;
			}
			password = password.split('').sort(function () { return 0.5 - Math.random() }).join('').slice(0, length);
			setPassword(password);
		}

	}
	return (
		<div style={{
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		}}>
			<div style={{
				display: "flex",
				gap: 10,
				marginBottom: 10,
				width: "280px",
			}}>
				<div style={{ position: "relative" }}>
					<Input value={password} disabled />
					<HiClipboardCopy
						onClick={copyToClipboard}
						onMouseOver={(e) => e.target.style.cursor = "pointer"}
						style={{ position: "absolute", right: "1px", top: "3px" }}
						fontSize={"25px"}
						color={"#1890ff"} />
				</div>
				<Button onClick={generatePassword} type="primary">Generate</Button>
			</div>
			<div style={{
				display: "flex",
				flexDirection: "column",
				width: "280px",
				rowGap: 10,
			}}>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
					<label htmlFor="passL">Password Length:</label>
					<InputNumber id="passL" min={10} max={25} value={length} onChange={setLength} type="number" style={{ width: "60px" }} />
				</div>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
					<label htmlFor="includeSymbol">Include Symbols:</label>
					<Checkbox ref={includeSymbols} id="includeSymbol"></Checkbox>
				</div>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
					<label htmlFor="includeNumbers">Include Numbers:</label>
					<Checkbox ref={includeNumbers} id="includeNumbers"></Checkbox>
				</div>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
					<label htmlFor="includeLower">Include Lowercase:</label>
					<Checkbox ref={includeLowerCase} id="includeLower"></Checkbox>
				</div>
				<div style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}>
					<label htmlFor="includeUpper">Include Uppercase:</label>
					<Checkbox ref={includeUpperCase} id="includeUpper"></Checkbox>
				</div>
			</div>
		</div>
	)
}

function randomUpper(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}
function randomLower(length) {
	var result = '';
	var characters = 'abcdefghijklmnopqrstuvwxyz';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}
function randomNumber(length) {
	var result = '';
	var characters = '0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}
function randomSymbol(length) {
	var result = '';
	var characters = '.!@#$%&*()_+~|}{[]\?></-=';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() *
			charactersLength));
	}
	return result;
}