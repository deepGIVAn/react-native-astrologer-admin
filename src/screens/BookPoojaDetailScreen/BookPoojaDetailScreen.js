import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Style, BookPoojaStyle } from '../../styles';
import images from '../../index';
import { Spacing, Button, VectorIcon, Modal, RadioButton } from '../../components';
import { SH, SF } from '../../utils';
import { Image } from "react-native-elements";
import CountDown from 'react-native-countdown-component';
import { RouteName } from "../../routes";
import { useTranslation } from "react-i18next";

const BookPoojaDetailScreen = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const { t } = useTranslation();
  const stateValue = {
    IndividualPooja: "",
    PrivatePooja: "",
  }
  const [state, setState] = useState(stateValue);

  const arrayData = [
    { label: t("Add_Money_Title_24"), value: 'option1' },
    { label: t("Add_Money_Title_25"), value: 'option2' },
  ];

  const { Colors } = useTheme();
  const BookPoojaStyles = useMemo(() => BookPoojaStyle(Colors), [Colors]);

  return (
    <View>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContent}>
            <Spacing space={SH(20)} />
            <View style={BookPoojaStyles.BorderWidth}>
              <View>
                <Image source={images.BookPooja_Details_2} resizeMode="contain" style={BookPoojaStyles.DetailesImageStyle} />
              </View>
              <Spacing space={SH(20)} />
              <View style={BookPoojaStyles.FlexRowSet}>
                <View>
                  <Text style={BookPoojaStyles.HoursTextStyle}>{t("Add_Money_Title_26")}</Text>
                </View>
                <View>
                  <CountDown
                    size={SF(18)}
                    until={95000}
                    onFinish={() => alert('Finished')}
                    digitStyle={BookPoojaStyles.DigitStyle}
                    digitTxtStyle={BookPoojaStyles.DigitStyleTwo}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{ m: 'Minutes', s: 'Second', h: 'Hours' }}
                    separatorStyle={BookPoojaStyles.ColorTransparent}
                    showSeparator
                  />
                </View>
              </View>
            </View>
            <View style={BookPoojaStyles.ContentViewStyle}>
              <Spacing space={SH(20)} />
              <Text style={BookPoojaStyles.NameTextStyle}>{t("Add_Money_Title_27")}</Text>
              <Text style={BookPoojaStyles.SmallTextStyleDetailes}>{t("Add_Money_Title_28")}</Text>
              <View style={BookPoojaStyles.TopBorderView}>
                <View style={BookPoojaStyles.FlexRowTextStyle}>
                  <View>
                    <Image source={images.BookPooja_Details_1} resizeMode="contain" style={BookPoojaStyles.UserImagestyle} />
                  </View>
                  <View>
                    <Text style={BookPoojaStyles.NameTextStyle}>{t("Add_Money_Title_29")}</Text>
                    <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_30")}</Text>
                  </View>
                </View>
                <Spacing space={SH(20)} />
                <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_31")}</Text>
              </View>
              <View style={BookPoojaStyles.TopBorderView}>
                <Text style={BookPoojaStyles.NameTextStyle}>{t("Add_Money_Title_32")}</Text>
                <Spacing space={SH(15)} />
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_33")}</Text>
                </View>
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_34")}</Text>
                </View>
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_35")}</Text>
                </View>
              </View>
              <View style={BookPoojaStyles.TopBorderView}>
                <Text style={BookPoojaStyles.NameTextStyle}>{t("Add_Money_Title_36")}</Text>
                <Spacing space={SH(15)} />
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_37")}</Text>
                </View>
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_38")}</Text>
                </View>
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_39")}</Text>
                </View>
              </View>
              <View style={BookPoojaStyles.TopBorderView}>
                <Text style={BookPoojaStyles.NameTextStyle}>{t("Add_Money_Title_41")}</Text>
                <Spacing space={SH(15)} />
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_42")}</Text>
                </View>
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_43")}</Text>
                </View>
                <View style={BookPoojaStyles.FlexRowPassword}>
                  <View style={BookPoojaStyles.DotView} />
                  <Text style={BookPoojaStyles.VIPtextStyle}>{t("Add_Money_Title_44")}</Text>
                </View>
              </View>
              <Spacing space={SH(120)} />
              <Modal
                modalVisible={modalVisible}
                setModalVisible={() => setModalVisible()}
              >
                <View style={BookPoojaStyles.BackgriundWhite}>
                  <TouchableOpacity style={BookPoojaStyles.CloseButtonStyle} onPress={() => {
                    setModalVisible(false);
                  }}>
                    <VectorIcon name="window-close" icon="FontAwesome" size={SF(35)} color={Colors.theme_background} />
                  </TouchableOpacity>
                  <View style={BookPoojaStyles.CenterImage}>
                    <Image source={images.BookPooja_Details_3} resizeMode="contain" style={BookPoojaStyles.ModalImageStyle} />
                  </View>
                  <Spacing space={SH(5)} />
                  <Text style={BookPoojaStyles.ModalUserName}>{t("Add_Money_Title_45")}</Text>
                  <Spacing space={SH(5)} />
                  <Text style={BookPoojaStyles.ModalTitleText}>{t("Add_Money_Title_46")}</Text>
                  <Text style={BookPoojaStyles.SecondTitle}>{t("Add_Money_Title_47")}</Text>
                  <Spacing space={SH(20)} />
                  <RadioButton
                    arrayData={arrayData}
                    onChangeText={(text) => setState({ ...state, IndividualPooja: text })}
                    value={state.IndividualPooja}
                  />
                  <Button onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN)} title={t("Add_Money_Title_48")} />
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={BookPoojaStyles.BottomViewAbsolute}>
        <Button onPress={() => setModalVisible(true)} title={t("Add_Money_Title_49")} />
      </View>
    </View>
  );
};
export default BookPoojaDetailScreen;