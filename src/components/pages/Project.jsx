import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../layout/Loading";
import styles from "./Project.module.css";

function Project() {
	const { id } = useParams();
	const [project, setProject] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			fetch(`http://localhost:5000/projects/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((resp) => resp.json())
				.then((data) => {
					setProject(data);
				})
				.catch((err) => console.log(err));
		}, 5000);
	}, [id]);

	return <>{project.name ? <p>{project.name}</p> : <Loading />}</>;
}

export default Project;
