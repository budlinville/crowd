'use strict';

import React, { Component } from 'react';

import {
  ViroARScene,
  ViroMaterials,
  ViroSphere
} from 'react-viro';
import GetLocation from 'react-native-get-location';

export default class Scene extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <ViroARScene>
        <ViroSphere
          heightSegmentCount={20}
          widthSegmentCount={20}
          radius={5}
          position={[0, 0, -40]}
          materials={["red"]}
        />
      </ViroARScene>
    );
  }
};

ViroMaterials.createMaterials({
  red: {
    diffuseColor: "red",
  },
});

module.exports = Scene;
