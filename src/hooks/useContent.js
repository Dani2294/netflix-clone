import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { URL, ENDPOINTS } from "../constants/endpoints";

export default function useContent() {
	//console.log(ENDPOINTS);
	const [data, setData] = useState({ movies: [], series: [] });

	useEffect(() => {
		ENDPOINTS.movies?.forEach((cat) => {
			axios
				.get(`${URL}${cat.url}`)
				.then(({ data }) => {
					setData((prevState) => {
						return {
							...prevState,
							movies: [
								...prevState.movies,
								{ id: uuidv4(), title: cat.title, slides: data.results },
							],
						};
					});
				})
				.catch((error) => {
					console.log(error.message);
				});
		});
		ENDPOINTS.series?.forEach((cat) => {
			axios
				.get(`${URL}${cat.url}`)
				.then(({ data }) => {
					setData((prevState) => {
						return {
							...prevState,
							series: [
								...prevState.series,
								{ id: uuidv4(), title: cat.title, slides: data.results },
							],
						};
					});
				})
				.catch((error) => {
					console.log(error.message);
				});
		});

		return () => null;
	}, []);
	return data;
}

// IS WORKING
/*
	useEffect(() => {
		ENDPOINTS.movies?.forEach((cat) => {
			axios
				.get(`${URL}${cat.url}`)
				.then(({ data }) => {
					setData((prevState) => {
						return {
							...prevState,
							moviesArr: [
								...prevState.moviesArr,
								{ title: cat.title, moviesData: data.results },
							],
						};
					});
				})
				.catch((error) => {
					console.log(error.message);
				});
		});
		ENDPOINTS.series?.forEach((cat) => {
			axios
				.get(`${URL}${cat.url}`)
				.then(({ data }) => {
					setData((prevState) => {
						return {
							...prevState,
							seriesArr: [
								...prevState.seriesArr,
								{ title: cat.title, seriesData: data.results },
							],
						};
					});
				})
				.catch((error) => {
					console.log(error.message);
				});
		});
	}, []);
*/

// IS ALSO WORKING
/* 
	if (category === "movies") {
			ENDPOINTS.movies?.forEach((cat) => {
				axios
					.get(`${URL}${cat.url}`)
					.then(({ data }) => {
						setData((prevState) => {
							return [
								...prevState,
								{ title: cat.title, moviesData: data.results },
							];
						});
					})
					.catch((error) => {
						console.log(error.message);
					});
			});
		}
*/
