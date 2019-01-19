import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './styles';

class AddPointScreen extends Component{

    static navigationOptions = {
        header: null
    }
    state = {
        position: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        pointName: '',
        description: '',
        price: 0
    }

    renderItem = item => {
        return (
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.itemName}>{item.item.name}</Text>
                    <Text>{item.item.description}</Text>
                </View>
                <View style={styles.wrapperItemPrice}>
                    <Text style={styles.itemPrice}>{item.item.price}</Text>
                </View>
            </View>
        )
    }

    render () {

        const trip = {
            name: 'Eurotrip 2019',
            price: 'R$ 5000',
            places: [
                {id: '1', name: 'Amsterdan', description: 'Chegada', price: 'R$ 100', lat: 0, long: 0},
                {id: '2', name: 'Bruxelas', description: 'Hospedagem', price: 'R$ 100', lat: 0, long: 0}
            ]
        }

        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <MapView style={{flex: 1}} initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                        <Marker 
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}
                            onDragEnd={
                                (evt) => this.setState({ position: evt.nativeEvent.coordinate })
                            }
                            draggable
                        />
                    </MapView>
                    <View style={styles.backButtom}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../../assets/Arrow-Left-White.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.tripName}>{trip.name}</Text>
                    <Text style={styles.tripPrice}>{trip.price}</Text>
                </View>
                <TextInput style={styles.input} placeholder='Nome do ponto' onChangeText={ txt => this.setState({pointName: txt})} />
                <TextInput style={styles.input} placeholder='Descrição' onChangeText={ txt => this.setState({description: txt})} />
                <TextInput style={styles.input} placeholder='Preço' onChangeText={ txt => this.setState({price: txt})} />
                {/*<Text>{JSON.stringify(this.state)}</Text>*/}
                <TouchableOpacity style={styles.btn} >
                            <Text>Salvar ponto</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AddPointScreen