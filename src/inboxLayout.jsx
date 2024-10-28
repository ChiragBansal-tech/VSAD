import React, { useState } from "react";
import inboxData from './Objects/InboxData'
const InboxLay = () => {
    const [emails, setEmails] = useState(inboxData);

    const toggleReadStatus = (id) => {
        const updatedEmails = emails.map((email) => {
            email.id === id ? {...email, read: !email.read } : email
        });
        setEmails(updatedEmails);
    };

    return(
        <div>
            <h2>Inbox</h2>
            <ul>
                {emails.map((email) => (
                    <li
                        key={email.id}
                        className={`p-4 border rounded-lg cursor-pointer flex justify-between items-center  hover:bg-gray-100 transition-colors ${email.read ? 'bg-gray-200' : 'bg-white' }`}
                        onClick={() => toggleReadStatus(email.id)}
                    >
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">{email.subject}</h3>
                            <p>{email.sender}</p>
                            <p className="text-sm text-gray-600">{email.message.slice(0,50)}...</p>
                        </div>
                        <button
                            className={`ml-4 px-4 py-2 text-sm rounded-lg ${email.read ? 'bg-blue-500 text-white' : 'bg-green-500 text-white' }`}
                        >
                            
                            {email.read ? 'Mark as unread' : 'Mark as read'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InboxLay;