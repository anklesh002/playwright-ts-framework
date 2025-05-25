import test, { expect } from '@playwright/test';
import request from 'supertest';
import logger from '../../utils/logUtil';

test('User API Test', { tag: ['@CoreRegression', '@UserFeature' ] }, async () => {
  logger.info('Starting User API Test');
  logger.info('Making GET request to fetch user data');
  // Make a GET request to the user API
  logger.info('Requesting user data from https://jsonplaceholder.typicode.com/users/1');
  logger.info('Expecting response status 200');
  logger.info('Expecting user name to be "Leanne Graham"');
  logger.info('----------------------------------------');
  const res = await request('https://jsonplaceholder.typicode.com')
    .get('/users/1')
    .expect(200);
  logger.info('Received response from user API');
  logger.info('Response status:', res.status);
  logger.info('Response body:', res.body);
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('id', 1);
  expect(res.body).toHaveProperty('name');
  expect(res.body.name).toBe('Leanne Graham');
  logger.info('User API Test completed successfully');
  logger.info('Test finished');
  logger.info('----------------------------------------');
  await test.step('Close the test', async () => {
    logger.info('Closing the test');
  }
  );
  logger.info('Test closed');
  await test.step('End of User API Test', async () => {
    logger.info('End of User API Test');
  })
});