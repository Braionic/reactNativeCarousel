import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Toggle from "react-native-toggle-element";


export default function ToggleSwitch({toggleValue, setToggleValue}) {
  

  return (
    <View style={{alignItems: 'center', marginVertical: 50}}>
      <Toggle value={toggleValue} fill={"red"} onPress={(val) => setToggleValue(val)} />
    </View>
  )
}