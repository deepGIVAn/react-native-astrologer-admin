/* eslint-disable prettier/prettier */
import React, {useMemo, useState} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SwiperStyle} from '../../styles';
import {Lottie, Spacing, VectorIcon} from '../../components';
import {RouteName} from '../../routes';
import {SH, SF} from '../../utils';
import {useTranslation} from 'react-i18next';
import images from '../../index';

const App = props => {
  const {t} = useTranslation();
  const {navigation} = props;

  const Swiperdata = [
    {
      key: 's1',
      text: 'Swiperfirst',
      title: 'Swipertitle',
      animation: images.First_Swiper,
    },
    {
      key: 's2',
      text: 'SwiperFirstTwo',
      title: 'SwiperTitleTwo',
      animation: images.Two_Swiper,
    },
    {
      key: 's3',
      text: 'SwiperFirstThree',
      title: 'Swipertitlethree',
      animation: images.Three_Swiper,
      backgroundColor: 'transparent',
    },
  ];

  const {Colors} = useTheme();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);
  const [activeColor, setActiveColor] = useState('#C54E3E');

  const RenderItem = ({item, index}) => {
    return (
      <>
        <Spacing space={SH(50)} />
        <Lottie
          source={item.animation}
          Lottiewidthstyle={SwiperStyles.AnimationViewStyles}
        />
        <View style={SwiperStyles.AbsoluteView}>
          <Text style={SwiperStyles.TitleStyles}>{t(item.title)}</Text>
          <Spacing space={SH(20)} />
          <Text style={SwiperStyles.Textstyle}>{t(item.text)}</Text>
        </View>
      </>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyles.ButtonCircle}>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.SELECT_LANGUAGE)}>
          <VectorIcon
            icon="Entypo"
            name="arrow-with-circle-right"
            size={SF(40)}
            color={Colors.white_text_color}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.NextTextStyle}>{t('Next_Text')}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate(RouteName.LOGIN_SCREEN)}>
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.NextTextStyle}>{t('Skip_Text')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={SwiperStyles.SwiperMinView}>
      <StatusBar backgroundColor={'#C54E3E'} />
      <View
        style={SwiperStyles.SwiperMinViewTwo}
        backgroundColor={activeColor}></View>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.ActiveDotStyles}
        dotStyle={SwiperStyles.DotSwiperStyle}
      />
    </View>
  );
};
export default App;
