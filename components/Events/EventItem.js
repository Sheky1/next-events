import React from "react";
import Button from "../UI/Button";
import classes from "./event-item.module.css";
import DateIcon from "../Icons/date-icon";
import ArrowRightIcon from "../Icons/arrow-right-icon";
import AddressIcon from "../Icons/address-icon";

const EventItem = ({ id, title, image, date, location }) => {
	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		dat: "numeric",
		month: "long",
		year: "numeric",
	});
	const formattedAddress = location.replace(", ", "\n");

	return (
		<li className={classes.item}>
			<img src={"/" + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<DateIcon />
						<time>{formattedDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={`/events/${id}`}>
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
