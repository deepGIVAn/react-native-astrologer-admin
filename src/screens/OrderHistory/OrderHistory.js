import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Style, OrderHistoryStyle } from '../../styles';
import { Button, Lottie, Spacing } from "../../components";
import { SH } from '../../utils';
import images from "../../index";
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const OrderHistory = (props) => {
  const [tabshow, settabshow] = useState(1);
  const [wallet, setwallet] = useState(1);
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);

  return (
    <View style={OrderHistoryStyles.MinView}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <Spacing space={SH(20)} />
        <View style={OrderHistoryStyles.FlexRow}>
          <TouchableOpacity onPress={() => settabshow('1')} style={OrderHistoryStyles.TabView}>
            <Text style={tabshow == 1 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Add_Money_Title_10")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => settabshow('2')} style={OrderHistoryStyles.TabView}>
            <Text style={tabshow == 2 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Add_Money_Title_11")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => settabshow('3')} style={OrderHistoryStyles.TabView}>
            <Text style={tabshow == 3 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Add_Money_Title_12")}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => settabshow('4')} style={OrderHistoryStyles.TabView}>
            <Text style={tabshow == 4 ? OrderHistoryStyles.WalletTexttheame : OrderHistoryStyles.WalletTextStyle}>{t("Add_Money_Title_13")}</Text>
          </TouchableOpacity>
        </View>
        <View>
          {tabshow == 1 ?
            <View style={OrderHistoryStyles.WalletViewStyle}>
              <Spacing space={SH(20)} />
              <View style={OrderHistoryStyles.FlexRowMoney}>
                <View>
                  <Text style={OrderHistoryStyles.AvilableBlance}>{t("Add_Money_Title_14")}</Text>
                  <Text style={OrderHistoryStyles.MoneyTextStyle}>₹ 0</Text>
                </View>
                <View style={OrderHistoryStyles.ButtonViewWidth}>
                  <Button onPress={() => navigation.navigate(RouteName.ADD_MONEY_TO_WALLET)} title={t("Add_Money_Title_15")} />
                </View>
              </View>
              <Spacing space={SH(20)} />
              <View style={OrderHistoryStyles.FlexRowMoney}>
                <TouchableOpacity onPress={() => setwallet('1')} style={wallet == 1 ? OrderHistoryStyles.TransactionViewSecond : OrderHistoryStyles.TransactionView}>
                  <Text style={wallet == 1 ? OrderHistoryStyles.TransctionText : OrderHistoryStyles.TransctionTextColor}>{t("Add_Money_Title_16")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setwallet('2')} style={wallet == 2 ? OrderHistoryStyles.TransactionViewSecond : OrderHistoryStyles.TransactionView}>
                  <Text style={wallet == 2 ? OrderHistoryStyles.TransctionText : OrderHistoryStyles.TransctionTextColor}>{t("Add_Money_Title_17")}</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Lottie source={images.No_Data_Found} />
                <Spacing space={SH(120)} />
                <Text style={OrderHistoryStyles.NodataAvilable}>{t("Add_Money_Title_18")}</Text>
              </View>
            </View> : null}
          {tabshow == 2 ?
            <View>
              <Spacing space={SH(120)} />
              <Lottie source={images.No_Data_Found} />
              <Spacing space={SH(120)} />
              <Text style={OrderHistoryStyles.NodataAvilable}>{t("Add_Money_Title_19")}</Text>
            </View> : null}
          {tabshow == 3 ?
            <View style={OrderHistoryStyles.WalletViewStyle}>
              <Spacing space={SH(20)} />
              <View style={OrderHistoryStyles.FlexRowMoney}>
                <TouchableOpacity onPress={() => setwallet('1')} style={wallet == 1 ? OrderHistoryStyles.TransactionViewSecond : OrderHistoryStyles.TransactionView}>
                  <Text style={wallet == 1 ? OrderHistoryStyles.TransctionText : OrderHistoryStyles.TransctionTextColor}>{t("Add_Money_Title_20")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setwallet('2')} style={wallet == 2 ? OrderHistoryStyles.TransactionViewSecond : OrderHistoryStyles.TransactionView}>
                  <Text style={wallet == 2 ? OrderHistoryStyles.TransctionText : OrderHistoryStyles.TransctionTextColor}>{t("Add_Money_Title_21")}</Text>
                </TouchableOpacity>
              </View>
              <Spacing space={SH(120)} />
              <Lottie source={images.No_Data_Found} />
              <Spacing space={SH(120)} />
              <Text style={OrderHistoryStyles.SecondSmallText}>{t("Add_Money_Title_22")}</Text>
            </View> : <View>
              <Spacing space={SH(120)} />
              <Lottie source={images.No_Data_Found} />
              <Spacing space={SH(120)} />
              <Text style={OrderHistoryStyles.SecondSmallText}>{t("Add_Money_Title_23")}</Text>
            </View>}
        </View>
      </ScrollView>
    </View>
  );
};
export default OrderHistory;
