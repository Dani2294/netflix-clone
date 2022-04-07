import React from "react";
import BrowseContainer from "../containers/browse";
import useContent from "../hooks/useContent";

export default function Browse() {
	const result = useContent();
	return (
		<>
			<BrowseContainer result={result} />
		</>
	);
}
