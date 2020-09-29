"use strict";

import React, { Component } from "react";

import {
	ViroARScene,
	ViroMaterials,
	ViroSphere,
	ViroAmbientLight,
	ViroSpotLight
} from "react-viro";
//import GetLocation from "react-native-get-location";

export default class Scene extends Component {

	constructor() {
		super();
	}

	render() {
		return (
			<ViroARScene>
				<ViroAmbientLight color={"#aaaaaa"} />
				<ViroSpotLight
					innerAngle={5}
					outerAngle={90}
					direction={[0,-1,-.2]}
					position={[0, 3, 1]}
					color="#ffffff"
					castsShadow={true}
				/>
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
}

ViroMaterials.createMaterials({
	red: {
		lightingModel: "Blinn",
		diffuseTexture: require("./rsc/metal_diff.jpg"),
		specularTexture: require("./rsc/metal_spec.jpg")
	},
});

module.exports = Scene;
