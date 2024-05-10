import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, Text } from "react-native";
import { Style, PaymentsStyle } from '../../styles';
import { Container, Spacing, Lottie, Button } from '../../components';
import { SH } from '../../utils';
import images from '../../index';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const PaymentSuccessFully = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const PaymentsStyles = useMemo(() => PaymentsStyle(Colors), [Colors]);

  return (
    <Container>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContentFuill}>
            <View style={PaymentsStyles.MinViewContentFuill}>
              <Spacing space={SH(150)} />
              <View style={PaymentsStyles.BgcolorWhite}>
                <View style={PaymentsStyles.CenterView}>
                  <View style={PaymentsStyles.BackWhite}>
                    <Lottie Lottiewidthstyle={PaymentsStyles.Lootianimation}
                      source={images.Payments_Successful}
                    />
                  </View>
                </View>
                <Spacing space={SH(30)} />
                <Text style={PaymentsStyles.TextySytyles}>$ 456</Text>
                <Spacing space={SH(10)} />
                <Text style={PaymentsStyles.TextySytylesTwo}>{t("Paymnets_Title_1")}</Text>
                <Spacing space={SH(10)} />
                <Text style={PaymentsStyles.ParegraphText}>{t("Paymnets_Title_2")}</Text>
                <Spacing space={SH(20)} />
                <Text style={PaymentsStyles.DateTewxtStyle}>{t("Paymnets_Title_3")}</Text>
                <Text style={PaymentsStyles.DateTewxtStyle}>{t("Paymnets_Title_4")}</Text>
                <Spacing space={SH(30)} />
                <Button onPress={() => navigation.navigate(RouteName.HOME_TAB)} title={t("Paymnets_Title_5")} />
                <Spacing space={SH(30)} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
export default PaymentSuccessFully;