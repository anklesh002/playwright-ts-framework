import { test } from '../../utils/hooks';
import { expect } from '@playwright/test';
import { query } from '../../utils/dbClient';

test('DB Test - Fetch User', { tag: ['@Regression', '@UserFeature' ] }, async () => {
  const result = await query('SELECT name FROM users WHERE id = $1', [1]);
  expect(result.rows[0].name).toBe('John');
});