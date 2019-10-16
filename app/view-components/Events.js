import React, { useEffect } from 'react';

const Events = () => {
  useEffect(() => {document.title = `SpaceX Historical Events`});
  return (
    <div className="view-events">
      <h3>Historical Events</h3>
    </div>
  )
}

export default Events;