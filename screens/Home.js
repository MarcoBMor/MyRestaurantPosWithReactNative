import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getToken } from '../services/authService';


const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            if (!token) {
                navigation.navigate('Login');
            }
        };

        checkAuth();
    }, []);

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
};

export default HomeScreen;
  