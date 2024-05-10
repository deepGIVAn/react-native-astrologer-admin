import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { RouteName } from '../../routes';
import { ChatTabStyle } from '../../styles';
import { Spacing, VectorIcon, LiveStriming } from '../../components';
import { SF, SH } from '../../utils';

export default function HostPage(props) {
  const { navigation } = props;
  const { appID, appSign, userID, userName, liveID } = props;

  const handleLeaveLiveStreaming = () => {
    navigation.navigate(RouteName.HOME_TAB);
  };

  const { Colors } = useTheme();
  const ChatTabStyles = useMemo(() => ChatTabStyle(Colors), [Colors]);
  // ADD YOUR APP SIGN
  return (
    <View style={ChatTabStyles.ContainerStyle}>
      <LiveStriming
        appID={1234567890}  // ADD YOUR APP ID
        appSign={appSign} // ADD YOUR APP SIGN
        userID={userID} // ADD YOUR USER ID
        userName={userName}  // ADD YOUR USER ID
        liveID={liveID} // ADD YOUR LIVE ID
        onLeaveLiveStreaming={handleLeaveLiveStreaming}
      />

      <View style={ChatTabStyles.PostionCallView}>
        <Text style={ChatTabStyles.TextStyleMinutes}>₹16/m</Text>
        <Spacing space={SH(20)} />
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.ADD_MONEY_TO_WALLET)} style={ChatTabStyles.IconStyle}>
          <VectorIcon icon="Ionicons" name="call" color={Colors.white_text_color} size={SF(18)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}