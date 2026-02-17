const axios = require('axios');

async function run() {
  const jobs = [];

  for (let i = 1; i <= 200; i++) {
    jobs.push(
      axios.post('http://localhost:3000/api/requests', {
        passengerId: i,
        originLat: 19.07,
        originLng: 72.87,
        destLat: 19.08,
        destLng: 72.86,
        seatCount: 1,
        luggageUnits: 1,
        detourTolerance: 5
      }).catch(() => {})
    );
  }

  await Promise.all(jobs);
  console.log("200 concurrent bookings sent");
}

run();
