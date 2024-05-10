import React, { useState, useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, View, TouchableOpacity, } from "react-native";
import { PaymentsStyle } from '../../styles';
import { SF } from "../../utils";
import { Button, Input, VectorIcon } from "../../components";
import { useTranslation } from "react-i18next";

const PaymentModalData = (props) => {
    const { t } = useTranslation();
    const { onPress, PaymentSucceesful } = props;
    const stateArray = {
        CardNumber: "",
        ExpirDate: "",
        Cvv: "",
    };
    const [state, setState] = useState(stateArray);
    const [expiry, setExpiry] = useState('');

    const handleExpiryChange = (text) => {
        // Remove any non-numeric characters from the input
        const formattedText = text.replace(/[^0-9]/g, '');

        if (formattedText.length <= 4) {
            // Format the text as MM/YY
            let formattedExpiry = '';
            for (let i = 0; i < formattedText.length; i++) {
                if (i === 2) {
                    formattedExpiry += '/';
                }
                formattedExpiry += formattedText[i];
            }

            setExpiry(formattedExpiry);
        }
    };

    const { Colors } = useTheme();
    const PaymentsStyles = useMemo(() => PaymentsStyle(Colors), [Colors]);

    return (
        <View style={PaymentsStyles.MinPaymentsView}>
            <View style={PaymentsStyles.FlexRowCloseIcon}>
                <View>
                    <Text style={PaymentsStyles.payviacard}>Pay via Card</Text>
                </View>
                <TouchableOpacity onPress={() => onPress()}>
                    <VectorIcon icon="FontAwesome" name="window-close" color={Colors.theme_background} size={SF(34)} />
                </TouchableOpacity>
            </View>
            <Input
                title={t("Book_Pooja_Title_35")}
                titleStyle={PaymentsStyles.TitleStyle}
                placeholder={t("Book_Pooja_Title_36")}
                maxLength={16}
                onChangeText={(text) => setState({ ...state, CardNumber: text })}
                value={state.CardNumber}
                inputType={'numeric'}
            />
            <View style={PaymentsStyles.FlexRowInput}>
                <View style={PaymentsStyles.Width70}>
                    <Input
                        placeholder={t("Book_Pooja_Title_37")}
                        maxLength={5}
                        onChangeText={handleExpiryChange}
                        value={expiry}
                        inputType={'numeric'}
                    />
                </View>
                <View style={PaymentsStyles.Width30}>
                    <Input
                        titleStyle={PaymentsStyles.TitleStyle}
                        placeholder={t("Book_Pooja_Title_38")}
                        maxLength={3}
                        inputType={'numeric'}
                        onChangeText={(text) => setState({ ...state, Cvv: text })}
                        value={state.Cvv}
                    />
                </View>
            </View>
            <View style={PaymentsStyles.ButtonView}>
                <Button onPress={() => PaymentSucceesful()} title={t("Book_Pooja_Title_39")} />
            </View>
        </View>
    );
}
export default PaymentModalData;