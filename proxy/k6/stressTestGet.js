import http from 'k6/http';
export let options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s', // iterations per second, i.e. 1000 RPS
      duration: '60s', // duration the iterations will attempt to run for
      preAllocatedVUs: 1000, // how large the initial pool of VUs would be (match the rps)
      maxVUs: 2500, // if the preAllocatedVUs are not enough, we can initialize more
      //gracefulStop: '600s',
    },
  },
};
export default function () {
  http.get('http://localhost:3000/?prod=9990000');
}