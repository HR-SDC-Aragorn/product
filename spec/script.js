import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // scenarios: {
  //   constant_request_rate: {
  //     executor: 'constant-arrival-rate',
  //     rate: 100,
  //     timeUnit: '1s', // 1000 iterations per second, i.e. 1000 RPS
  //     duration: '30s',
  //     preAllocatedVUs: 100, // how large the initial pool of VUs would be
  //     maxVUs: 200,
  //   }
  // },

  stages: [
    { duration: '1m', target: 100 }, // below normal load
    { duration: '3m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '3m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '3m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '3m', target: 400 },
    { duration: '5m', target: 0 }, // scale down. Recovery stage.
  ],
};

const productIDs = [39, 80, 380, 880, 1680, 8900, 25000, 88000, 210000, 980000, 1000000];

const getProductID = () => {
  let random = Math.floor(Math.random() * 11)
  return productIDs[random];
}

export default function () {
  const BASE_URL = 'http://localhost:8080'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/products/`, null],
    ['GET', `${BASE_URL}/products/${getProductID()}`, null],
    ['GET', `${BASE_URL}/products/${getProductID()}/related`, null],
    ['GET', `${BASE_URL}/products/${getProductID()}/styles`, null],
  ]);

  // check(responses, {
  //   'status was 200': (r) => r.status == 200,
  //   'transaction time OK': (r) => r.timings.duration < 200
  // });

  sleep(1);
}
