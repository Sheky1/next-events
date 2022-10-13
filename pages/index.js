import React from "react";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/Events/EventList";

const HomePage = ({ events }) => {
	return (
		<div>
			<EventList events={events} />
		</div>
	);
};

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: {
			events: featuredEvents,
		},
		revalidate: 1800,
	};
}

export default HomePage;
