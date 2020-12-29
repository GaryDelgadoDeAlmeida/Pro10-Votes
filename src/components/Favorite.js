import * as React from 'react';
import { Text, View, SafeAreaView, FlatList } from 'react-native';
import Global from '../styles/Global';

const Item = ({item, index}) => (
    <Text key={index}>{item}</Text>
);

export default function Favorite({choices}) {
  
    return (
        <View>
            <SafeAreaView>
                <FlatList
                    data={choices}
                    renderItem={Item}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        </View>
    );
}