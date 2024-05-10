import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView } from "react-native";
import { Style, OrderHistoryStyle, BookPoojaStyle } from '../../styles';
import { Button, Spacing, VectorIcon } from "../../components";
import { SH, SF } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const BuyMembership = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);
  const BookPoojaStyles = useMemo(() => BookPoojaStyle(Colors), [Colors]);

  return (
    <View style={OrderHistoryStyles.MinView}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <Spacing space={SH(20)} />
        <View style={OrderHistoryStyles.PaddingHorizontal}>
          <View style={OrderHistoryStyles.DailyPassView}>
            <View style={OrderHistoryStyles.FlexViewSet}>
              <View>
                <VectorIcon icon="FontAwesome5" name="calendar-check" color={Colors.theme_background} size={SF(32)} />
              </View>
              <View>
                <Text style={OrderHistoryStyles.DailyPassTextStyle}>{t("Astromall_Title_21")}</Text>
              </View>
            </View>
            <Spacing space={SH(20)} />
            <View>
              <View style={BookPoojaStyles.FlexRowPassword}>
                <View style={BookPoojaStyles.DotView} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Astromall_Title_22")}</Text>
              </View>
              <View style={BookPoojaStyles.FlexRowPassword}>
                <View style={BookPoojaStyles.DotView} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Astromall_Title_23")}</Text>
              </View>
              <View style={BookPoojaStyles.FlexRowPassword}>
                <View style={BookPoojaStyles.DotView} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Astromall_Title_24")}</Text>
              </View>
              <View style={BookPoojaStyles.FlexRowPassword}>
                <View style={BookPoojaStyles.DotView} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Astromall_Title_25")}</Text>
              </View>
              <View style={BookPoojaStyles.FlexRowPassword}>
                <View style={BookPoojaStyles.DotView} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Astromall_Title_26")}</Text>
              </View>
              <View style={BookPoojaStyles.FlexRowPassword}>
                <View style={BookPoojaStyles.DotView} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Astromall_Title_27")}</Text>
              </View>
            </View>
            <Spacing space={SH(20)} />
            <View style={BookPoojaStyles.FlexRowBuyNow}>
              <View>
                <Text style={BookPoojaStyles.PriceTextStyle}>₹ 599</Text>
                <Text style={BookPoojaStyles.Colorred}>₹ 99 <Text style={BookPoojaStyles.TendaysTextColor}>{t("Astromall_Title_29")}</Text></Text>
              </View>
              <View style={BookPoojaStyles.BuyNowButton}>
                <Button onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} title={t("Astromall_Title_28")} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default BuyMembership;