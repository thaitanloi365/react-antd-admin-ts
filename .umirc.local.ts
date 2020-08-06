import {IConfig} from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  define: {
    ENV: 'local',
    VERSION: process.env.GIT_TAG || 'v1.0.0',
    LAST_UPDATE: process.env.LAST_UPDATE || 1594350213,
    BASE_API_URL: 'http://localhost:8080',
    WS_URL: 'ws://localhost:8080/ws',
    STRIPE_PUBLIC_KEY: 'pk_test_Yd30lEd921H8MRyPVTfdFdUP00b9ubAVNH',
    GOOGLE_MAPS_KEY: 'AIzaSyCHy12YAUgj8tq_wJcDKmnIBwkwbLoC9kg',
    OMNIVORE_API_KEY: '06768a0a90cc4092918be3f205947f22',
    TEST_LOCATION_ID: 'TA7GyX5c',
  },
};

export default config;
