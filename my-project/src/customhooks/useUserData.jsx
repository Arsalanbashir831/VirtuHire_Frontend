import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useUserData = () => {
    const [userData, setUserData] = useState(null); // State to store user data

    useEffect(() => {
        const token = localStorage.getItem('token');
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/v1/auth_user", {
                    headers: {
                        Authorization: `Token ${token}` // Include token in Authorization header
                    }
                });
              
                setUserData(response.data); // Set the user data in state
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        if (token) {
            fetchUserData(); // Fetch user data if token is available
        }

    }, []);
return userData
};

export default useUserData;
