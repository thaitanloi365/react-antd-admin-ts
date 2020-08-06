import {IConfig} from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  define: {
    ENV: 'staging',
    VERSION: process.env.GIT_TAG || 'v1.0.0',
    LAST_UPDATE: process.env.LAST_UPDATE || 1594350213,
    BASE_API_URL: 'https://api-staging.sipscience.com',
    WS_URL: 'wss://api-staging.sipscience.com/ws',
    STRIPE_PUBLIC_KEY: 'pk_test_APpF1yNsEr2AJtXCKqT6yIRT004VR4ZNTO',
    GOOGLE_MAPS_KEY: 'AIzaSyCHy12YAUgj8tq_wJcDKmnIBwkwbLoC9kg',
    OMNIVORE_API_KEY: '06768a0a90cc4092918be3f205947f22',
    TEST_LOCATION_ID: 'TA7GyX5c',
  },
};

export default config;
