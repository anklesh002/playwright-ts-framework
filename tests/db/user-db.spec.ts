import { test } from '../../utils/hooks';
import { expect } from '@playwright/test';
import { query } from '../../utils/dbClient';
import logger from '../../utils/logUtil';

test('DB Test - Fetch User', { tag: ['@Regression', '@UserFeature' ] }, async () => {
  logger.info('Starting DB Test - Fetch User');
  logger.info('Executing query to fetch user with ID 1');
  const res = await query('SELECT name FROM users WHERE id = $1', [1]);
  logger.info('Query executed successfully');
  logger.info('Expecting user name to be "John"');
  expect(res.rows[0].name).toBe('John');
  logger.info('User name fetched successfully');
  logger.info('DB Test - Fetch User completed successfully');
  logger.info('Test finished');
  logger.info('----------------------------------------');
}) ;