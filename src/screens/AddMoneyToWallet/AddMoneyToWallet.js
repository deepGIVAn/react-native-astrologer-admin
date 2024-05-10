import React, { useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, FlatList } from "react-native";
import { Style, OrderHistoryStyle } from '../../styles';
import { AddMoneyView, Spacing } from "../../components";
import { SH } from '../../utils';
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";
import { ScrollView } from 'react-native-virtualized-view';

const AddMoneyToWallet = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();

  const { Colors } = useTheme();
  const OrderHistoryStyles = useMemo(() => OrderHistoryStyle(Colors), [Colors]);

  const AddMoneydata = [
    {
      "id": 1,
      "text": '₹ 50',
    },
    {
      "id": 2,
      "text": '₹ 100',
    },
    {
      "id": 3,
      "text": '₹ 200',
    },
    {
      "id": 4,
      "text": '₹ 500',
      "Discounttext": 'Add_Money_Title_1',
      "background": '#5111d1',
    },
    {
      "id": 5,
      "text": '₹ 1000',
      "Discounttext": 'Add_Money_Title_2',
      "background": '#5111d1',
    },
    {
      "id": 6,
      "text": '₹ 2000',
      "Discounttext": 'Add_Money_Title_3',
      "background": '#b32d15',
    },
    {
      "id": 7,
      "text": '₹ 3000',
      "Discounttext": 'Add_Money_Title_4',
      "background": '#b32d15',
    },
    {
      "id": 8,
      "text": '₹ 4000',
      "Discounttext": 'Add_Money_Title_2',
      "background": '#5111d1',
    },
    {
      "id": 9,
      "text": '₹ 8000',
      "Discounttext": 'Add_Money_Title_5',
      "background": '#5111d1',
    },
    {
      "id": 10,
      "text": '₹ 12000',
      "Discounttext": 'Add_Money_Title_3',
      "background": '#b32d15',
    },
    {
      "id": 11,
      "text": '₹ 15000',
      "Discounttext": 'Add_Money_Title_2',
      "background": '#b32d15',
    },
    {
      "id": 12,
      "text": '₹ 20000',
      "Discounttext": 'Add_Money_Title_6',
      "background": '#5111d1',
    },
    {
      "id": 13,
      "text": '₹ 50000',
      "Discounttext": 'Add_Money_Title_7',
      "background": '#5111d1',
    },
    {
      "id": 14,
      "text": '₹ 100000',
      "Discounttext": 'Add_Money_Title_8',
      "background": '#b32d15',
    },
    {
      "id": 15,
      "text": '₹ 200000',
      "Discounttext": 'Add_Money_Title_5',
      "background": '#b32d15',
    },

  ]
  return (
    <View style={OrderHistoryStyles.MinView}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <View style={OrderHistoryStyles.MinViewTwo}>
          <Spacing space={SH(20)} />
          <View>
            <Text style={OrderHistoryStyles.AvilableBlance}>{t("Add_Money_Title_9")}</Text>
            <Text style={OrderHistoryStyles.MoneyTextStyle}>₹ 0</Text>
          </View>
          <Spacing space={SH(20)} />
          <FlatList
            data={AddMoneydata}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (<AddMoneyView
              item={item}
              onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)}
              index={index}
            />)}
            keyExtractor={item => item.id}
          />
          <Spacing space={SH(20)} />
        </View>
      </ScrollView>
    </View>
  );
};
export default AddMoneyToWallet;
