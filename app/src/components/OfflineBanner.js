import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useNetworkStatus } from '../hooks/useNetworkStatus';

/**
 * OfflineBanner component that displays a non-intrusive warning message
 * at the top of the interface whenever network connection drops out.
 * @returns {JSX.Element|null} The rendered warning banner or null if online.
 */
export const OfflineBanner = () => {
    const isOnline = useNetworkStatus();

    if (isOnline) return null;

    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>
                ⚠️ Offline Mode Active — Updates will sync automatically when online
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: '#e74c3c',
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 40,
        zIndex: 9999,
        elevation: 10,
    },
    bannerText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});