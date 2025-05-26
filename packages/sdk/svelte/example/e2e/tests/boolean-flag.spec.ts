import { test, expect } from '@playwright/test';

const clientId = process.env.PUBLIC_LD_CLIENT_ID ?? 'fake-client-id';
const flagKey = process.env.PUBLIC_LD_FLAG_KEY ?? 'fake-flag-key';

test('shows lightyellow box when flag variation is false', async ({ page }) => {
	await page.route(
		`https://clientsdk.launchdarkly.com/sdk/evalx/${clientId}/contexts/**`,
		(route) => {
			route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify({
					[flagKey]: {
						flagVersion: 1,
						trackEvents: false,
						value: false, // flag variation is false
						variation: 1,
						version: 1
					}
				})
			});
		}
	);

	page.goto('/');

	// shows loading spinner/message
	expect(page.getByText('loading flags...')).toBeVisible();

	// after loading, shows lightyellow box
	const box = page.getByText(/this box is lightyellow when flag is off/);
	await expect(box).toBeVisible();
	await expect(box).toHaveCSS('--bg-color', 'lightyellow');
});

test('shows lightblue box when flag variation is true', async ({ page }) => {
	await page.route(
		`https://clientsdk.launchdarkly.com/sdk/evalx/${clientId}/contexts/**`,
		(route) => {
			route.fulfill({
				status: 200,
				contentType: 'application/json',
				body: JSON.stringify({
					[flagKey]: {
						flagVersion: 1,
						trackEvents: false,
						value: true, // flag variation is true
						variation: 1,
						version: 1
					}
				})
			});
		}
	);
	
	page.goto('/');

	// shows loading spinner/message
	expect(page.getByText('loading flags...')).toBeVisible();

	// after loading, shows ligthblue box
	const box = page.getByText(/this box is lightblue when flag is on/);
	await expect(box).toBeVisible();
	await expect(box).toHaveCSS('--bg-color', 'lightblue');
});
