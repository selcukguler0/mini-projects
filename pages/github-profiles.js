import { useState } from "react";
import { notification } from "antd";


import { Avatar, Button, Card, Input } from "antd";
const { Meta } = Card;

const converted = {
	".card": {
		maxWidth: "340px",
		margin: "auto",
		overflowY: "auto",
		position: "relative",
		zIndex: 1,
		overflowX: "hidden",
		backgroundColor: "white",
		display: "flex",
		transition: "0.3s",
		flexDirection: "column",
		borderRadius: "10px",
		boxShadow: "0 0 0 8px rgba(255, 255, 255, 0.2)",
	},
	'.card[data-state="#about"]': { height: "450px" },
	'.card[data-state="#about"] .card-main': { paddingTop: "0" },
	'.card[data-state="#contact"]': { height: "430px" },
	'.card[data-state="#experience"]': { height: "550px" },
	".card.is-active .card-header": { height: "80px" },
	".card.is-active .card-cover": { height: "100px", top: "-50px" },
	".card.is-active .card-avatar": {
		transform: "none",
		left: "20px",
		width: "50px",
		height: "50px",
		bottom: "10px",
	},
	".card.is-active .card-fullname,\n.card.is-active .card-jobtitle": {
		left: "86px",
		transform: "none",
	},
	".card.is-active .card-fullname": { bottom: "18px", fontSize: "19px" },
	".card.is-active .card-jobtitle": {
		bottom: "16px",
		letterSpacing: "1px",
		fontSize: "10px",
	},
	".card-header": {
		position: "relative",
		display: "flex",
		height: "200px",
		flexShrink: 0,
		width: "100%",
		transition: "0.3s",
	},
	".card-header *": { transition: "0.3s" },
	".card-cover": {
		width: "100%",
		height: ["100%", "160px"],
		position: "absolute",
		top: "-20%",
		left: "0",
		willChange: "top",
		backgroundSize: "cover",
		backgroundPosition: "center",
		filter: "blur(30px)",
		transform: "scale(1.2)",
		transition: "0.5s",
	},
	".card-avatar": {
		width: "100px",
		height: "100px",
		boxShadow: "0 8px 8px rgba(0, 0, 0, 0.2)",
		borderRadius: "50%",
		OObjectPosition: "center",
		objectPosition: "center",
		OObjectFit: "cover",
		objectFit: "cover",
		position: "absolute",
		bottom: "0",
		left: "50%",
		transform: "translateX(-50%) translateY(-64px)",
	},
	".card-fullname": {
		position: "absolute",
		bottom: "0",
		fontSize: "22px",
		fontWeight: 700,
		textAlign: "center",
		whiteSpace: "nowrap",
		transform: "translateY(-10px) translateX(-50%)",
		left: "50%",
	},
	".card-jobtitle": {
		position: "absolute",
		bottom: "0",
		fontSize: "11px",
		whiteSpace: "nowrap",
		fontWeight: 500,
		opacity: 0.7,
		textTransform: "uppercase",
		letterSpacing: "1.5px",
		margin: "0",
		left: "50%",
		transform: "translateX(-50%) translateY(-7px)",
	},
	".card-main": {
		position: "relative",
		flex: 1,
		display: "flex",
		paddingTop: "10px",
		flexDirection: "column",
	},
	".card-subtitle": { fontWeight: 700, fontSize: "13px", marginBottom: "8px" },
	".card-content": { padding: "20px" },
	".card-desc": {
		lineHeight: 1.6,
		color: "#636b6f",
		fontSize: "14px",
		margin: "0",
		fontWeight: 400,
		fontFamily: '"DM Sans", sans-serif',
	},
	".card-social": {
		display: "flex",
		alignItems: "center",
		padding: "0 20px",
		marginBottom: "30px",
	},
	".card-social svg": {
		fill: "#a5b5ce",
		width: "16px",
		display: "block",
		transition: "0.3s",
	},
	".card-social a": {
		color: "#8797a1",
		height: "32px",
		width: "32px",
		borderRadius: ["50%", "50%"],
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "0.3s",
		backgroundColor: "rgba(93, 133, 193, 0.05)",
		marginRight: "10px",
	},
	".card-social a:hover svg": { fill: "#637faa" },
	".card-social a:last-child": { marginRight: "0" },
	".card-buttons": {
		display: "flex",
		backgroundColor: "#fff",
		marginTop: "auto",
		position: "sticky",
		bottom: "0",
		left: "0",
	},
	".card-buttons button": {
		flex: "1 1 auto",
		WebkitUserSelect: "none",
		MozUserSelect: "none",
		msUserSelect: "none",
		userSelect: "none",
		background: "0",
		fontSize: "13px",
		border: "0",
		padding: "15px 5px",
		cursor: "pointer",
		color: "#5c5c6d",
		transition: "0.3s",
		fontFamily: '"Jost", sans-serif',
		fontWeight: 500,
		outline: "0",
		borderBottom: "3px solid transparent",
	},
	".card-buttons button.is-active, .card-buttons button:hover": {
		color: "#2b2c48",
		borderBottom: "3px solid #8a84ff",
		background:
			"linear-gradient(to bottom, rgba(127, 199, 231, 0) 0%, rgba(207, 204, 255, 0.2) 44%, rgba(211, 226, 255, 0.4) 100%)",
	},
	".card-section": { display: "none" },
	".card-section.is-active": {
		display: "block",
		WebkitAnimation: "fadeIn 0.6s both",
		animation: "fadeIn 0.6s both",
	},
	"@-webkit-keyframes fadeIn": {
		"0%": { opacity: 0, transform: "translatey(40px)" },
		"100%": { opacity: 1 },
	},
	"@keyframes fadeIn": {
		"0%": { opacity: 0, transform: "translatey(40px)" },
		"100%": { opacity: 1 },
	},
	".card-timeline": { marginTop: "30px", position: "relative" },
	".card-timeline:after": {
		background:
			"linear-gradient(to top, rgba(134, 214, 243, 0) 0%, #516acc 100%)",
		content: ['""', '""'],
		left: "42px",
		width: "2px",
		top: "0",
		height: "100%",
		position: "absolute",
	},
	".card-item": {
		position: "relative",
		paddingLeft: "60px",
		paddingRight: "20px",
		paddingBottom: "30px",
		zIndex: 1,
	},
	".card-item:last-child": { paddingBottom: "5px" },
	".card-item:after": {
		content: "attr(data-year)",
		width: ["10px", "8px"],
		position: "absolute",
		top: "0",
		left: "37px",
		height: "8px",
		lineHeight: 0.6,
		border: "2px solid #fff",
		fontSize: "11px",
		textIndent: "-35px",
		borderRadius: "50%",
		color: "rgba(134, 134, 134, 0.7)",
		background: "linear-gradient(to bottom, #a0aee3 0%, #516acc 100%)",
	},
	".card-item-title": {
		fontWeight: 500,
		fontSize: "14px",
		marginBottom: "5px",
	},
	".card-item-desc": {
		fontSize: "13px",
		color: "#6f6f7b",
		lineHeight: 1.5,
		fontFamily: '"DM Sans", sans-serif',
	},
	".card-contact-wrapper": { marginTop: "20px" },
	".card-contact": {
		display: "flex",
		alignItems: "center",
		fontSize: "13px",
		color: "#6f6f7b",
		fontFamily: '"DM Sans", sans-serif',
		lineHeight: 1.6,
		cursor: "pointer",
	},
	".card-contact + .card-contact": { marginTop: "16px" },
	".card-contact svg": {
		flexShrink: 0,
		width: "30px",
		minHeight: "34px",
		marginRight: "12px",
		transition: "0.3s",
		paddingRight: "12px",
		borderRight: "1px solid #dfe2ec",
	},
	".contact-me": {
		border: "0",
		outline: "none",
		background:
			"linear-gradient(to right, rgba(83, 200, 239, 0.8) 0%, rgba(81, 106, 204, 0.8) 96%)",
		boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)",
		color: "#fff",
		padding: "12px 16px",
		width: "100%",
		borderRadius: "5px",
		marginTop: "25px",
		cursor: "pointer",
		fontSize: "14px",
		fontWeight: 500,
		fontFamily: '"Jost", sans-serif',
		transition: "0.3s",
	},
};

