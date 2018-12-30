import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

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
                    <Text>Mapa</Text>
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