# LaunchDarkly Svelte SDK Example

This project demonstrates the usage of the `@launchdarkly/svelte-client-sdk`. It showcases how to conditionally render content based on feature flags using the `LDFlag` component.

## Installing Dependencies and Setting Environment Variables

First, install the project dependencies:

```bash
yarn install
```

Next, create a `.env` file in the root of the project and add your LaunchDarkly client-side ID, flag key. You can obtain these from any LaunchDarkly project/environment you choose.

```bash
PUBLIC_LD_CLIENT_ID=your-client-side-id
PUBLIC_LD_FLAG_KEY=your-flag-key

# Used for Playwright automated tests, you can default this to false
PUBLIC_AUTOMATED_TEST=false
```

Notes:

1. The flags specified by `PUBLIC_LD_FLAG_KEY` must be boolean flag.
2. The `PUBLIC_AUTOMATED_TEST` should be set to `true` only when running Playwright automated tests and `false` otherwise.

## Running the Project

To run the project, use the following command:

```bash
yarn dev
```

This will start the development server. Open your browser and navigate to the provided URL to see the example in action. The box will change its background color based on the value of the feature flag specified by `PUBLIC_LD_FLAG_KEY`.

## Running Automated Playwright Tests

To run the automated Playwright tests, first ensure that the development server is running (you can follow the instructions [above](#running-the-project)).

Then, use the following command to run the tests:

```bash
yarn test
```

This will set the `PUBLIC_AUTOMATED_TEST` environment variable and execute the Playwright tests configured for the project. Make sure the development server is running before executing the tests.

### Role of `LDProvider`

The `LDProvider` component is used to initialize the LaunchDarkly client and provide the feature flag context to the rest of the application. It requires a `clientID` and a `context` object. The `context` object typically contains information about the user or environment, which LaunchDarkly uses to determine the state of feature flags.

In this example, the `LDProvider` wraps the entire application, ensuring that all child components have access to the feature flag data. The `slot="initializing"` is used to display a loading message while the flags are being fetched.
