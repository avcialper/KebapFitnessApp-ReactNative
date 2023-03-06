import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'

const MemberSign = ({navigation}) => {

    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)
    const [age, setAge] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState(null)

    function handleSubmit(){

        if( !name || !surname || !age || !phoneNumber) {
            Alert.alert('kebap-fitness-salonu','Bilgiler boş bırakılamaz!')
            return
        }
            
        
        const user = {
            name,
            surname,
            age,
            phoneNumber
        }

        navigation.navigate('MemberResult',{user})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>kebap-fitness-salonu</Text>
            <Input
                label='Ad'
                placeholder='Adınızı giriniz...'
                onChangeText={setName}
                numaric={false}
            />
            <Input
                label='Soyad'
                placeholder='Soyadınızı giriniz...'
                onChangeText={setSurname}
                numaric={false}
            />
            <Input
                label='Yaş'
                placeholder='Yaşınızı giriniz...'
                onChangeText={setAge}
                numaric={true}
            />
            <Input
                label='Telefon Numarası'
                placeholder='Telefon numaranızı giriniz...'
                onChangeText={setPhoneNumber}
                numaric={true}
            />
            <Button text='Kaydı Tamamla' onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#182937',
        paddingVertical: 40
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#25fedf'
    }
})

export default MemberSign