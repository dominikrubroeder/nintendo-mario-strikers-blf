import React, { useEffect, useState } from 'react';

const ReleaseCountdown: React.FC = () => {
  const [days, setDays] = useState<null | number>(null);
  const [hours, setHours] = useState<null | number>(null);
  const [minutes, setMinutes] = useState<null | number>(null);
  const [seconds, setSeconds] = useState<null | number>(null);

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date('Jun 10, 2023 00:00:00').getTime();

    // Update the count down every 1 second
    const releaseCountdown = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(releaseCountdown);

        // Change release countdown to RELEASE TODAY
      }
    }, 1000);
  }, [days, hours, minutes, seconds]);

  return (
    <span className="text-accent text-themed themed:text-white">
      Release in: {days && days < 10 ? '0' : ''}
      {days}:{hours && hours < 10 ? '0' : ''}
      {hours}:{minutes && minutes < 10 ? '0' : ''}
      {minutes}:{seconds && seconds < 10 ? '0' : ''}
      {seconds}
    </span>
  );
};

export default ReleaseCountdown;
