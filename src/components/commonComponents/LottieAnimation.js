import React, { useMemo } from "react";
import Lottie from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';
import { SW,SH } from '../../utils';

function CheckBoxset(props) {
  const { source, Lottiewidthstyle, centerlottw } = props;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        Setlottesfilestyle: {
          width: SW(330),
          height:SH(330)
        },
        centerlottw: {
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%'
        }
      }),
  );
  return (
    <View style={[styles.centerlottw, { ...centerlottw }]}>
      <Lottie
        resizeMode="cover"
        style={[styles.Setlottesfilestyle, { ...Lottiewidthstyle }]}
        autoPlay={true}
        loop={true}
        source={source}
      />
    </View>
  );
};
export default CheckBoxset;