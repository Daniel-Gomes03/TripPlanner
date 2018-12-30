import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    Background: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    WrapperLogoTripPlanner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    WrapperLogoDevPleno: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32
    },
    ButtonBackground: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 18,
    },
    Pin: {
        marginTop: 16,
        marginBottom: 16
    },
    Arrow: {
        marginTop: 16
    },
    ButtonEmptyStateBackground: {
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16,
        alignItems: 'center',
    },
    ButtonEmptyStateText: {
        textAlign: 'center',
        fontSize: 18,
        width: 220,
    },
});