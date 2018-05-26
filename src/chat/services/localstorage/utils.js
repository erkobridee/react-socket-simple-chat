// https://lodash.com/docs/4.17.10#throttle
import throttle from 'lodash/throttle';

import { saveState } from './service';

// defines the minimal interval time to execute its inner function
const THROTTLE_DELAY = 1000; // ms - 1s

/*
  receives the redux store.subscribe and the giver date from its state to
  persist in the web browser localStorage
*/
export const subscribe = ( subscribe, getData ) => {
  if( subscribe && getData ) {
    subscribe(
      throttle(
        () => saveState( getData() ) , THROTTLE_DELAY
      )
    );
  }
};
