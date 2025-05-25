import test, { expect } from '@playwright/test';
import request from 'supertest';

test('User API Test', { tag: ['@CoreRegression', '@UserFeature' ] }, async () => {
  const res = await request('https://jsonplaceholder.typicode.com')
    .get('/users/1')
    .expect(200);
  expect(res.body.name).toBe('Leanne Graham');
});