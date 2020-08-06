import {IConfig} from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  define: {
    ENV: 'production',
    VERSION: process.env.GIT_TAG || 'v1.0.0',
    LAST_UPDATE: process.env.LAST_UPDATE || 1594350213,
    BASE_API_URL: 'https://api.sipscience.com',
    WS_URL: 'wss://api.sipscience.com/ws',
    STRIPE_PUBLIC_KEY: 'pk_live_H3LwYt7ChcPhzhHIQv8UVn7g00gRkKq170',
    GOOGLE_MAPS_KEY: 'AIzaSyCHy12YAUgj8tq_wJcDKmnIBwkwbLoC9kg',
    OMNIVORE_API_KEY: '3a01cc5779ef4e3784658607fc188719',
    TEST_LOCATION_ID: 'TA7GyX5c',
  },
};

export default config;
