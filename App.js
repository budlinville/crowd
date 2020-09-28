import React from 'react';
import { View } from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

var InitialARScene = require('./js/Scene');

const App = () => 
    <View style={{flex: 1}}>
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'CrowdSRFR', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
        </View>
        <ViroARSceneNavigator
            style={{flex: 1}} 
            initialScene={{scene: InitialARScene}}
        />
    </View>

module.exports = App;
