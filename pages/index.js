import Head from "next/head";
import styles from "../styles/Home.module.css";
import projects from "../public/projects";
import Link from "next/link";
import { Helmet } from "react-helmet";

export default function Home() {
	if (!styles) {
		return <div>Loading</div>
	}
	return (
		<div>
			<Head>
				<title>Mini Projects</title>
				<meta name="description" content="Next.js - React | Mini Projects" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Helmet>
				<body className={styles.body} />
			</Helmet>
			<h1 style={{ textAlign: "center", marginTop: "50px", color: "#fff842" }}>
				{`< Mini Projects >`}
			</h1>
			<table className={styles.container}>
				<thead>
					<tr>
						<th style={{ color: "#4dc3fa" }}>Id</th>
						<th style={{ color: "#4dc3fa" }}>Project Name</th>
						<th style={{ color: "#4dc3fa" }}>Link</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project, i) => (
						<tr key={i}>
							<td style={{ width: "100px" }} data-th="Id">
								{project.id}
							</td>
							<td style={{ width: "400px" }} data-th="roject Name">
								{project.name}
							</td>
							<td style={{ width: "200px" }} data-th="Link">
								<Link href={project.link}>
									<a style={{ color: "white" }}>Live Demo</a>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
