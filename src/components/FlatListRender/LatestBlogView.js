import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle } from '../../styles';
import { SF, SH } from '../../utils';
import { Spacing, VectorIcon, LinearGradient } from '../commonComponents';

const LatestBlogView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;

    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <View style={HomeTabStyles.LatestBlogView}>
            <View style={HomeTabStyles.CenteriMAGE}>
                <TouchableOpacity onPress={() => onPress()}>
                    <Image source={item.imageseye} resizeMode="contain" style={HomeTabStyles.LatestImageStyle} />
                    <LinearGradient
                        colors={[Colors.Liner_Color_1, Colors.Liner_Color_2]}
                        start={{ x: 0.5, y: 1 }} // Start at the center-top
                        end={{ x: 0.5, y: 0 }}
                        style={HomeTabStyles.LinerColorStyle35Two} />
                </TouchableOpacity>
                <View style={HomeTabStyles.BackgroundMap}>
                    <VectorIcon icon="AntDesign" name="eye" color={Colors.white_text_color} size={SF(18)} />
                    <Text style={HomeTabStyles.LiveTextStyle}>{item.digit}</Text>
                </View>
            </View>
            <View style={HomeTabStyles.AllSidePadding}>
                <Text style={HomeTabStyles.LatestTextStyle}>{t("Daily_Horoscope_19")}</Text>
                <Spacing space={SH(10)} />
                <View style={HomeTabStyles.FlexRowTextStyle}>
                    <Text style={HomeTabStyles.SecondTextStyleLetest}>{t(item.text)}</Text>
                    <Text style={HomeTabStyles.SecondTextStyleLetest}>{t("Home_Title_31")}</Text>
                </View>
            </View>
        </View>
    );
}
export default LatestBlogView;