import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Style, AudioCallStyles} from '../../styles';
import {Spacing, VectorIcon} from '../../components';
import {SH, SF} from '../../utils';
import images from '../../index';
import {RouteName} from '../../routes';
import {useTranslation} from 'react-i18next';

const AudioCallScreen = props => {
  const {navigation} = props;
  const {t} = useTranslation();
  const [speaker, setspeaker] = useState(1);
  const [mute, setmute] = useState(1);

  const {Colors} = useTheme();
  const AudioCallStyle = useMemo(() => AudioCallStyles(Colors), [Colors]);

  return (
    <View style={AudioCallStyle.MinViewStyle}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewTestHeight}>
        <KeyboardAvoidingView enabled>
          <View style={Style.MinFlexView}>
            <View style={Style.MinContentView}>
              <Spacing space={SH(20)} />
              <Text style={AudioCallStyle.CenterTextAppName}>
                {t('Audio_Call_Title_1')}
              </Text>
              <Spacing space={SH(50)} />
              <Text style={AudioCallStyle.TextCenter}>
                {t('Audio_Call_Title_2')}
              </Text>
              <Spacing space={SH(5)} />
              <Text style={AudioCallStyle.TimeTextStyle}>05:30</Text>
              <Spacing space={SH(50)} />
              <View style={AudioCallStyle.CenterImageView}>
                <Image
                  resizeMode="contain"
                  source={images.Chat_Tab_5}
                  style={AudioCallStyle.ImageStyle}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={AudioCallStyle.PostionAbasoluteView}>
        <View style={AudioCallStyle.FlexRowTextView}>
          <View style={AudioCallStyle.WidthSetView}>
            <View style={AudioCallStyle.CenterIconStyle}>
              {mute === 1 ? (
                <TouchableOpacity
                  onPress={() => setmute(0)}
                  style={AudioCallStyle.IconView}>
                  <VectorIcon
                    icon="FontAwesome"
                    name="microphone"
                    size={SF(33)}
                    color={Colors.white_text_color}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setmute(1)}
                  style={AudioCallStyle.IconView}>
                  <VectorIcon
                    icon="FontAwesome"
                    name="microphone-slash"
                    size={SF(33)}
                    color={Colors.white_text_color}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text style={AudioCallStyle.MuteTextStyle}>
              {t('Audio_Call_Title_3')}
            </Text>
          </View>
          <View style={AudioCallStyle.WidthSetView}>
            <View style={AudioCallStyle.CenterIconStyle}>
              <TouchableOpacity style={AudioCallStyle.IconView}>
                <VectorIcon
                  icon="MaterialIcons"
                  name="message"
                  size={SF(33)}
                  color={Colors.white_text_color}
                />
              </TouchableOpacity>
            </View>
            <Text style={AudioCallStyle.MuteTextStyle}>
              {t('Audio_Call_Title_4')}
            </Text>
          </View>
          <View style={AudioCallStyle.WidthSetView}>
            <View style={AudioCallStyle.CenterIconStyle}>
              {speaker === 1 ? (
                <TouchableOpacity
                  onPress={() => setspeaker(0)}
                  style={AudioCallStyle.IconView}>
                  <VectorIcon
                    icon="FontAwesome"
                    name="volume-up"
                    size={SF(33)}
                    color={Colors.white_text_color}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setspeaker(1)}
                  style={AudioCallStyle.IconView}>
                  <VectorIcon
                    icon="Foundation"
                    name="volume-strike"
                    size={SF(33)}
                    color={Colors.white_text_color}
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text style={AudioCallStyle.MuteTextStyle}>
              {t('Audio_Call_Title_5')}
            </Text>
          </View>
        </View>
        <Spacing space={SH(30)} />
        <View style={AudioCallStyle.CenterViewMin}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.REVIEWS_SCREEN)}
            style={AudioCallStyle.CallEndView}>
            <VectorIcon
              icon="MaterialIcons"
              name="call-end"
              size={SF(30)}
              color={Colors.white_text_color}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default AudioCallScreen;
