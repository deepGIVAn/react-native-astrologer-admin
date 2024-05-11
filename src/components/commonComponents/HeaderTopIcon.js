import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SearchStyle} from '../../styles';
import {VectorIcon, ColorPicker, ConfirmationAlert} from '../../components';
import {Colors, SF} from '../../utils';
import {useTranslation} from 'react-i18next';
import {RouteName} from '../../routes';

const HeaderTopIcon = props => {
  const {
    onPressPrice,
    onPresSearch,
    onPresFilter,
    Price,
    Searchtrue,
    Filter,
    Wallet,
    ColorPickers,
  } = props;
  const {t} = useTranslation();
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };

  var alertdata = {
    logout: t('Are_You_Sure_logout'),
  };

  return (
    <View style={SearchStyle.FlexRowMinSearch}>
      <TouchableOpacity
        style={SearchStyle.PaddingIconRight}
        onPress={() => {
          setAlertVisible(true);
          setAlertMessage(alertdata.logout);
        }}>
        <VectorIcon
          icon="MaterialCommunityIcons"
          name="logout"
          size={SF(25)}
          color={Colors.black_text_color}
        />
      </TouchableOpacity>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPressCancel={() => setAlertVisible(!alertVisible)}
        onPress={() => {
          setAlertVisible(!alertVisible);
          onoknutton();
        }}
        cancelButtonText={t('Cancel_Button')}
        buttonText={t('Ok')}
      />
    </View>
  );
};
export default HeaderTopIcon;
