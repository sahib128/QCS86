import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './gc.css';

const GroupChat = () => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [justSentMessage, setJustSentMessage] = useState(false); // State to track if a new message was just sent
  const messagesEndRef = useRef(null);

  // Fetch chat messages from the server
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3000/myapp/getchat');
      const sortedMessages = response.data.sort(
        (a, b) => new Date(a.date_time) - new Date(b.date_time)  // Sorting messages by date
      );
      setMessages(sortedMessages);
    } catch (error) {
      console.error('Error fetching messages:', error.message);
    }
  };

  // Fetch user data from the server
  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/myapp/getuser', { withCredentials: true });
      setUser(response.data);
    } catch (err) {
      console.error('Error fetching user:', err.message);
      alert('Failed to load user data. Please try again.');
    }
  };

  // Send a message
  const sendMessage = async () => {
    if (!message.trim()) return;  // Prevent sending empty messages

    try {
      const response = await axios.post('http://localhost:3000/myapp/sendmsg', {
        sender_id: user.id,
        text: message,
      });

      setMessage('');  // Clear message input
      setJustSentMessage(true);  // Set the flag to indicate that a new message was sent
      fetchMessages();  // Reload messages after sending
    } catch (error) {
      console.error('Error sending message:', error.message);
      alert('Failed to send message. Please try again.');
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();  // Send message on Enter key press
    }
  };

  // Scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect for fetching initial user data
  useEffect(() => {
    fetchUser();
  }, []);  // Empty dependency array ensures this runs only once

  // useEffect for setting up the interval to fetch new messages every 2 seconds
  useEffect(() => {
    // Fetch messages initially
    fetchMessages();

    // Set up interval to fetch messages every 2 seconds
    const intervalId = setInterval(() => {
      fetchMessages();
    }, 2000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);  // Empty dependency array ensures this runs only once on mount

  // useEffect for auto-scrolling only after a new message is sent
  useEffect(() => {
    // Only scroll to bottom if the user has just sent a message
    if (justSentMessage) {
      scrollToBottom();
      setJustSentMessage(false); // Reset the flag after scrolling
    }
  }, [messages, justSentMessage]);  // Run this effect when messages change or if justSentMessage flag changes

  // Toggle the add menu visibility
  const handleAddMenuToggle = () => {
    setShowAddMenu(!showAddMenu);
  };

  return (
    <div className="chat-container">
      {/* Fixed Header */}
      <div className="chat-header">
        <h3>Group Chat: QCS86</h3>
      </div>

      {/* Messages Section */}
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            className={`message ${msg.sender_id === user?.id ? 'sent' : 'received'}`}
            key={index}
          >
            {/* Conditionally render sender's name */}
            {msg.sender_id !== user?.id && (
              <span className="sender">
                {msg.sender_name}:
              </span>
            )}
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Fixed Footer */}
      <div className="message-input">
        <button className="add-button" onClick={handleAddMenuToggle}>
          +
        </button>
        {showAddMenu && (
          <div className="add-menu">
            <button>Add Image</button>
            <button>Add Voice Note</button>
          </div>
        )}

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={handleKeyDown}  // Add onKeyDown event listener
        />
        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default GroupChat;
