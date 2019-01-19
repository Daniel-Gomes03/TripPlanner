import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';

import Trip from './Trip';
import styles from './styles';

class TripsScreen extends Component {
    
    static navigationOptions = {
        header: null
    }
    renderItem = item => {
        return <Trip onPress={() => this.props.navigation.navigate('Trip')} title={item.item.name} price={item.item.price} />
    }

    render () {

        const trips = [
            {id: '1', name: 'Eurotrip 2019', price: 'R$ 5000'},
            {id: '2', name: 'Atacama Expedition', price: 'R$ 3000'}
        ] 

        return (
            <View style={styles.wrapperTripsScreen}>
                <View style={styles.wrapperMap}>
                    <MapView 
                        style={{flex: 1}}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddTrip')}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 20,
                            padding: 10,
                        }}
                    >
                        <Image source={require('../../../assets/add.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapperList}>
                    <FlatList 
                        data={trips}
                        renderItem={this.renderItem}
                        horizontal
                        pagingEnabled
                        keyExtractor={ item => item.id }
                    />
                </View>
            </View>
        )
    }
}

export default TripsScreen