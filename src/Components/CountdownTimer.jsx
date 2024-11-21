import React, { useState, useEffect } from 'react';
import '../../Content/sevenSegment.ttf';

const CountdownTimer = ({headerText}) => {

  // Get the current time in milliseconds
  const NOW_IN_MS = Date.now();
  // Get the target date in milliseconds
  const TARGET_DATE_IN_MS = new Date(2025, 0, 20, 0, 0, 0, 0); // Jan 20, 2025 0 hour

  // Initial time in SECONDS
  const initialTime = (TARGET_DATE_IN_MS - NOW_IN_MS) / 1000;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log('Countdown complete!');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (60 * 60 * 24));
  const hours = Math.floor((timeRemaining / (60 * 60)) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  let formattedSeconds = (seconds.toString().padStart(2, '0'));
  let formattedMinutes = (minutes.toString().padStart(2, '0'));
  let formattedHours = (hours.toString().padStart(2, '0'));
  let formattedDays = (days.toString().padStart(2, '0'));

  return (
      <section>
        <table className="countDownTable">
          <tr className="timerTitle">
            <td colSpan="7">{headerText}</td>
          </tr>
          <tr className="timerTableNumbers">
            <td className="clock">
              {`${formattedDays}`}
            </td>
            <td className="clock">
              :
            </td>
            <td className="clock">
              {`${formattedHours}`}
            </td>
            <td className="clock">
              :
            </td>
            <td className="clock">
              {`${formattedMinutes}`}
            </td>
            <td className="clock">
              :
            </td>

            <td className="timerCountountSeconds, clock">
              {`${formattedSeconds}`}
            </td>
          </tr>
          <tr className="timerTableHeaders">
            <th>
              Days
            </th>
            <th>
            </th>
            <th>
              Hrs
            </th>
            <th>
            </th>
            <th>
              Mins
            </th>
            <th>
            </th>
            <th>
              Secs
            </th>
          </tr>
        </table>
      </section>
  );
};

export default CountdownTimer;
