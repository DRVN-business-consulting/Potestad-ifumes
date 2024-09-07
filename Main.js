import React, { useEffect } from 'react'
import { View, Text, StatusBar, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import { useTheme } from './src/context/ThemeContext';
import MyStyle from './src/MyStyle';

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

const Item = ({ item, onPress, theme }) => (
    <TouchableOpacity style={[MyStyle.item, theme === 'light' ? MyStyle.lightItem : MyStyle.darkItem]} onPress={onPress}>
        <View>
            {item.image && <Image source={item.image} style={MyStyle.image} />}
        </View>
        <View style={{ justifyContent: 'space-around' }}>
            <Text style={[MyStyle.title, theme === 'light' ? MyStyle.lightText : MyStyle.darkText]}>{item.title}</Text>
            <Text style={[MyStyle.artist, theme === 'light' ? MyStyle.lightText : MyStyle.darkText]}>Artist: {item.artist}</Text>   
        </View>
        <View style={MyStyle.spacer}/>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("./assets/music-images/play.png")} style={MyStyle.playBtn}></Image>
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
    const { theme, toggleTheme } = useTheme();

    const primaryColor = '#023020';
    const secondaryColor ='red';
    const tertiaryColor = '#663399';

    const [defaultColor, setColor] = React.useState(primaryColor);

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
    };

    const handleColorChange = (color) => {
        setColor(color);
    };

    const renderItem = ({ item }) => (
        <Item
            item={item}
            theme={theme}
            onPress={() => {
                setSelectedId(item.id);
                setSelectedArtist(item.artist);
                setSelectedImage(item.image);
                setSelectedTitle(item.title);
                setProgress(0);
                setIsPlaying(true);
            }}
        />
    );

    const ListHeader = () => (
        <View>
            <View style={[MyStyle.header, { backgroundColor: theme === 'light' ? defaultColor : '#333' }]}>
                <Text style={MyStyle.headerText}>iFumes: Music Player</Text>
                <Image source={require('./assets/musicLogo.gif')} style={MyStyle.logo} />
            </View>
            <View style={MyStyle.tabs}>
                <Text style={[MyStyle.tabText, theme === 'light' ? MyStyle.lightTabText : MyStyle.darkTabText]}>Songs</Text>
                <Text style={theme === 'light' ? MyStyle.lightText : MyStyle.darkText}>Artist</Text>
                <Text style={theme === 'light' ? MyStyle.lightText : MyStyle.darkText}>Albums</Text>
                <Text style={theme === 'light' ? MyStyle.lightText : MyStyle.darkText}>Folders</Text>
            </View>
        </View>
    );

    return (
        <>
            <StatusBar style="auto" />    
            {(selectedId === 0) ? 
                <FlatList 
                    ListHeaderComponent={ListHeader}
                    data={musicList} 
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                    style={theme === 'light' ? MyStyle.lightContainer : MyStyle.darkContainer}
                />
             
             : 
                <View style={[{ flex: 1 }, theme === 'light' ? MyStyle.lightContainer : MyStyle.darkContainer]}>
                    <TouchableOpacity onPress={() => { setSelectedId(0); }} style={MyStyle.backButton}>
                        <Image source={require('./assets/back-icon.png')} style={[MyStyle.backIcon , theme === 'light' ? MyStyle.lightIcon : MyStyle.darkIcon]} />
                        <Text style={[MyStyle.backText, theme === 'light' ? MyStyle.lightText : MyStyle.darkText]}>Back</Text>
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center'}}>
                            {selectedImage && (
                                <Image source={selectedImage} style={MyStyle.selectedImage} />
                            )}
                        </View>
                        <View style={MyStyle.details}>
                            <Text style={[{fontSize: 30, fontWeight: 'bold'}, theme === 'light' ? MyStyle.lightText : MyStyle.darkText]}>{selectedTitle}</Text>
                            <Text style={[MyStyle.artist, theme === 'light' ? MyStyle.lightText : MyStyle.darkText]}>Artist: {selectedArtist}</Text>
                        </View>
                        <View style={MyStyle.progressBar}>
                            <View style={[MyStyle.progress, { width: `${progress}%`, backgroundColor: theme === 'light' ? defaultColor : 'white' }]} />
                        </View>
                        <View style={MyStyle.controls}>
                            <Image source={require('./assets/music-images/prev-icon.png')} style={[MyStyle.controlIcon, {tintColor : theme === 'light' ? defaultColor : '#fff'}]} />
                            <TouchableOpacity onPress={handlePlayPausePress}>
                                <Image
                                    source={isPlaying ? require('./assets/music-images/pause-icon-2.png') : require('./assets/music-images/play-icon-2.png')}
                                    style={[MyStyle.playPauseIcon, {tintColor : theme === 'light' ? defaultColor : '#fff'}]}
                                />
                            </TouchableOpacity>
                            <Image source={require('./assets/music-images/next-icon-2.png')} style={[MyStyle.controlIcon, {tintColor : theme === 'light' ? defaultColor : '#fff'}]} />
                        </View>
                    </View>
                </View>
            }
            <View style={{paddingHorizontal:15, borderTopColor: 'rgba(2, 48, 32, 0.5)', borderTopWidth: 1, backgroundColor:'#D3D3D3', justifyContent:'space-between', flexDirection:'row'}}>
                <TouchableOpacity onPress={toggleTheme} style={MyStyle.backButton}>
                    <Image 
                        source={require('./assets/darkmode.png')}
                        style={[
                            { width: 30, height: 30 },
                            { tintColor: theme === 'light' ? 'white' : '#023020' } 
                        ]}
                    />
                     <Text 
                        style={[
                            { marginLeft: 6 },
                            { color: theme === 'light' ? 'white' : '#023020' },
                            theme === 'dark' && { fontWeight: 'bold' }
                        ]}>Dark Mode
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleColorChange(primaryColor)} style={MyStyle.backButton}>
                    <Image 
                        source={require('./assets/theme.png')}
                        style={[
                            { width: 30, height: 30, tintColor: primaryColor}
                        ]}
                    />
                     <Text 
                        style={{ marginLeft: 6 }}>Theme 1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>handleColorChange(secondaryColor)} style={MyStyle.backButton}>
                    <Image 
                        source={require('./assets/theme.png')}
                        style={[
                            { width: 30, height: 30, tintColor: secondaryColor}
                        ]}
                    />
                    <Text 
                        style={{ marginLeft: 6 }}>Theme 2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>handleColorChange(tertiaryColor)} style={MyStyle.backButton}>
                    <Image 
                        source={require('./assets/theme.png')}
                        style={[
                            { width: 30, height: 30, tintColor: tertiaryColor}
                        ]}
                    />
                    <Text 
                        style={{ marginLeft: 6 }}>Theme 3
                    </Text>
                </TouchableOpacity>
            </View>       
        </>
    );
};

export default MainComponent;
