import React from "react";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/Events/EventList";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

const HomePage = ({ events }) => {
	return (
		<div>
			<Head>
				<title>NextJS Events</title>
				<meta name="description" content="Find a lot of great events that allow you to evolve..." />
			</Head>
			<NewsletterRegistration />
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
