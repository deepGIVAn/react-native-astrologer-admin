import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { BuyMembershipStyle, HomeTabStyle } from '../../styles';
import { Spacing, VectorIcon, LiveAstrologers } from '../../components';
import { SF, SH } from '../../utils';
import images from '../../index';
import { RouteName } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const DailyHoroscopeView = (props) => {
    const { item, index } = props;
    const navigation = useNavigation();
    const { t } = useTranslation();

    const { Colors } = useTheme();
    const BuyMembershipStyles = useMemo(() => BuyMembershipStyle(Colors), [Colors]);
    const HomeTabStyles = useMemo(() => HomeTabStyle(Colors), [Colors]);

    const LiveAstrologersdata = [
        {
            "id": 1,
            "text": 'Daily_Horoscope_1',
            "imageseye": images.Daily_Horoscope_1,
            "IconName": 'call',
            "url": RouteName.AUDIO_CALL_SCREEN,
        },
        {
            "id": 2,
            "text": 'Daily_Horoscope_2',
            "imageseye": images.Daily_Horoscope_6,
            "IconName": 'videocam',
            "url": RouteName.LIVE_SCREEN,
        },
        {
            "id": 3,
            "text": 'Daily_Horoscope_3',
            "imageseye": images.Daily_Horoscope_3,
            "IconName": 'videocam',
            "url": RouteName.LIVE_SCREEN,
        },
        {
            "id": 4,
            "text": 'Daily_Horoscope_4',
            "imageseye": images.Daily_Horoscope_7,
            "IconName": 'call',
            "url": RouteName.AUDIO_CALL_SCREEN,
        },
        {
            "id": 5,
            "text": 'Daily_Horoscope_5',
            "imageseye": images.Daily_Horoscope_2,
            "IconName": 'videocam',
            "url": RouteName.LIVE_SCREEN,
        },
        {
            "id": 6,
            "text": 'Daily_Horoscope_6',
            "imageseye": images.Daily_Horoscope_4,
            "IconName": 'call',
            "url": RouteName.AUDIO_CALL_SCREEN,
        },
        {
            "id": 7,
            "text": 'Daily_Horoscope_7',
            "imageseye": images.Daily_Horoscope_5,
            "IconName": 'call',
            "url": RouteName.AUDIO_CALL_SCREEN,
        },
        {
            "id": 8,
            "text": 'Daily_Horoscope_8',
            "imageseye": images.Daily_Horoscope_4,
            "IconName": 'videocam',
            "url": RouteName.LIVE_SCREEN,
        },
    ]
    return (
        <>
            {index === 2 ?
                <>
                    <Spacing space={SH(10)} />
                    <View style={HomeTabStyles.FlexRowLive}>
                        <Text style={HomeTabStyles.LiveAstrologyText}>{t("Daily_Horoscope_9")}</Text>
                        <TouchableOpacity onPress={() => onPress()}>
                            <Text style={HomeTabStyles.ViewAllTextStyle}>{t("Daily_Horoscope_10")}</Text>
                        </TouchableOpacity>
                    </View>
                    <Spacing space={SH(10)} />
                    <FlatList
                        data={LiveAstrologersdata}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<LiveAstrologers
                            item={item}
                            onPress={() => navigation.navigate(RouteName.AUDIO_CALL_SCREEN)}
                        />)}
                        keyExtractor={item => item.id}
                    />
                    <Spacing space={SH(40)} />
                </>
                :
                <View style={BuyMembershipStyles.MinViewText}>
                    <View style={BuyMembershipStyles.FlexRowIconText}>
                        <View style={BuyMembershipStyles.FlexRow}>
                            {index === 0 ?
                                <VectorIcon icon="AntDesign" name={item.IconName} color={Colors.red} size={SF(18)} />
                                : null}
                            {index === 1 || index === 5 || index === 3 || index === 4 ?
                                <VectorIcon icon="MaterialIcons" name={item.IconName} color={Colors.red} size={SF(18)} />
                                : null}
                            <Text style={BuyMembershipStyles.LoveTextStyle}>{t(item.text)}</Text>
                        </View>
                        <View>
                            <Text style={BuyMembershipStyles.ParesantegText}>{t(item.Parsenteg)}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(10)} />
                    <Text style={BuyMembershipStyles.ParegraphTextStyle}>{t(item.paregraph)}</Text>
                </View>}
        </>
    );
}
export default DailyHoroscopeView;