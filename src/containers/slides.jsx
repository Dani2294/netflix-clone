import React from "react";
import { Slides } from "../components";

export default function SlidesContainer({ content, myList, handleMyList }) {
	const truncateText = (text) => {
		return text.substring(0, 100) + (text.length > 100 ? "..." : "");
	};
	return (
		<>
			{myList.length > 0 && (
				<Slides>
					<Slides.Title>My List</Slides.Title>
					<Slides.Row>
						{myList.map((movie) => (
							<Slides.Card key={movie.id}>
								<Slides.Image
									src={`https://image.tmdb.org/t/p/w300${
										movie.poster_path || movie.backdrop_path
									}`}
									alt={
										movie.title ||
										movie.original_title ||
										movie.name ||
										movie.original_name
									}
								/>
								<Slides.Meta>
									<Slides.MetaHeader>
										<Slides.MetaTitle>
											{movie.title ||
												movie.original_title ||
												movie.name ||
												movie.original_name}
										</Slides.MetaTitle>
										<Slides.MetaButtons>
											{myList.includes(movie) ? (
												<Slides.MetaButton
													onClick={() => handleMyList("remove", movie)}
													rotate="45deg">
													<img
														src="/assets/icons/add.png"
														alt="remove from my list"
													/>
												</Slides.MetaButton>
											) : (
												<Slides.MetaButton
													onClick={() => handleMyList("add", movie)}>
													<img
														src="/assets/icons/add.png"
														alt="add to my list"
													/>
												</Slides.MetaButton>
											)}
											<Slides.MetaButton rotate="90deg">
												<img
													src="/assets/icons/chevron-right.png"
													alt="see more"
												/>
											</Slides.MetaButton>
										</Slides.MetaButtons>
									</Slides.MetaHeader>
									<Slides.MetaDescription>
										{truncateText(movie.overview)}
									</Slides.MetaDescription>
									<Slides.MetaRecommendation>
										Recommended at {(Math.ceil(movie.vote_average) * 100) / 10}%
									</Slides.MetaRecommendation>
								</Slides.Meta>
							</Slides.Card>
						))}
					</Slides.Row>
				</Slides>
			)}
			{content.map((item) => (
				<Slides key={item.id}>
					<Slides.Title>{item.title}</Slides.Title>
					<Slides.Row>
						{item.slides.map((movie) => (
							<Slides.Card key={movie.id}>
								<Slides.Image
									src={`https://image.tmdb.org/t/p/w300${
										movie.poster_path || movie.backdrop_path
									}`}
									alt={
										movie.title ||
										movie.original_title ||
										movie.name ||
										movie.original_name
									}
								/>
								<Slides.Meta>
									<Slides.MetaHeader>
										<Slides.MetaTitle>
											{movie.title ||
												movie.original_title ||
												movie.name ||
												movie.original_name}
										</Slides.MetaTitle>
										<Slides.MetaButtons>
											{myList.includes(movie) ? (
												<Slides.MetaButton
													onClick={() => handleMyList("remove", movie)}
													rotate="45deg">
													<img
														src="/assets/icons/add.png"
														alt="remove from my list"
													/>
												</Slides.MetaButton>
											) : (
												<Slides.MetaButton
													onClick={() => handleMyList("add", movie)}>
													<img
														src="/assets/icons/add.png"
														alt="add to my list"
													/>
												</Slides.MetaButton>
											)}
											<Slides.MetaButton rotate="90deg">
												<img
													src="/assets/icons/chevron-right.png"
													alt="see more"
												/>
											</Slides.MetaButton>
										</Slides.MetaButtons>
									</Slides.MetaHeader>
									<Slides.MetaDescription>
										{truncateText(movie.overview)}
									</Slides.MetaDescription>
									<Slides.MetaRecommendation>
										Recommended at {(Math.ceil(movie.vote_average) * 100) / 10}%
									</Slides.MetaRecommendation>
								</Slides.Meta>
							</Slides.Card>
						))}
					</Slides.Row>
				</Slides>
			))}
		</>
	);
}
