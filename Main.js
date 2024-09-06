import React from 'react'
import { View, Text, StatusBar, Image, FlatList, StyleSheet, ScrollView} from 'react-native';
import MyMusicList from './component/music-list';

const MainComponent = () => {
      
    return (
        <>
            <StatusBar style="auto"/>
            <ScrollView style={{flex : 1, width: '100%'}}>
                <View style={{backgroundColor: '#023020', height: 'auto', justifyContent: 'space-between', display: 'flex', flexDirection:'row', alignItems:'center', paddingLeft: 30, paddingVertical: 5}}>
                    <View>
                        <Text style={{fontSize:25, fontWeight: 'bold', color: 'white'}}>iFumes: Music Player</Text>
                    </View>
                    <View>
                        <Image
                            style={{
                                resizeMode: 'contain',
                                height: 100,
                            }}
                            source={require('./assets/musicLogo.gif')}
                        />
                    </View>
                </View>
                <View style={{height: 'auto',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 100,
                    paddingVertical: 20
                    }}>
                    <Text style={{fontSize:16, color: 'red', fontWeight:'bold', borderBottomColor: 'red', borderBottomWidth: 2}}>Songs</Text>
                    <Text style={{fontSize:16}}>Artist</Text>
                    <Text style={{fontSize:16}}>Albums</Text>
                    <Text style={{fontSize:16}}>Folders</Text>
                </View>
                <MyMusicList/>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    borderBottomColor: 'rgba(2, 48, 32, 0.5)',
      borderBottomWidth: 1,
      padding: 10,
    //   marginVertical: 2,
      marginHorizontal: 10,
      flexDirection: 'row',


    },
    title: {
      fontSize: 18,
      fontWeight:'bold'
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
        flex: 1
    }
  });
export default MainComponent