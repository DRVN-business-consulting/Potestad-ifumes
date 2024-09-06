import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import { useTheme } from './src/context/ThemeContext';

const musicList = [
    {
        id: '1',
        title: 'Museo',
        image: require("./assets/music-images/museo.jpg"),
        artist: 'Eliza Maturan'
    },
    {
        id: '2',
        title: 'Medyo Ako',
        image: require("./assets/music-images/medyo-ako.jpg"),
        artist: 'Juan Carlos'
    },
    {
        id: '3',
        title: 'dahan-dahan',
        image: require("./assets/music-images/dahan-dahan.jpg"),
        artist: 'Lola Amour'
    },
    {
        id: '4',
        title: 'Highschool',
        image: require("./assets/music-images/highschool.jpg"),
        artist: 'Shanti Dope'
    },
    {
        id: '5',
        title: 'Ikot',
        image: require("./assets/music-images/ikot.jpg"),
        artist: 'Over October'
    },
    {
        id: '6',
        title: 'Misteryoso',
        image: require("./assets/music-images/misteryoso.jpg"),
        artist: 'Cup of Joe'
    },
    {
        id: '7',
        title: 'Palagi',
        image: require("./assets/music-images/palagi.jpg"),
        artist: 'TJ Monterde'
    },
    {
        id: '8',
        title: 'Maksarili Malambing',
        image: require("./assets/music-images/makasarili-malambing.jpg"),
        artist: 'Kristina Dawn'
    },
    {
        id: '9',
        title: 'Moonlight',
        image: require("./assets/music-images/moonlight.jpg"),
        artist: 'SB19'
    },
    {
        id: '10',
        title: 'Pantropiko',
        image: require("./assets/music-images/pantropiko.png"),
        artist: 'Bini'
    },
];
const Item = ({item, onPress}) => (
    <TouchableOpacity style={styles.item} onPress={onPress}>
        <View>
            {item.image && <Image source={item.image} style={styles.image} />}
        </View>
        <View style={{justifyContent: 'space-around'}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={{fontSize:15}}>Artist: {item.artist}</Text>   
        </View>
        <View style={styles.spacer}/>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={require("./assets/music-images/play.png")} style={styles.playBtn}></Image>
        </View>
    </TouchableOpacity>
);

const MainComponent = () => {   
    const [selectedId, setSelectedId] = React.useState(0);
    const [selectedTitle, setSelectedTitle] = React.useState('');
    const [selectedArtist, setSelectedArtist] = React.useState('');
    const [selectedImage, setSelectedImage] = React.useState('');
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(prev => {
                    const newProgress = Math.min(prev + 1, 100); 
                    return newProgress;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const handlePlayPausePress = () => {
        setIsPlaying(!isPlaying);
    }

    const renderItem = ({item}) => {
        return(
            <Item
                item={item}
                onPress={()=> {
                    setSelectedId(item.id);
                    setSelectedArtist(item.artist);
                    setSelectedImage(item.image);
                    setSelectedTitle(item.title);
                    setProgress(0);
                    setIsPlaying(true);
                }}
            />
        );
    } 
    return (
        <>
            <StatusBar style="auto"/>
            
            {(selectedId === 0) ?

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
                    <FlatList 
                        data={musicList} 
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selectedId}>
                    </FlatList>
                </ScrollView>
                : 
                <View style={{ flex:1 , backgroundColor: '#023020'}}>
                    <Button title="Back" onPress={() => {setSelectedId(0); }}></Button>
                    <View style={{ flex: 1 }}>
                        {/* <Text>{selectedArtist}</Text> */}
                            <View style={{alignItems: 'center'}}>
                                {selectedImage && (<Image source={selectedImage} style={{width: '90%', height:500, resizeMode:'contain'}}></Image>)}
                             

                            </View>
                            <View style={{marginHorizontal: 20}}>
                                <Text style={{fontWeight:'bold', fontSize: 30, color: '#fff'}}>{selectedTitle}</Text>
                                <Text style={{fontSize: 16, marginTop:4, color: '#fff'}}>Artist: {selectedArtist}</Text>
                            </View>
                            <View style={{height: 5, backgroundColor: 'grey', width: '95%', marginHorizontal:10, marginTop: 20}}>
                                <View
                                    style={{
                                        height: '100%',
                                        backgroundColor: 'black',
                                        width: `${progress}%`
                                    }}
                                    />
                            </View>
                            <View style={{ flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    paddingHorizontal: 100,
                                    paddingVertical: 20}}
                            >
                                <Image
                                    source={require('./assets/music-images/prev-icon.png')}
                                    style={{ width: 30, height: 30, tintColor: 'white'}} 
                                />
                                <TouchableOpacity onPress={handlePlayPausePress}>
                                    <Image
                                        source={
                                            isPlaying
                                            ? require('./assets/music-images/pause-icon-2.png')
                                            : require('./assets/music-images/play-icon-2.png')}
                                        style={{ width: 70, height: 70, tintColor: 'white'}}
                                    />
                                  
                                </TouchableOpacity>
                                 <Image
                                    source={require('./assets/music-images/next-icon-2.png')}
                                    style={{ width: 30, height: 30, tintColor: 'white'}}
                                />
                            </View>

                          
                    </View>
                </View>
                
              
                }
           
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