export default function GithubProfiles() {
	const [profile, setProfile] = useState([]);
	const [user, setUser] = useState("");
	const [displayCard, setDisplayCard] = useState(false);
	const [error, setError] = useState(false);

	const openNotificationWithIcon = () => {
		notification["error"]({
			message: "User Not Found!",
		});
	};

	if (error) {
		setError(false);
		openNotificationWithIcon();
	}

	const search = (e) => {
		fetch(`https://api.github.com/users/${user}`)
			.then((res) => {
				if (res.status === 404) {
					setError(true);
				} else {
					res.json().then((data) => {
						setProfile(data);
						setDisplayCard(true);
						setError(false);
					});
				}
			})
	};
	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			<div>
				<Input
					style={{ width: "100%", marginBottom: 10 }}
					className="input"
					value={user}
					onChange={(e) => setUser(e.target.value)}
					placeholder="Search User..."
				/>
				<br />
				<Button type="primary" style={{ width: "100%", marginBottom: 10 }} onClick={search} danger>
					Search
				</Button>
			</div>
			{displayCard && (
				<Card
					style={{ width: "50%", minWidth: "350px" }}
					actions={[
						<span key={1}>Followers: {profile.followers}</span>,
						<span key={2}>Following: {profile.following}</span>,
						<span key={3}>Public Repos: {profile.public_repos}</span>,
					]}>
					<Meta
						avatar={<Avatar src={profile.avatar_url} />}
						title={profile.name}
						description={profile.bio || "No bio available"}
					/>
				</Card>
			)}
		</div>
	);
}
