import React from "react";
import EventItem from "./EventItem";
import classes from "./event-list.module.css";

const EventList = ({ events }) => {
	return (
		<ul className={classes.list}>
			{events.map((event) => {
				return (
					<EventItem
						key={event.id}
						id={event.id}
						title={event.title}
						location={event.location}
						date={event.date}
						image={event.image}
					/>
				);
			})}
		</ul>
	);
};

export default EventList;
