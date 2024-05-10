import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { HomeTabStyle } from '../../styles';
import { Button, Spacing, LinearGradient, RatingScreen } from '../../components';
import { SH, SW } from '../../utils';

const AstrologersView = (props) => {
    const { t } = useTranslation();
    const { item, title, onPress } = props;

    const { Colors } = useTheme();
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <View style={HomeTabStyles.BorderWidthView}>
            <View style={HomeTabStyles.PostionAbsolute}>
                <Text style={HomeTabStyles.TextCebnter}>{t("Home_Title_32")}</Text>
            </View>
            <View style={HomeTabStyles.MinViewFirst}>
                <View>
                    <LinearGradient
                        colors={[Colors.Liner_Color_1, Colors.Liner_Color_2]}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={HomeTabStyles.LinerAroundBorder}>
                        <View style={HomeTabStyles.CenteriMAGE}>
                            <Image source={item.imageseye} resizeMode="contain" style={HomeTabStyles.AstrologyView} />
                        </View>
                    </LinearGradient>
                    <Text style={HomeTabStyles.AstrologyViewTextStyle}>{t(item.text)}</Text>
                    <Text style={HomeTabStyles.MinutesTextStyle}>{t(item.Priceset)}</Text>
                    <Spacing space={SH(5)} />
                    <RatingScreen
                        type='custom'
                        ratingColor={Colors.amber_color}
                        ratingBackgroundColor={Colors.chinese_silver}
                        ratingCount={SW(5)}
                        tintColor={Colors.white_text_color}
                        imageSize={SW(20)}
                        startingValue={SW(5)}
                        isDisabled={false}
                    />
                    <Spacing space={SH(10)} />
                    <View>
                        <Button onPress={() => onPress()} buttonTextStyle={HomeTabStyles.ButtonTextStyle} buttonStyle={HomeTabStyles.ButtonStyle} title={title} />
                    </View>
                </View>
            </View>
        </View>
    );
}
export default AstrologersView;