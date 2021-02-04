import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chatfeed.jsx';
import LoginForm from './components/loginForm.jsx';

import './App.css';



const App = () => {
    if (!localStorage.getItem('username')) return (
        <LoginForm />
    )
    return (
        <div>    
            <ChatEngine 
                height="100vh"
                projectID="ea1bfee3-83f7-4001-a9b9-8895085546c4"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )
}
export default App;