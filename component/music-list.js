import React from 'react'
import { View, Text, StatusBar, Image, FlatList, StyleSheet, ScrollView} from 'react-native';

const MyMusicList = () => {
    const musicList = [
        {
            id: '1',
            title: 'Museo',
            image: require("../assets/music-images/museo.jpg"),
            artist: 'Eliza Maturan'
        },
        {
            id: '2',
            title: 'Medyo Ako',
            image: require("../assets/music-images/medyo-ako.jpg"),
            artist: 'Juan Carlos'
        },
        {
            id: '3',
            title: 'dahan-dahan',
            image: require("../assets/music-images/dahan-dahan.jpg"),
            artist: 'Lola Amour'
        },
        {
            id: '4',
            title: 'Highschool',
            image: require("../assets/music-images/highschool.jpg"),
            artist: 'Shanti Dope'
        },
        {
            id: '5',
            title: 'Ikot',
            image: require("../assets/music-images/ikot.jpg"),
            artist: 'Over October'
        },
        {
            id: '6',
            title: 'Misteryoso',
            image: require("../assets/music-images/misteryoso.jpg"),
            artist: 'Cup of Joe'
        },
        {
            id: '7',
            title: 'Palagi',
            image: require("../assets/music-images/palagi.jpg"),
            artist: 'TJ Monterde'
        },
        {
            id: '8',
            title: 'Maksarili Malambing',
            image: require("../assets/music-images/makasarili-malambing.jpg"),
            artist: 'Kristina Dawn'
        },
        {
            id: '9',
            title: 'Moonlight',
            image: require("../assets/music-images/moonlight.jpg"),
            artist: 'SB19'
        },
        {
            id: '10',
            title: 'Pantropiko',
            image: require("../assets/music-images/pantropiko.png"),
            artist: 'Bini'
        },
    ];
    const Item = ({title, image, artist}) => (
        <View style={styles.item}>
            <View>
                {image && <Image source={image} style={styles.image} />}
            </View>
            <View style={{justifyContent: 'space-around'}}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{fontSize:15}}>Artist: {artist}</Text>   
            </View>
            <View style={styles.spacer}/>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Image source={require("../assets/music-images/play.png")} style={styles.playBtn}></Image>
            </View>
          
        </View>
      );
      
    return (
        <View>
            <FlatList data={musicList} renderItem={({item}) => <Item title={item.title} image={item.image} artist={item.artist} /> }
            keyExtractor={item => item.id}></FlatList>
        </View>
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
export default MyMusicList