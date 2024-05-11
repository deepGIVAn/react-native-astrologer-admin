import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {SH, SF, SW, Colors, Fonts} from '../../../utils';
import {
  HomeCategoryView,
  Spacing,
  LiveAstrologers,
  AstrologersView,
  LatestBlogView,
  ShopAstromallView,
  VectorIcon,
} from '../../../components';
import {Style, HomeTabStyle} from '../../../styles';
import images from '../../../index';
import {RouteName} from '../../../routes';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native-virtualized-view';
import AdminLogo from '../../../images/custom/adminlogo.png';
import conversation from '../../../images/custom/conversations.png';
import list from '../../../images/custom/list.png';
import payment from '../../../images/custom/payment.png';

const HomeTab = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const ChatList = [
    {
      id: 1,
      image: images.Chat_Tab_1,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_21',
      texttwo: 'Daily_Horoscope_22',
      lanhuage: 'Daily_Horoscope_23',
      Expyears: 'Daily_Horoscope_24',
      Minutes: 'Home_Title_19',
      Waittime: 'Home_Title_33',
    },
    {
      id: 2,
      image: images.Chat_Tab_2,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_26',
      texttwo: 'Daily_Horoscope_27',
      lanhuage: 'Daily_Horoscope_23',
      Expyears: 'Home_Title_34',
      Minutes: 'Home_Title_35',
      Waittime: 'Home_Title_36',
    },
    {
      id: 3,
    },
    {
      id: 4,
      image: images.Chat_Tab_3,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_29',
      texttwo: 'Home_Title_41',
      lanhuage: 'Call_Title_14',
      Expyears: 'Daily_Horoscope_28',
      Minutes: 'Call_Title_15',
      Waittime: 'Home_Title_42',
    },
    {
      id: 5,
      image: images.Chat_Tab_4,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_30',
      texttwo: 'Home_Title_43',
      lanhuage: 'Daily_Horoscope_23',
      Expyears: 'Daily_Horoscope_28',
      Minutes: 'Call_Title_15',
      Waittime: 'Home_Title_40',
    },
    {
      id: 6,
      image: images.Chat_Tab_5,
      orderstext: 'Daily_Horoscope_20',
      username: 'Home_Title_44',
      texttwo: 'Home_Title_45',
      lanhuage: 'Call_Title_14',
      Expyears: 'Daily_Horoscope_28',
      Minutes: 'Call_Title_15',
      Waittime: 'Home_Title_46',
    },
    {
      id: 7,
      image: images.Chat_Tab_6,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_36',
      texttwo: 'Home_Title_43',
      lanhuage: 'Call_Title_16',
      Expyears: 'Call_Title_17',
      Minutes: 'Call_Title_15',
      Waittime: 'Call_Title_18',
    },
    {
      id: 8,
      image: images.Chat_Tab_7,
      orderstext: 'Daily_Horoscope_20',
      username: 'Call_Title_19',
      texttwo: 'Call_Title_20',
      lanhuage: 'Daily_Horoscope_23',
      Expyears: 'Daily_Horoscope_28',
      Minutes: 'Call_Title_15',
      Waittime: 'Home_Title_33',
    },
    {
      id: 9,
      image: images.Chat_Tab_8,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_34',
      texttwo: 'Home_Title_47',
      lanhuage: 'Call_Title_14',
      Expyears: 'Call_Title_17',
      Minutes: 'Home_Title_48',
      Waittime: 'Home_Title_49',
    },
    {
      id: 10,
      image: images.Chat_Tab_9,
      orderstext: 'Daily_Horoscope_20',
      username: 'Daily_Horoscope_33',
      texttwo: 'Home_Title_43',
      lanhuage: 'Daily_Horoscope_23',
      Expyears: 'Daily_Horoscope_28',
      Minutes: 'Home_Title_50',
      Waittime: 'Call_Title_18',
    },
  ];

  const {Colors} = useTheme();
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      icon: conversation,
      title: 'First ItemDaily List of Astrologers Consultation',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      icon: list,
      title: 'List of No of Users with their Details',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      icon: payment,
      title: 'All Payment Request Details',
    },
  ];

  return (
    <View style={HomeTabStyles.WhiteBgColorMinView}>
      <ScrollView>
        <Spacing space={SH(20)} />
        <View style={HomeTabStyles.AdminView}>
          <Image source={AdminLogo} style={HomeTabStyles.AdminIcon} />
        </View>
        <Spacing space={SH(20)} />
        <View>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Item title={item.title} icon={item.icon} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const Item = ({title, icon}) => (
  <View style={styles.item}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    paddingLeft: SH(15),
    color: Colors.black_text_color,
    fontFamily: Fonts.Poppins_Medium,
    width: '85%',
  },
  icon: {
    resizeMode: 'contain',
    width: SW(40),
    height: SH(40),
  },
});

export default HomeTab;
