import { StyleSheet } from "react-native";

const MyStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    lightContainer: {
        backgroundColor: '#fff',
    },
    darkContainer: {
        backgroundColor: '#333',
    },
    lightText: {
        color: '#000',
    },
    darkText: {
        color: '#fff',
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(2, 48, 32, 0.5)',
        padding: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    lightItem: {
        backgroundColor: '#fff',
    },
    darkItem: {
        backgroundColor: '#444',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 15,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    playBtn: {
        width: 20,
        height: 20,
    },
    spacer: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingVertical: 5,
        alignItems: 'center',
    },
    // lightHeader: {
    //     backgroundColor: '#023020',
    // },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    logo: {
        resizeMode: 'contain',
        height: 100,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 100,
        paddingVertical: 20,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: 2,
    },
    lightTabText: {
        color: 'red',
        borderBottomColor: 'red',
    },
    darkTabText: {
        color: 'orange',
        borderBottomColor: 'orange',
    },
    selectedImage: {
        marginTop: 10,
        width: '90%',
        height: 500,
        resizeMode: 'contain',
    },
    details: {
        marginHorizontal: 50,
        marginVertical: 20,
    },
    progressBar: {
        height: 5,
        backgroundColor: 'grey',
        width: '95%',
        marginHorizontal: 10,
        marginTop: 20,
    },
    progress: {
        height: '100%',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 100,
        paddingVertical: 20,
    },
    controlIcon: {
        width: 30,
        height: 30,
    },
    playPauseIcon: {
        width: 70,
        height: 70,
    },
    lightIcon: {
        tintColor: '#023020',
    },
    darkIcon: {
        tintColor: '#fff',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    backIcon: {
        height: 20,
        width: 30,
        marginRight: 5,
    },
    backText: {
        fontSize: 16,
        color: '#000',
    },
});

export default MyStyle;