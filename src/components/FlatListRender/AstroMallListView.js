import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, } from 'react-native';
import { ChatTabStyle, HomeTabStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { RatingScreen, Spacing, Button, LinearGradient } from '../../components';
import { SF, SH, SW } from '../../utils';
import { Image } from 'react-native-elements';
import { View } from 'react-native';

const AstroMallListView = (props) => {
    const { t } = useTranslation();
    const { item, onPress } = props;

    const { Colors } = useTheme();
    const ChatTabStyles = useMemo(() => ChatTabStyle(Colors), [Colors]);
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    return (
        <View>
            <View style={ChatTabStyles.FlexDirectionRow}>
                <View style={ChatTabStyles.PostionAbsoluteTwo}>
                    <Text style={ChatTabStyles.AstroMallText}>{t(item.BestSelling)}</Text>
                </View>
                <View style={ChatTabStyles.ImageViewWidth}>
                    <LinearGradient
                        colors={[Colors.Liner_Color_1, Colors.Liner_Color_2]}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={HomeTabStyles.LinerAroundChatTab}>
                        <Image source={item.image} resizeMode="contain" style={ChatTabStyles.ImageStyleas} />
                    </LinearGradient>
                    <Spacing space={SH(15)} />
                    <View style={ChatTabStyles.FlexStartRatings}>
                        <RatingScreen imageSize={SF(17)} ratingColor={Colors.chinese_silver}
                            ratingBackgroundColor={Colors.chinese_silver}
                            ratingCount={SW(5)}
                            tintColor={Colors.white_text_color}
                            startingValue={SW(5)} />
                    </View>
                    <Spacing space={SH(5)} />
                    <Text style={ChatTabStyles.OrderTextStyle}>{t(item.orderstext)}</Text>
                </View>
                <View style={ChatTabStyles.TextViewWidth}>
                    <View style={ChatTabStyles.FlexRowSpace}>
                        <Text style={ChatTabStyles.UserNameTextStyle}>{t(item.username)}</Text>
                    </View>
                    <Text style={ChatTabStyles.SmallTextStyle}>{t(item.expert)}</Text>
                    <Text style={ChatTabStyles.SmallTextStyle}>{t(item.lanhuage)}</Text>
                    <View style={ChatTabStyles.FlexRowSpace}>
                        <View>
                            <Text style={ChatTabStyles.SmallTextStyle}>{t(item.Expyears)}</Text>
                            <Text style={ChatTabStyles.PriceTextSet}>{t(item.Minutes)}</Text>
                        </View>
                        <View>
                            <Button onPress={() => onPress()} buttonTextStyle={ChatTabStyles.ButtonTextStyle} buttonStyle={ChatTabStyles.ButtonStyle} title={t("Daily_Horoscope_38")} />
                            <Spacing space={SH(5)} />
                            <Text style={ChatTabStyles.WaitTextStyleGreen}></Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default AstroMallListView;