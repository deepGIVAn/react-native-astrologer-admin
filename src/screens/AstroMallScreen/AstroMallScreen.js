import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, FlatList } from "react-native";
import { Style, OrderHistoryStyle, BuyMembershipStyle } from '../../styles';
import { Spacing, AstroMallView } from "../../components";
import { SH } from '../../utils';
import { RouteName } from '../../routes';
import images from '../../index';
import { ScrollView } from 'react-native-virtualized-view';

const AstroMallScreen = (props) => {
  const { navigation } = props;

  const { Colors } = useTheme();
  const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);
  const BuyMembershipStyles = useMemo(() => BuyMembershipStyle(Colors), [Colors]);


  const Astromalldata = [
    {
      "id": 1,
      "text": 'Astromall_Title_12',
      "TopLable": 'Astromall_Title_13',
      "ImageSet": images.AstroMall_Screen_1,
    },
    {
      "id": 2,
      "text": 'Astromall_Title_14',
      "TopLable": 'Astromall_Title_15',
      "ImageSet": images.AstroMall_Screen_2,
    },
    {
      "id": 3,
      "text": 'Astromall_Title_16',
      "IconName": 'videocam',
      "ImageSet": images.AstroMall_Screen_3,
    },
    {
      "id": 4,
      "text": 'Astromall_Title_17',
      "IconName": 'call',
      "ImageSet": images.AstroMall_Screen_4,
    },
    {
      "id": 5,
      "text": 'Astromall_Title_18',
      "TopLable": 'Astromall_Title_15',
      "ImageSet": images.AstroMall_Screen_5,
    },
    {
      "id": 6,
      "text": 'Astromall_Title_19',
      "IconName": 'videocam',
      "ImageSet": images.AstroMall_Screen_6,
    },
    {
      "id": 7,
      "text": 'Astromall_Title_20',
      "IconName": 'videocam',
      "TopLable": 'Astromall_Title_15',
      "ImageSet": images.AstroMall_Screen_7,
    },
    {
      "id": 8,
      "text": 'Astromall_Title_14',
      "IconName": 'videocam',
      "ImageSet": images.AstroMall_Screen_8,
    },
  ]

  return (
    <View style={OrderHistoryStyles.MinView}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <Spacing space={SH(20)} />
        <View style={BuyMembershipStyles.ContentStyle}>
          <FlatList
            data={Astromalldata}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (<AstroMallView
              item={item}
              index={index}
              onPress={() => navigation.navigate(RouteName.ASTROMALL_DETAILS_SCREEN)}
            />)}
            keyExtractor={item => item.id} 
          />
        </View>
        <Spacing space={SH(30)} />
      </ScrollView>
    </View>
  );
};
export default AstroMallScreen;