import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableWithoutFeedback} from 'react-native';


export default function AddMarker(latitude, longitude){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const coords= Object.values(latitude)

    async function SendMarker () {

        const json = {
            latitude: coords[0],
            longitude: coords[1],
            title: title,
            description: description,
        };
      
        const headerOptions={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF',
            },
            body: JSON.stringify(json),
        };

        await fetch('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
        .then(
            function(response) {
                if(response.status === 200){
                    alert('Localização adicionada com sucesso!')
                }
                if (response.status !== 200) {
                    console.log(response.status);
                    return;
                }
            }
        )
        .catch(function(err) {
            console.log(err);
        });
    }
    
    return(
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder=' Titulo' value={title} onChangeText={setTitle}/>
                <TextInput style={styles.input} placeholder=' Descrição' value={description} onChangeText={setDescription}/>
                <TouchableWithoutFeedback onPress={() => SendMarker()}>
                    <Text style={styles.sendButton}>Enviar</Text>
                </TouchableWithoutFeedback>
            </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
    },
    input: {
        marginBottom: 5,
        width: 300,
        height: 35,
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: 'gray',
        borderRadius: 5,
    },
    sendButton: {
        width:300,
        height: 35,
        backgroundColor: '#00213B',
        borderRadius: 5,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: '#fff'
    },
});