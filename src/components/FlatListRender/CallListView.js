import React, {useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {Text, FlatList, View} from 'react-native';
import {ChatTabStyle, HomeTabStyle} from '../../styles';
import {useTranslation} from 'react-i18next';
import {
  RatingScreen,
  Spacing,
  VectorIcon,
  Button,
  AstrologersView,
  LinearGradient,
} from '../../components';
import {SF, SH, SW} from '../../utils';
import {Image} from 'react-native-elements';
import images from '../../index';

const CallListView = props => {
  const {t} = useTranslation();
  const {item, index, onPress} = props;

  const {Colors} = useTheme();
  const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);
  const ChatTabStyles = useMemo(() => ChatTabStyle(Colors), [Colors]);

  const Astrologersdata = [
    {
      id: 1,
      text: 'Home_Title_9',
      imageseye: images.CallListView_7,
      Priceset: 'Home_Title_55',
    },
    {
      id: 2,
      text: 'Home_Title_7',
      imageseye: images.CallListView_3,
      IconName: 'videocam',
      Priceset: 'Home_Title_57',
    },
    {
      id: 3,
      text: 'Home_Title_10',
      imageseye: images.CallListView_6,
      Priceset: 'Home_Title_54',
    },
    {
      id: 4,
      text: 'Home_Title_12',
      imageseye: images.CallListView_4,
      Priceset: 'Home_Title_52',
    },
    {
      id: 5,
      text: 'Daily_Horoscope_4',
      imageseye: images.CallListView_8,
      Priceset: 'Home_Title_56',
    },
    {
      id: 6,
      text: 'Daily_Horoscope_7',
      imageseye: images.CallListView_5,
      Priceset: 'Home_Title_53',
    },
    {
      id: 7,
      text: 'Home_Title_6',
      imageseye: images.CallListView_2,
      Priceset: 'Home_Title_58',
    },
    {
      id: 8,
      text: 'Home_Title_5',
      imageseye: images.CallListView_1,
      Priceset: 'Home_Title_59',
    },
  ];
  return (
    <View>
      {index === 2 ? (
        <View>
          <Text style={HomeTabStyles.LiveAstrologyText}>
            {t('Home_Title_60')}
          </Text>
          <Spacing space={SH(10)} />
          <FlatList
            data={Astrologersdata}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <AstrologersView
                item={item}
                title={t('Home_Title_26')}
                onPress={() => onPress()}
              />
            )}
            keyExtractor={item => item.id}
          />
          <Spacing space={SH(20)} />
        </View>
      ) : (
        <View style={ChatTabStyles.FlexDirectionRow}>
          {index === 0 ||
          index === 2 ||
          index === 3 ||
          index === 5 ||
          index === 7 ||
          index === 8 ? (
            <View style={ChatTabStyles.PostionAbsolute}>
              <Text style={ChatTabStyles.TextCebnter}>
                {t('Home_Title_32')}
              </Text>
            </View>
          ) : null}
          <View style={ChatTabStyles.ImageViewWidth}>
            <LinearGradient
              colors={[Colors.Liner_Color_1, Colors.Liner_Color_2]}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}
              style={HomeTabStyles.LinerAroundChatTab}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={ChatTabStyles.ImageStyleas}
              />
            </LinearGradient>
            <Spacing space={SH(15)} />
            <View style={ChatTabStyles.FlexStartRatings}>
              <RatingScreen
                imageSize={SF(17)}
                ratingColor={Colors.chinese_silver}
                ratingBackgroundColor={Colors.chinese_silver}
                ratingCount={SW(5)}
                tintColor={Colors.white_text_color}
                startingValue={SW(5)}
              />
            </View>
            <Spacing space={SH(5)} />
            <Text style={ChatTabStyles.OrderTextStyle}>
              {t(item.orderstext)}
            </Text>
            {index === 1 || index === 4 || index === 9 ? (
              <Text style={ChatTabStyles.ImageBottomText}>
                {t('Call_Title_2')}
              </Text>
            ) : null}
          </View>
          <View style={ChatTabStyles.TextViewWidth}>
            <View style={ChatTabStyles.FlexRowSpace}>
              <Text style={ChatTabStyles.UserNameTextStyle}>
                {t(item.username)}
              </Text>
              <VectorIcon
                icon="MaterialCommunityIcons"
                name="check-decagram"
                color={Colors.blue_color}
                size={SF(35)}
              />
            </View>
            <Text style={ChatTabStyles.SmallTextStyle}>{t(item.texttwo)}</Text>
            <Text style={ChatTabStyles.SmallTextStyle}>{t(item.lanhuage)}</Text>
            <View style={ChatTabStyles.FlexRowSpace}>
              <View>
                <Text style={ChatTabStyles.SmallTextStyle}>
                  {t(item.Expyears)}
                </Text>
                <Text style={ChatTabStyles.SmallTextStyleTwo}>
                  {t(item.Minutes)}
                </Text>
              </View>
              {index === 1 || index === 3 || index === 4 || index === 8 ? (
                <View>
                  <Button
                    buttonTextStyle={ChatTabStyles.ButtonTextStyleRed}
                    buttonStyle={ChatTabStyles.ButtonStyleRed}
                    onPress={() => onPress()}
                    title={t('Home_Title_26')}
                  />
                  <Spacing space={SH(5)} />
                  <Text style={ChatTabStyles.WaitTextStyle}>
                    {t(item.Waittime)}
                  </Text>
                </View>
              ) : (
                <View>
                  <Button
                    buttonTextStyle={ChatTabStyles.ButtonTextStyle}
                    buttonStyle={ChatTabStyles.ButtonStyle}
                    onPress={() => onPress()}
                    title={t('Home_Title_26')}
                  />
                  <Spacing space={SH(5)} />
                  <Text style={ChatTabStyles.WaitTextStyleGreen}></Text>
                </View>
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default CallListView;
