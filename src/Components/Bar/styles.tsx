import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        zIndex: 1,
        backgroundColor: '#4A5859',
        color: '#fff',
        height: 86,
        borderRadius: 6,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    expenses: {
        height: 86,
        backgroundColor: '#C83E4D',
        justifyContent: 'flex-end',
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 6,
    },
    investment: {
        height: 86,
        backgroundColor: '#F4D6CC',
        justifyContent: 'flex-end',
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 6,
    },
    free: {
        alignSelf: 'flex-end',
        paddingBottom: 12,
    }
})