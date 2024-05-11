import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {SH, SF} from '../../../utils';
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

const HomeTab = props => {
  const {navigation} = props;
  const {t} = useTranslation();

  const {Colors} = useTheme();
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

  const CategoryData = [
    {
      id: 1,
      text: 'Home_Title_1',
      imageseye: images.Home_1,
      url: RouteName.DAILY_HOROSCOPE,
    },
    {
      id: 2,
      text: 'Home_Title_2',
      imageseye: images.Home_2,
      url: RouteName.FREE_CUNDALI_SCREEN,
    },
    {
      id: 3,
      text: 'Home_Title_4',
      imageseye: images.Home_3,
      url: RouteName.KUNDALI_MATCHING_SCREEN,
    },
    {
      id: 4,
      text: 'Home_Title_4',
      imageseye: images.Home_4,
      url: RouteName.Astrotalks_BLOG_SCREEN,
    },
  ];
  const LiveAstrologersdata = [
    {
      id: 1,
      text: 'Daily_Horoscope_1',
      imageseye: images.Live_Astrologers_2,
      IconName: 'call',
      digit: '400',
      review: '8.9',
    },
    {
      id: 2,
      text: 'Daily_Horoscope_2',
      imageseye: images.Live_Astrologers_6,
      IconName: 'videocam',
      digit: '1286',
      review: '6.7',
    },
    {
      id: 3,
      text: 'Daily_Horoscope_3',
      imageseye: images.Live_Astrologers_3,
      IconName: 'videocam',
      digit: '9322',
      review: '9.5',
    },
    {
      id: 4,
      text: 'Daily_Horoscope_4',
      imageseye: images.Live_Astrologers_7,
      IconName: 'call',
      digit: '2134',
      review: '9.2',
    },
    {
      id: 5,
      text: 'Daily_Horoscope_5',
      imageseye: images.Live_Astrologers_1,
      IconName: 'videocam',
      digit: '3945',
      review: '9.9',
    },
    {
      id: 6,
      text: 'Daily_Horoscope_6',
      imageseye: images.Live_Astrologers_4,
      IconName: 'call',
      digit: '3249',
      review: '6.9',
    },
    {
      id: 7,
      text: 'Daily_Horoscope_7',
      imageseye: images.Live_Astrologers_5,
      IconName: 'call',
      digit: '9765',
      review: '8.9',
    },
    {
      id: 8,
      text: 'Daily_Horoscope_8',
      imageseye: images.Live_Astrologers_4,
      IconName: 'videocam',
      digit: '4643',
      review: '7.9',
    },
  ];
  const Astrologersdata = [
    {
      id: 1,
      text: 'Home_Title_5',
      imageseye: images.Astrologers_View_1,
      Priceset: '₹ 30/min',
    },
    {
      id: 2,
      text: 'Home_Title_6',
      imageseye: images.Astrologers_View_2,
      Priceset: '₹ 47/min',
    },
    {
      id: 3,
      text: 'Home_Title_7',
      imageseye: images.Astrologers_View_3,
      IconName: 'videocam',
      Priceset: '₹ 89/min',
    },
    {
      id: 4,
      text: 'Home_Title_8',
      imageseye: images.Astrologers_View_4,
      Priceset: '₹ 76/min',
    },
    {
      id: 5,
      text: 'Home_Title_9',
      imageseye: images.Astrologers_View_5,
      Priceset: '₹ 55/min',
    },
    {
      id: 6,
      text: 'Home_Title_10',
      imageseye: images.Astrologers_View_6,
      Priceset: '₹ 44/min',
    },
    {
      id: 7,
      text: 'Home_Title_11',
      imageseye: images.Astrologers_View_7,
      Priceset: '₹ 68/min',
    },
    {
      id: 8,
      text: 'Home_Title_12',
      imageseye: images.Astrologers_View_8,
      Priceset: '₹ 73/min',
    },
  ];
  const ShopMalldata = [
    {
      id: 1,
      text: 'Home_Title_13',
      imageseye: images.ShopAstroMallView_1,
      Priceset: 'Home_Title_19',
    },
    {
      id: 2,
      text: 'Astromall_Title_18',
      imageseye: images.ShopAstroMallView_2,
      Priceset: 'Home_Title_18',
    },
    {
      id: 3,
      text: 'Home_Title_14',
      imageseye: images.ShopAstroMallView_3,
      IconName: 'videocam',
      Priceset: 'Home_Title_17',
    },
    {
      id: 4,
      text: 'Home_Title_15',
      imageseye: images.ShopAstroMallView_4,
      Priceset: 'Home_Title_16',
    },
  ];
  return (
    <View style={HomeTabStyles.WhiteBgColorMinView}>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(40)} />
            <FlatList
              data={CategoryData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <HomeCategoryView
                  item={item}
                  onPress={() => navigation.navigate(item.url)}
                />
              )}
              keyExtractor={item => item.id}
            />
            {/* <Spacing space={SH(25)} /> */}
            {/* <View style={HomeTabStyles.FlexRowLive}>
              <Text style={HomeTabStyles.LiveAstrologyText}>
                {t('Home_Title_22')}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(RouteName.FILTER_SCREEN)}>
                <Text style={HomeTabStyles.ViewAllTextStyle}>
                  {t('Home_Title_23')}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacing space={SH(10)} />
            <FlatList
              data={LiveAstrologersdata}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <LiveAstrologers
                  item={item}
                  onPress={() =>
                    navigation.navigate(RouteName.AUDIO_CALL_SCREEN)
                  }
                />
              )}
              keyExtractor={item => item.id}
            /> */}
            <Spacing space={SH(25)} />
            <View style={HomeTabStyles.FlexRowLive}>
              <Text style={HomeTabStyles.LiveAstrologyText}>
                {t('Home_Title_24')}
              </Text>
              <TouchableOpacity>
                <Text style={HomeTabStyles.ViewAllTextStyle}>
                  {t('Home_Title_25')}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacing space={SH(10)} />
            <FlatList
              data={Astrologersdata}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <AstrologersView
                  item={item}
                  title={t('Home_Title_26')}
                  onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}
                />
              )}
              keyExtractor={item => item.id}
            />
            <Spacing space={SH(25)} />
            <View style={HomeTabStyles.FlexRowLive}>
              <Text style={HomeTabStyles.LiveAstrologyText}>
                {t('Home_Title_27')}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteName.Astrotalks_BLOG_SCREEN)
                }>
                <Text style={HomeTabStyles.ViewAllTextStyle}>
                  {t('Home_Title_30')}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacing space={SH(10)} />
            <FlatList
              data={LiveAstrologersdata}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <LatestBlogView
                  item={item}
                  onPress={() =>
                    navigation.navigate(
                      RouteName.Astrotalks_BLOG_DETAILS_SCREEN,
                    )
                  }
                />
              )}
              keyExtractor={item => item.id}
            />
            <Spacing space={SH(25)} />
            <View style={HomeTabStyles.FlexRowLive}>
              <Text style={HomeTabStyles.LiveAstrologyText}>
                {t('Home_Title_29')}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(RouteName.ASTROMALL_PANDITLISTING_SCREEN)
                }>
                <Text style={HomeTabStyles.ViewAllTextStyle}>
                  {t('Home_Title_30')}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacing space={SH(10)} />
            <FlatList
              data={ShopMalldata}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <ShopAstromallView
                  item={item}
                  onPress={() =>
                    navigation.navigate(RouteName.ASTROMALL_SCREEN)
                  }
                />
              )}
              keyExtractor={item => item.id}
            />
            <Spacing space={SH(105)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeTab;
