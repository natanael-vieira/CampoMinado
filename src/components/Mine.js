import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View styles={styles.core} />
            <View styles={styles.line} />
            <View styles={[styles.line, { transform: [{ rotate: '45deg' }] } ]} />
            <View styles={[styles.line, { transform: [{ rotate: '90deg' }] } ]} />
            <View styles={[styles.line, { transform: [{ rotate: '135deg' }] } ]} />
        </View>
    )
}