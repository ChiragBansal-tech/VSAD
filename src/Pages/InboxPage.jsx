import React, { react } from 'react';
import MainLay from '../MainLayout';

import InboxChatLay from '../InboxChatLayout';

const Inbox = () => {
    
    return (
        <MainLay heading='Inbox'>
            <InboxChatLay />
        </MainLay>
    );
};

export default Inbox;
