import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, FlatList, Text } from "react-native";
import { SH, SF } from '../../../utils';
import { Lottie, Spacing, CallListView, VectorIcon, Button } from '../../../components';
import { ChatTabStyle, Style } from '../../../styles';
import { TopCategory } from '../../../screens';
import images from "../../../index";
import { RouteName } from "../../../routes";
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native-virtualized-view';

const HomeTab = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const ChatList = [
    {
      "id": 1,
      "image": images.Chat_Tab_1,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_21',
      "texttwo": 'Daily_Horoscope_22',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_24',
      "Minutes": 'Home_Title_19',
      "Waittime": 'Home_Title_33',
    },
    {
      "id": 2,
      "image": images.Chat_Tab_2,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_26',
      "texttwo": 'Daily_Horoscope_27',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Home_Title_34',
      "Minutes": 'Home_Title_35',
      "Waittime": 'Home_Title_36',
    },
    {
      "id": 3,

    },
    {
      "id": 4,
      "image": images.Chat_Tab_3,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_29',
      "texttwo": 'Home_Title_41',
      "lanhuage": 'Call_Title_14',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": 'Call_Title_15',
      "Waittime": 'Home_Title_42',
    },
    {
      "id": 5,
      "image": images.Chat_Tab_4,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_30',
      "texttwo": 'Home_Title_43',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": 'Call_Title_15',
      "Waittime": 'Home_Title_40',
    },
    {
      "id": 6,
      "image": images.Chat_Tab_5,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Home_Title_44',
      "texttwo": 'Home_Title_45',
      "lanhuage": 'Call_Title_14',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": 'Call_Title_15',
      "Waittime": 'Home_Title_46',
    },
    {
      "id": 7,
      "image": images.Chat_Tab_6,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_36',
      "texttwo": 'Home_Title_43',
      "lanhuage": 'Call_Title_16',
      "Expyears": 'Call_Title_17',
      "Minutes": 'Call_Title_15',
      "Waittime": 'Call_Title_18',
    },
    {
      "id": 8,
      "image": images.Chat_Tab_7,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Call_Title_19',
      "texttwo": 'Call_Title_20',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": 'Call_Title_15',
      "Waittime": 'Home_Title_33',
    },
    {
      "id": 9,
      "image": images.Chat_Tab_8,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_34',
      "texttwo": 'Home_Title_47',
      "lanhuage": 'Call_Title_14',
      "Expyears": 'Call_Title_17',
      "Minutes": 'Home_Title_48',
      "Waittime": 'Home_Title_49',
    },
    {
      "id": 10,
      "image": images.Chat_Tab_9,
      "orderstext": 'Daily_Horoscope_20',
      "username": 'Daily_Horoscope_33',
      "texttwo": 'Home_Title_43',
      "lanhuage": 'Daily_Horoscope_23',
      "Expyears": 'Daily_Horoscope_28',
      "Minutes": 'Home_Title_50',
      "Waittime": 'Call_Title_18',
    },
  ]
  const { Colors } = useTheme();
  const ChatTabStyles = useMemo(() => ChatTabStyle(Colors), [Colors]);

  return (
    <View style={Style.height100width100}>
      <Spacing space={SH(20)} />
      <TopCategory />
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Lottie Lottiewidthstyle={ChatTabStyles.LootieChat} source={images.Chat_Animation} />
            <FlatList
              data={ChatList}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (<CallListView
                item={item}
                index={index}
                onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}
              />)}
              keyExtractor={item => item.id}
            />
            <Spacing space={SH(200)} />
          </View>
        </View>
      </ScrollView>
      <View style={ChatTabStyles.PostionAbsoluteBottom}>
        <View style={ChatTabStyles.BothFlexView}>
          <View style={ChatTabStyles.FlexRowTextStyle}>
            <View>
              <VectorIcon icon="FontAwesome5" name="calendar-check" size={SF(40)} color={Colors.theme_background} />
            </View>
            <View>
              <Text style={ChatTabStyles.DailyPasstextStyle}>{t("Astromall_Title_21")}</Text>
              <Text style={ChatTabStyles.DailyPasstextStyleTwo}>{t("Home_Title_51")}</Text>
            </View>
          </View>
          <View style={ChatTabStyles.ButtonViewWidth30}>
            <Button onPress={() => navigation.navigate(RouteName.BUY_MEBERSHIP)} title={t("Astromall_Title_28")} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default HomeTab;