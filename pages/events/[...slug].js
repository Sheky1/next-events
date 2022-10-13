import React from "react";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/Events/EventList";
import ResultsTitle from "../../components/Events/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/ErrorAlert";

const FilteredEventsPage = ({ hasError, events, filterDate }) => {
	if (hasError) {
		return (
			<>
				<ErrorAlert>
					<p>Invalid filter. Adjust the values!</p>
				</ErrorAlert>
				<div className="center">
					<Button link={"/events"}>Show All Events</Button>
				</div>
			</>
		);
	}

	if (!events || events.length === 0) {
		return (
			<>
				<ErrorAlert>
					<p>No events found for the chosen filter</p>
				</ErrorAlert>
				<div className="center">
					<Button link={"/events"}>Show All Events</Button>
				</div>
			</>
		);
	}

	const date = new Date(filterDate.year, filterDate.month - 1);

	return (
		<>
			<ResultsTitle date={date} />
			<EventList events={events} />
		</>
	);
};

export async function getServerSideProps(context) {
	const { params } = context;

	const filterData = params.slug;

	const filteredYear = filterData[0];
	const filteredMonth = filterData[1];

	const numYear = +filteredYear;
	const numMonth = +filteredMonth;

	if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
		return {
			props: { hasError: true },
			// notFound: true,
			// redirect: {
			// 	destination: "/error"
			// }
		};
	}

	const filteredEvents = await getFilteredEvents({ year: numYear, month: numMonth });

	return {
		props: {
			events: filteredEvents,
			filterDate: {
				year: numYear,
				month: numMonth,
			},
		},
	};
}

export default FilteredEventsPage;
