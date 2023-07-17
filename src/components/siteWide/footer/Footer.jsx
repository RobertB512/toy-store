import React from "react";

import toyList from "../../../toyList";

import "./footer.css"

export default function Footer() {
	return (
		<footer className="text-bg-dark">
			<>
				<h3>Image attributions</h3>
				<ul>
					<li>
						Train illustration by{" "}
						<a href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=155133">
							OpenClipart-Vectors
						</a>{" "}
						from{" "}
						<a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=155133">
							Pixabay
						</a>
					</li>
					{toyList.map(toy => (
						<li key={toy.id}>
							{" "}
							{toy.toyTitle} image by{" "}
							<a href={toy.toyImg.imgSourceCreatorUrl}>
								{toy.toyImg.imgSourceCreator}
							</a>{" "}
							from{" "}
							<a href={toy.toyImg.imgSourceSiteUrl}>
								{toy.toyImg.imgSourceSite}
							</a>
						</li>
					))}
				</ul>
			</>
		</footer>
	);
}
