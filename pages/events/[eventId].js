import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/EventDetail/event-summary";
import EventLogistics from "../../components/EventDetail/event-logistics";
import EventContent from "../../components/EventDetail/event-content";
import ErrorAlert from "../../components/UI/ErrorAlert";
import Button from "../../components/UI/Button";

const EventDetailPage = () => {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return (
			<>
				<ErrorAlert>
					<p>No Event Found!</p>
				</ErrorAlert>
				<div className="center">
					<Button link={"/events"}>Show All Events</Button>
				</div>
			</>
		);
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
};

export default EventDetailPage;
