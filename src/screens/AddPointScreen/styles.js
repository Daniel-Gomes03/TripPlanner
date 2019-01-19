import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    item: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 16
    },
    wrapperInfo: {
        flex: 1
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 18
    },
    wrapperItemPrice: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 16
    },
    itemPrice: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: '#00428E'
    },
    wrapper: {
        flex: 1
    },
    header: {
        height: 192,
        backgroundColor: 'gray'
    },
    backButtom: {
        position: 'absolute',
        top: 23,
        left: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    tripName: {
        position: 'absolute',
        left: 16,
        bottom: 16,
    },
    tripPrice: {
        position: 'absolute',
        bottom: 16,
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
    input: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        marginBottom: 14
    },
    btn: {
        backgroundColor: '#E5E5E5',
        padding: 20,
        marginBottom: 14
    },

})

export default styles