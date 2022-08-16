import React from "react";
import PageWrapper from "../../Components/PageWrapper";
import MaxWidth from "../../Components/MaxWidth";
import Loader from "../../Components/Loader";
import DetailCard from "../../Components/Cards/DetailCard";

import { cleanUp } from "../../store/actions/index";
import * as actions from "../../store/actions/cardDetails";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

function CardDetails() {
	const { slug } = useParams();
	const pageID = "cardDetails";
	const dispatch = useDispatch();
	const selector = useSelector((state) => state);
	React.useEffect(() => {
		console.log("slug", slug);
		if (slug) dispatch(actions.fetchCardDetails(slug));
	}, [slug, dispatch]);

	React.useEffect(() => {
		return () => {
			console.log("cleanUp", slug);
			dispatch(cleanUp());
		};
	}, [slug, dispatch]);
	return (
		<PageWrapper componentID={pageID}>
			<MaxWidth componentID={pageID} maxWidth={"lg"}>
				{selector.magicCards.loading && !selector.magicCards.cardDetails ? (
					<Loader componentID={pageID} />
				) : (
					<DetailCard componentID={pageID} details={selector.magicCards.cardDetails} lang={""} />
				)}
			</MaxWidth>
		</PageWrapper>
	);
}
export default CardDetails;
