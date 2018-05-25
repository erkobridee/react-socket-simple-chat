import dayjs from 'dayjs';
import uuidv4 from 'uuid/v4';

import { welcomeMessage } from 'chat/constants';

//----------------------------------------------------------------------------//

export const processMessage = message => ({
  id: uuidv4(),
  time: dayjs().format(),
  ...message
});

export const getInitialMessage = () => processMessage(welcomeMessage);

//----------------------------------------------------------------------------//

export default {
  processMessage,
  getInitialMessage
}
