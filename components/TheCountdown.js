import { useEffect, useState } from 'react';

export default function TheCountdown() {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  useEffect(() => {
    // Set the date we're counting down to
    const countDownDate = new Date('Jun 10, 2022 00:00:00').getTime();

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
    <span className="text-red-600">
      Release in: {days < 10 ? '0' : ''}
      {days}:{hours < 10 ? '0' : ''}
      {hours}:{minutes < 10 ? '0' : ''}
      {minutes}:{seconds < 10 ? '0' : ''}
      {seconds}
    </span>
  );
}
