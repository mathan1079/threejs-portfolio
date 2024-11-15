import React, { useState, useEffect } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';

const TimeSince = ({ dateString }) => {
  const [timeSince, setTimeSince] = useState('');

  useEffect(() => {
    const calculateTimeSince = () => {
      // Parse the ISO date string and format it to a "time since" format
      const date = parseISO(dateString);
      return formatDistanceToNow(date, { addSuffix: true });
    };

    // Update the initial timeSince value
    setTimeSince(calculateTimeSince());

    // Update every 1 minute to keep it current
    const intervalId = setInterval(() => {
      setTimeSince(calculateTimeSince());
    }, 60000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [dateString]);

  return <span>{timeSince}</span>;
};

export default TimeSince;
