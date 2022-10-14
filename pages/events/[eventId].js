import React from "react";
import { getFeaturedEvents, getEventById } from "../../helpers/api-util";
import EventSummary from "../../components/EventDetail/event-summary";
import EventLogistics from "../../components/EventDetail/event-logistics";
import EventContent from "../../components/EventDetail/event-content";
import Head from "next/head";
import Comments from "../../components/input/comments";

const EventDetailPage = ({ event }) => {
	if (!event) {
		return (
			<>
				<div className="center">
					<p>Loading...</p>
				</div>
			</>
		);
	}

	return (
		<>
			<Head>
				<title>{event.title}</title>
				<meta name="description" content={event.description} />
			</Head>
			<EventSummary title={event.title} />
			<EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</>
	);
};

export async function getStaticProps(context) {
	const eventId = context.params.eventId;
	const event = await getEventById(eventId);
	return {
		props: {
			event,
		},
		revalidate: 30,
	};
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents();
	const paths = events.map((event) => {
		return {
			params: {
				eventId: event.id,
			},
		};
	});

	return {
		paths,
		fallback: true,
	};
}

export default EventDetailPage;
