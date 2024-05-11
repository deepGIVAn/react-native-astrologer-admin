import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Colors, SF} from '../../utils';
import {VectorIcon} from '../../components';

function HeaderLeftMenuIcon(props) {
  const {navigation} = props;
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <VectorIcon
        color={Colors.black_text_color}
        name="navicon"
        icon="EvilIcons"
        size={SF(35)}
      />
    </TouchableOpacity>
  );
}

export default HeaderLeftMenuIcon;
