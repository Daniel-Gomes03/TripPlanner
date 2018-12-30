import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    wrapperTrip: {
        backgroundColor: 'white',
        paddingTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },
    image: {
        backgroundColor: 'pink',
        height: 144,
        marginBottom: 6
    },
    price: {
        position: 'absolute',
        top: 144-16,
        right: 32,
        textAlign: 'right',
        backgroundColor: '#00428E',
        paddingBottom: 4,
        paddingTop: 4,
        paddingLeft: 5,
        paddingRight: 5,
        color: 'white',
        fontWeight: 'bold'
    },

});

export default styles