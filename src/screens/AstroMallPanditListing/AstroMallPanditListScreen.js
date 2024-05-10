import React from "react";
import { View, FlatList } from "react-native";
import { SH } from '../../utils';
import { AstroMallListView, Spacing } from '../../components';
import { Style } from '../../styles';
import { RouteName } from '../../routes';
import images from "../../index";
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native-virtualized-view';

const AstroMallPanditListScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();


  const ChatList = [
    {
      "id": 1,
      "image": images.Astromall_PanditListings_1,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_21',
      "expert": 'Home_Title_41',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_24',
      "Minutes": '₹ 3000',
      "BestSelling": 'Daily_Horoscope_25',
    },
    {
      "id": 2,
      "image": images.Astromall_PanditListings_2,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_26',
      "expert": 'Daily_Horoscope_27',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Home_Title_34',
      "Minutes": '₹ 2000',
      "BestSelling": 'Daily_Horoscope_25',
    },
    {
      "id": 3,
      "image": images.Astromall_PanditListings_3,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Home_Title_37',
      "expert": 'Home_Title_41',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 2500',
      "BestSelling": 'Daily_Horoscope_32',
    },
    {
      "id": 4,
      "image": images.Astromall_PanditListings_6,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_29',
      "expert": 'Home_Title_41',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 4500',
      "BestSelling": 'Daily_Horoscope_25',
    },
    {
      "id": 5,
      "image": images.Astromall_PanditListings_7,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_30',
      "expert": 'Home_Title_43',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 6000',
      "BestSelling": 'Daily_Horoscope_32',
    },
    {
      "id": 6,
      "image": images.Astromall_PanditListings_4,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_31',
      "expert": 'Home_Title_45',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 3000',
      "BestSelling": 'Daily_Horoscope_32',
    },
    {
      "id": 7,
      "image": images.Astromall_PanditListings_5,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_36',
      "expert": 'Home_Title_43',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 3400',
      "BestSelling": 'Daily_Horoscope_32',
    },
    {
      "id": 8,
      "image": images.Astromall_PanditListings_3,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_35',
      "expert": 'Call_Title_20',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 5700',
      "BestSelling": 'Daily_Horoscope_25',
    },
    {
      "id": 9,
      "image": images.Astromall_PanditListing_2,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_34',
      "expert": 'Home_Title_47',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 3200',
      "BestSelling": 'Daily_Horoscope_25',
    },
    {
      "id": 10,
      "image": images.Astromall_PanditListing_1,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_33',
      "expert": 'Home_Title_43',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": '₹ 4200',
      "BestSelling": 'Daily_Horoscope_25',
    },
  ]
  return (
    <View style={Style.height100width100}>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(20)} />
            <FlatList
              data={ChatList}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (<AstroMallListView
                item={item}
                index={index}
                onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)}
              />)}
              keyExtractor={item => item.id}
            />
            <Spacing space={SH(80)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default AstroMallPanditListScreen;
