import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native';
import {AntDesign} from '@expo/vector-icons'


export default class FabButton extends Component {

    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation,{
            toValue,
            friction: 6,
            useNativeDriver: true //definindo useNativeDriver explicitamente para remover o aviso
        }).start();

        this.open = !this.open;
    }

    render(){

        const plusStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }
            ]
        }

        const deleteStyle = {
            transform: [
                {scale: this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }

        return(
            <View style={[styles.container, this.props.style]}>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, deleteStyle]}>
                        <AntDesign name='delete' size={25} color='#FFF'/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate('MapsAddMarker')}>
                    <Animated.View style={[styles.button, styles.submenu, plusStyle]}>
                        <AntDesign name='plus' size={25} color='#FFF'/>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu]}>
                        <AntDesign name='bars' size={28} color='#FFF'/>
                    </Animated.View>
                </TouchableWithoutFeedback>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        position: 'absolute',
    },
    button:{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#00213B',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        shadowOffset: {
        height: 10,
        }
    },
    menu: {
        backgroundColor: '#00213B',
    },
    submenu:{
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#00213B',
    }
});