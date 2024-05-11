import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Sidemenu} from '../../styles';
import {RouteName} from '../../routes';
import {ConfirmationAlert, VectorIcon} from '../../components';
import {Colors, SF} from '../../utils';
import {useTranslation} from 'react-i18next';
import Blogimg from '../../images/custom/blog.png';
import Adminlogo from '../../images/custom/adminlogo.png';
import AddingAstrologers from '../../images/custom/addingasrologers.png';
import Courses from '../../images/custom/courses.png';
import Horoscope from '../../images/custom/horoscope.png';
import Membership from '../../images/custom/membership.png';
import Notification from '../../images/custom/notifications.png';

const CustomSidebarMenu = props => {
  const {t} = useTranslation();
  const {navigation} = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    logout: t('Are_You_Sure_logout'),
  };
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  };
  const Onpressfunction = e => {
    navigation.toggleDrawer();
    navigation.navigate(e);
  };

  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <View style={Sidemenu.flexrowset}>
          <Image source={Adminlogo} style={Sidemenu.adminlogo} />
          <Text style={Sidemenu.adminstyle}>Admin</Text>
        </View>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <Image source={Blogimg} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Blog Writing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.BOOK_A_POOJA_SCREEN)}>
          <Image source={Horoscope} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Monthly & Yearly Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ORDER_HISTORTY_SCREEN)}>
          <Image source={Membership} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>
            List of Membership Customers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ORDER_HISTORTY_SCREEN)}>
          <Image source={Courses} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>
            Adding Courses to Astromall
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.BUY_MEBERSHIP)}>
          <Image source={Notification} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>
            Astrologers Profile Request
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.PAYMENT_SCREEN)}>
          <Image source={AddingAstrologers} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Adding Astrologers in List</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;
