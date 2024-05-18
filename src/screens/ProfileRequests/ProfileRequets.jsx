import React, {useState, useMemo} from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Image, Text} from 'react-native';
import {ProfileTabStyles} from '../../styles';
import {RouteName} from '../../routes';
import {SH} from '../../utils';
import {Button, Input, Spacing, ConfirmationAlert} from '../../components';
import {useTranslation} from 'react-i18next';
import images from '../../index';

const ProfileRequests = props => {
  const {navigation} = props;

  return (
    <>
      <Spacing />
      <Text>ProfileRequests</Text>
    </>
  );
};

export default ProfileRequests;
