import React, { useEffect, useState } from 'react'
import chat from './Objects/chats'
import { CheckIcon } from '@heroicons/react/24/outline';

const InboxChatLay = () => {
    const[searchQuery, setSearchQuery] = useState('');
    const[selectedChat, setSelectedChat] = useState(chat[0]);
    const[message, setMessage] = useState('');
    const[chatHistory, setChatHistory] = useState(() => {

        const savedChats = JSON.parse(localStorage.getItem(selectedChat.name));
        return savedChats ? savedChats : selectedChat.messages;
    });

    useEffect(() => {
        localStorage.setItem(selectedChat.name, JSON.stringify(chatHistory));
    }, [chatHistory, selectedChat.name]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSendMessage = () => {
        if(message.trim()){
            const newMessage = {
                text: message,
                timestamp: new Date().toLocaleTimeString(),
                sentByMe: true,
                read: false
            };
            setChatHistory((prev) => [...prev, newMessage]);
            setMessage('');
        }
    
    };
    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            handleSendMessage();
        }
    }
    const filterdChats = chat.filter((chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChatSelection = (selected) => {
        setSelectedChat(selected);
        const savedChats = JSON.parse(localStorage.getItem(selected.name));
        setChatHistory(savedChats ? savedChats : selected.messages);
    };

    return(
        <div className='grid grid-cols-[50%_110%] md:grid-cols-[25%_75%] lg:grid-cols-[25%_75%] '>
            <div className='h-[731px] md:h-[471px] lg:h-[635px] row-span-2  justify-center border-b-2 border-r-2 overflow-y-auto border-Metal20 '>
                <input 
                    type='text'
                    placeholder='Search chats...'
                    value={searchQuery}
                    onChange={handleSearchChange}   
                    className='w-full p-2 my-2 order text-xs md:text-sm lg:text-lg border-gray-300 rounded'
                />
                <div className='mt-4 '>
                    {filterdChats.map((chat, idx) => (
                        <div 
                            key={idx}
                            onClick={() => handleChatSelection(chat)}
                            className='flex items-center p-2 overflow-y hide-scrollbar border-b border-gray-200 cursor-pointer hover:bg-gray-100 text-xs md:text-sm lg:text-lg font-heading'
                        >
                            <img
                                src={chat.img}
                                className='h-10 w-10 rounded-full mr-3'
                            />
                            <div>
                                <div className='font-bold'>{chat.name}</div>
                                <div className='text-sm text-gray-600'>
                                    {chat.messages[chat.messages.length - 1].text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
            <div className='h-[670px] md:h-[420px] lg:h-[562px] col-start-2 overflow-y-auto bg-Metal20  hide-scrollbar'>
                <div className='fixed w-[50%] md:w-[52%] lg:w-[58%] flex flex-row h-[65px] p-3 m-5  border-2 bg-white rounded '>
                    <img
                        src={selectedChat.img}
                        className='h-10 w-10 rounded-full mr-3'
                    />
                    <h3>{selectedChat.name}</h3>
                </div>


                <div className='p-4 pt-[6rem] flex-1 '>
                    {chatHistory.length === 0 ? (
                        <div className='flex justify-center items-center h-full'>
                            <img
                                src={selectedChat.img}
                                className='h-20 w-20 rounded-full '
                            />
                        </div>
                    ): (
                        chatHistory.map((msg, idx) => (
                            <div className='flex flex-col pb-2'>
                                <div
                                    key={idx}
                                    className={`m-1 mb-2 bg-white rounded p-1 md:p-2 lg:p-3 w-[60%] ${msg.sentByMe ? 'ml-auto bg-green-200': 'mr-auto bg-white'}`}
                                >
                                    <div className='flex justify-between'>
                                        <span className='text-sm md:text-lg lg:text-lg'>{msg.text}</span>
                                    </div>
                                    
                                    {msg.sentByMe && (
                                        <div>
                                            <CheckIcon className={`h-4 w-4 ${msg.read ? 'text-blue-500': 'text-gray-400'}`} />
                                        </div>
                                    )}
                                </div>
                                <span className='text-sm md:text-sm lg:text-sm self-end'>{msg.timestamp}</span>
                            </div>
                        ))
                    )}
                </div>

                
            </div>
            <div className= ' bg-white p-2 md:p-2 lg:p-4 flex  col-start-2'>
                    <input
                        type='text'
                        value={message}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder='Write a message...'
                        className='flex-1 p-1 md:p-1 lg:p-2 w-full border border-gray-300 rounded mx-1 md:mx-1 lg:mx-2'
                    />
                </div>
        </div>
    );
};

export default InboxChatLay;