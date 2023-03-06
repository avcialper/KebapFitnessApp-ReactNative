import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './Input.style'

const Input = ({ label, placeholder, onChangeText, numaric}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    keyboardType={numaric ? 'numeric' : 'default'}
                />
            </View>
        </View>
    )
}

export default Input