import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Temporary mock data
const mockTracks = [
  { id: '1', title: 'Long Time (Intro)', artist: 'Playboi Carti', isInstrumental: false },
  { id: '2', title: 'Timeless', artist: 'The Weeknd, Playboi Carti', isInstrumental: false },
  { id: '3', title: 'Location', artist: 'Playboi Carti', isInstrumental: true },
];

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Melodia" />
        <Appbar.Action icon="magnify" onPress={() => navigation.navigate('Search')} />
        <Appbar.Action icon="cog" onPress={() => navigation.navigate('Settings')} />
      </Appbar.Header>
      
      <FlatList
        data={mockTracks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.trackItem}>
            <View style={styles.trackInfo}>
              <Text variant="titleMedium">{item.title}</Text>
              <Text variant="bodyMedium">{item.artist}</Text>
              {item.isInstrumental && (
                <Text variant="bodySmall" style={styles.instrumentalTag}>Instrumental</Text>
              )}
            </View>
          </View>
        )}
      />
      
      <View style={styles.nowPlayingBar}>
        <View style={styles.progressBar} />
        <View style={styles.controls}>
          <Appbar.Action icon="skip-previous" onPress={() => {}} />
          <Appbar.Action icon="play" onPress={() => navigation.navigate('Player', { trackId: '1' })} />
          <Appbar.Action icon="skip-next" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen; 