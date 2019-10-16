import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Pager } from "@progress/kendo-react-data-tools";
import './EventList.scss';

const EventList = (props) => {
  const total = props.eventData.length;
  const [pageState, setPageState] = useState({ skip: 0,take: 10 });
  const { skip, take, ...rest } = pageState;

  const handlePageChange = event => {
    const { skip, take } = event;
    setPageState({ ...pageState, skip: skip, take: take });
  };

  const subEvents = props.eventData.slice(skip, (skip+take))
  const listItems = subEvents.map(event => {
    return <li className="event-post" key={event.id + event.title}>
      <Link className='text_link' to={`/events/${event.id}`}>{event.title}</Link>
    </li>
  })

  return (
    <div className={`view-events`}>
      <h3>Historical Events</h3>
      <ul className="event-list">
        {listItems}
      </ul>
      <Pager skip={skip} take={take} total={total}
        buttonCount={2} type={`numeric`} onPageChange={handlePageChange} />
    </div>
  )
}

export default EventList;

EventList.propTypes = {
  eventData: PropTypes.array
};