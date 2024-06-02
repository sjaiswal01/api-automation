import { test, expect } from '@playwright/test';
import { environmentConstants } from '../test-data/environmentURL';
import exp from 'constants';

test("Verify total number of currency and 'GBP' in the response body",async({request})=>{
  const response = await request.get(environmentConstants.APIBaseUrl_OP1);
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  const conversion_rates = await responseBody.conversion_rates;
  
  // Verifying the number of currency rates
  const numberOfCurrencies = Object.keys(conversion_rates).length;
  expect(numberOfCurrencies).toBe(162);

  // Verifying if 'GBP' is present in the conversion rates
  expect(conversion_rates).toHaveProperty('GBP');
  
})
