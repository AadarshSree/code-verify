import {ORIGIN_TYPE} from './config';
import {startFor} from './contentUtils.js';

startFor(ORIGIN_TYPE.ANY, {
  checkLoggedInFromCookie: false,
  excludedPathnames: [],
});
