import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Sidemenu} from '../../styles';
import {RouteName} from '../../routes';
import {useTranslation} from 'react-i18next';
import Blogimg from '../../images/custom/blog.png';
import Adminlogo from '../../images/custom/adminlogo.png';
import AddingAstrologers from '../../images/custom/addingasrologers.png';
import Horoscope from '../../images/custom/horoscope.png';
import Membership from '../../images/custom/membership.png';
import Notification from '../../images/custom/notifications.png';
import CreateAstro from '../../images/custom/create_astro.png';
import MonthlyHoro from '../../images/custom/monthly_horoscope.png';
import Purchases from '../../images/custom/goods.png';

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
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <Image source={Adminlogo} style={Sidemenu.adminlogo} />
          <Text style={Sidemenu.adminstyle}>Admin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.BLOGS)}>
          <Image source={Blogimg} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Blogs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ASTROLOGER_LIST)}>
          <Image source={Horoscope} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Astrologers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <Image source={Notification} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Profile Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.CREATE_ASTROLOGER)}>
          <Image source={CreateAstro} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Create Astrologers</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.ASTROFAQ)}>
          <Image source={Membership} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>AstroUniverse FAQ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.YEARLYHOROSCOPE)}>
          <Image source={AddingAstrologers} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Yearly Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.MONTHLYHOROSCOPE)}>
          <Image source={MonthlyHoro} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Monthly Horoscope</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Sidemenu.flexrowset}
          onPress={() => Onpressfunction(RouteName.PURCHASES)}>
          <Image source={Purchases} style={Sidemenu.listimage} />
          <Text style={Sidemenu.hometextstyle}>Purchases</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;
