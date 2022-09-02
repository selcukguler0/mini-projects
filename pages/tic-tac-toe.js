import Helmet from "react-helmet"
import { useState } from "react"

import styles from "../styles/TicTacToe.module.css"

const board = [
	["", "", ""],
	["", "", ""],
	["", "", ""],
];

export default function TicTacToe() {
	const [turn, setTurn] = useState("X");
	const [winner, setWinner] = useState(null);

	const condition = [
		[board[0][0], board[0][1], board[0][2]],
		[board[1][0], board[1][1], board[1][2]],
		[board[2][0], board[2][1], board[2][2]],
		[board[0][0], board[1][0], board[2][0]],
		[board[0][1], board[1][1], board[2][1]],
		[board[0][2], board[1][2], board[2][2]],
		[board[0][0], board[1][1], board[2][2]],
		[board[0][2], board[1][1], board[2][0]],
	];
	const setBoard = (row, col, e) => {
		if (e.target.innerHTML === "") {
			board[row][col] = turn;
			setTurn(turn === "X" ? "O" : "X");
			console.log(board);
			console.log("row", row, "col", col);
			e.target.innerHTML = turn
		}
		checkWinner();
	};
	const checkWinner = () => {
		condition.forEach((cond) => {
			console.log(cond);
			const a = cond[0];
			const b = cond[1];
			const c = cond[2];
			if (a === b && b === c && a !== "") {
				setWinner(board[a]);
				console.log("winner", board[a]);
				console.log(winner);
			}
		});
	};
	

	return (
		<>
			<Helmet>
				<body style="height:100vh;background:wheat;display:flex;justify-content:center;align-items:center;"></body>
			</Helmet>
			<div className={styles.board}>
				<h1 style={{ textAlign: "center" }}>Tic Tac Toe</h1>
				<h2 style={{ textAlign: "center",color: "blue" }}>{turn} Turn</h2>
				<div className={styles.row}>
					<div onClick={(e) => setBoard(0, 0, e)} className={styles.cell}></div>
					<div onClick={(e) => setBoard(0, 1, e)} className={styles.cell}></div>
					<div onClick={(e) => setBoard(0, 2, e)} className={styles.cell}></div>
				</div>
				<div className={styles.row}>
					<div onClick={(e) => setBoard(1, 0, e)} className={styles.cell}></div>
					<div onClick={(e) => setBoard(1, 1, e)} className={styles.cell}></div>
					<div onClick={(e) => setBoard(1, 2, e)} className={styles.cell}></div>
				</div>
				<div className={styles.row}>
					<div onClick={(e) => setBoard(2, 0, e)} className={styles.cell}></div>
					<div onClick={(e) => setBoard(2, 1, e)} className={styles.cell}></div>
					<div onClick={(e) => setBoard(2, 2, e)} className={styles.cell}></div>
				</div>

			</div>
		</>
	)
}
