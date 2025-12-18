const API_KEY = 'b017633e2cb067ab687a3a99fde66180';
const BASE_CURRENCY = 'EUR'; // Free plans are  restricted to EUR

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

async function getExchangeRates() {
  try {
    const response = await fetch(`https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=${BASE_CURRENCY}`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
}

getExchangeRates();
