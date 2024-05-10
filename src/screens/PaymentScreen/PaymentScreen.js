import React, { useState,useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal } from "react-native";
import { Style, PaymentsStyle } from '../../styles';
import { Container, Lottie, Spacing, VectorIcon, PaymentModalData, Button, Input } from '../../components';
import images from "../../index";
import { Colors, SH, SF } from '../../utils';
import { RouteName } from '../../routes';
import { useTranslation } from "react-i18next";

const MangePaymentMethode = (props) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const { navigation } = props;
  const stateArray = {
    UPINumber: "",
  };
  const [state, setState] = useState(stateArray);

  const { Colors } = useTheme();
  const PaymentsStyles = useMemo(() => PaymentsStyle(Colors), [Colors]);

  return (
    <Container>
      <ScrollView>
        <View style={Style.Container}>
          <View style={Style.MinViewContentFuill}>
            <View style={PaymentsStyles.MinViewContentFuill}>
              <Lottie Lottiewidthstyle={PaymentsStyles.LootieAnimation}
                source={images.Payments_Option}
              />
              <View style={PaymentsStyles.MinViewBgcolorWhite}>
                <Text style={PaymentsStyles.CreditCardTextStyle}>{t("Book_Pooja_Title_28")}</Text>
                <Spacing space={SH(10)} />
                <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(1) }} style={PaymentsStyles.MinViewFlex}>
                  <View>
                    <Text style={PaymentsStyles.EnterCardNumber}>{t("Book_Pooja_Title_29")}</Text>
                  </View>
                  <View style={PaymentsStyles.ImageFlexRow}>
                    <Image source={images.UPI_Image_Visa} resizeMode="contain" style={PaymentsStyles.ImageUpiStyle} />
                    <Image source={images.UPI_Image_Visa_2} resizeMode="contain" style={PaymentsStyles.ImageUpiStyle} />
                  </View>
                </TouchableOpacity>
                <Spacing space={SH(35)} />
                <Text style={PaymentsStyles.CreditCardTextStyle}>{t("Book_Pooja_Title_30")}</Text>
                <Spacing space={SH(10)} />
                <TouchableOpacity onPress={() => { setModalVisible(true); setmodalcontent(2) }} style={PaymentsStyles.MinViewFlex}>
                  <View>
                    <Text style={PaymentsStyles.EnterCardNumber}>{t("Book_Pooja_Title_31")}</Text>
                  </View>
                  <View style={PaymentsStyles.ImageFlexRow}>
                    <Image source={images.UPI_Image_Visa} resizeMode="contain" style={PaymentsStyles.ImageUpiStyle} />
                    <Image source={images.UPI_Image_Visa_2} resizeMode="contain" style={PaymentsStyles.ImageUpiStyle} />
                  </View>
                </TouchableOpacity>
                <Spacing space={SH(35)} />
                <View style={PaymentsStyles.TopBottomBorderSet}>
                  <Spacing space={SH(15)} />
                  <Text style={PaymentsStyles.CreditCardTextStyle}>{t("Book_Pooja_Title_32")}</Text>
                  <Spacing space={SH(15)} />
                  <View style={PaymentsStyles.CenterImageandText}>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                      <Image source={images.UPI_Image_Visa_3} style={PaymentsStyles.GooglepayImageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)} style={PaymentsStyles.SetPadding}>
                      <Image source={images.UPI_Image_Visa_5} style={PaymentsStyles.GooglepayImageStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)} style={PaymentsStyles.SetPadding}>
                      <Image source={images.UPI_Image_Visa_6} style={PaymentsStyles.Payplestyles} />
                    </TouchableOpacity>
                    <View style={PaymentsStyles.SetPadding}>
                      <TouchableOpacity style={PaymentsStyles.SetPlusBorder} onPress={() => { setModalVisible(true); setmodalcontent(3) }}>
                        <VectorIcon name="plus" icon="AntDesign" size={SF(20)} color={Colors.blue_color} />
                      </TouchableOpacity>
                      <Spacing space={SH(10)} />
                      <Text style={PaymentsStyles.UPIDTextStylew}>{t("Book_Pooja_Title_33")}</Text>
                    </View>
                  </View>
                </View>
                <Spacing space={SH(35)} />
                <Text style={PaymentsStyles.CreditCardTextStyle}>{t("Book_Pooja_Title_34")}</Text>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <Image source={images.UPI_Image_Visa_4} resizeMode="contain" style={PaymentsStyles.PaytmLogoImage} />
                    <Text style={PaymentsStyles.PaytmText}>{t("Book_Pooja_Title_34")}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible) }}
              >
                <View style={PaymentsStyles.CenteredView}>
                  <View style={PaymentsStyles.ModalView}>
                    {modalcontent === 1 ?
                      <PaymentModalData PaymentSucceesful={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)} onPress={() => setModalVisible(!modalVisible)}
                      />
                      :
                      modalcontent === 2 ?
                        <PaymentModalData PaymentSucceesful={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)} onPress={() => setModalVisible(!modalVisible)}
                        />
                        :
                        <View style={PaymentsStyles.MinPaymentsView}>
                          <View style={PaymentsStyles.FlexRowCloseIcon}>
                            <View>
                              <Text style={PaymentsStyles.payviacard}>{t("Book_Pooja_Title_40")}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                              <VectorIcon icon="FontAwesome" name="window-close" color={Colors.theme_background} size={SF(34)} />
                            </TouchableOpacity>
                          </View>
                          <Input
                            inputStyle={PaymentsStyles.InputColor}
                            title={t("Book_Pooja_Title_41")}
                            titleStyle={PaymentsStyles.TitleStyle}
                            placeholder={"upihandle@bankname"}
                            onChangeText={(text) => setState({ ...state, UPINumber: text })}
                            value={state.UPINumber}
                          />
                          <View style={PaymentsStyles.ButtonView}>
                            <Button onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)} title={t("Book_Pooja_Title_42")} />
                          </View>
                        </View>}
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
export default MangePaymentMethode;