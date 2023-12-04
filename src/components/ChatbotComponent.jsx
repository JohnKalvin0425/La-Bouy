import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot'; 

const ChatBotComponent = () => {
  const [userInput, setUserInput] = useState('');

  const steps = [
    {
      id: 'intro',
      message: 'Hello! Where do you want to go?',
      trigger: 'user-input',
    },
    {
      id: 'user-input',
      user: true,
      trigger: (value) => {
        setUserInput(value);  
        return 'response';
      },
    },
    {
      id: 'response',
      message: 'Great! We have list of hotels that is near {previousValue}',
      trigger: 'end',
    },

    {
        id: 'end',
        message: 'Hillside beach Resort, Ocean 101 and Dahon Villas',
        trigger: 'and',
    },

    {
      id: 'and',
      message: 'If you have any more questions, feel free to ask. Have a great day!',
      end: true,
    },
  ];

  return (
    <ChatBot
      steps={steps}
      floating={true}
    />
  );
};

export default ChatBotComponent;