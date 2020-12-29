import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { Text, View } from 'react-native';
import reducer from './src/reducers/candidates';
import Global from './src/styles/Global';
import Votes from './src/components/Votes';

const store = createStore(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <View style={Global.container}>
                <Text>Welcome to React Native</Text>
                <Votes />
            </View>
        </Provider>
    );
}
