import React from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/Events/EventList";
import EventsSearch from "../../components/Events/EventsSearch";
import { useRouter } from "next/router";

const AllEventsPage = () => {
	const events = getAllEvents();
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

export default AllEventsPage;
