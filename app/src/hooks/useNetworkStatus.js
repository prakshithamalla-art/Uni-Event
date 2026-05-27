import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

/**
 * Custom React hook that monitors network connectivity states.
 * Combines network connection status and active internet reachability.
 * @returns {boolean} True if the device is fully online and reachable, false otherwise.
 */
export const useNetworkStatus = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            // Secure validation: True only if connected and internet is reachable
            const online = state.isConnected === true && state.isInternetReachable === true;
            setIsOnline(online);
        });
        return () => unsubscribe();
    }, []);

    return isOnline;
};