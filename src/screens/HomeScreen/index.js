import React, { Component } from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    Image, 
    TouchableWithoutFeedback,
} from 'react-native';

import assets from './assets';
import styles from './styles';

class HomeScreen extends Component{
    static navigationOptions = {
        header: null
    }
    state = {
        show: true
    }
    handleCounter = () => {
        this.setState({
            show: !this.state.show
        })
    }
    render(){
        return(
            <ImageBackground 
                source={assets.background}
                imageStyle={{ resizeMode: 'stretch' }}
                style={styles.Background}
            >
                <View style={styles.WrapperLogoTripPlanner}>
                    <Image source={assets.tripplanner} />
                </View>
                <View style={styles.WrapperLogoDevPleno}>
                    <Image source={assets.devpleno} />
                </View>
                {
                    !this.state.show ? 
                    <TouchableWithoutFeedback onPress={this.handleCounter}>
                        <View style={styles.ButtonBackground}>
                            <Text style={styles.ButtonText}>
                                COMEÇAR 
                            </Text>
                        </View>
                    </TouchableWithoutFeedback> 
                    :
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Trips')}>
                        <View style={styles.ButtonEmptyStateBackground}>
                            <Image source={assets.Pin} style={styles.Pin}/>
                            <Text style={styles.ButtonEmptyStateText}>
                                Vamos planejar sua primeira viagem?
                            </Text>
                            <Image source={assets.arrow} style={styles.Arrow}/>
                        </View>
                </TouchableWithoutFeedback>
                }
            </ImageBackground>
        )
    }
}
export default HomeScreen