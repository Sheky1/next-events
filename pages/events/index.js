import React from "react";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/Events/EventList";
import EventsSearch from "../../components/Events/EventsSearch";
import { useRouter } from "next/router";

const AllEventsPage = ({ events }) => {
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};

	return (
		<div>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList events={events} />
		</div>
	);
};

export async function getStaticProps() {
	const events = await getAllEvents();

	return {
		props: {
			events,
		},
		revalidate: 60,
	};
}

export default AllEventsPage;
