import React, { useState } from 'react';
import axios from 'axios';

const WhatsAppAPI = {
    baseURL: 'https://api.whatsapp.com/v1/',
    token: 'SEU_TOKEN_AQUI',
};

const WhatsApp = () => {
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [response, setResponse] = useState(null);

    const sendMessage = async () => {
        try {
            const response = await axios.post(
                `${WhatsAppAPI.baseURL}messages`,
                {
                    to: phoneNumber,
                    body: message,
                },
                {
                    headers: {
                        Authorization: `Bearer ${WhatsAppAPI.token}`,
                    },
                },
            );
            setResponse(response.data);
        } catch (error) {
            setResponse(error.response.data);
        }
    };

    return (
        <div>
            <h1>WhatsApp Integration</h1>
            <input
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button onClick={sendMessage}>Send</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
};

export default WhatsApp;
