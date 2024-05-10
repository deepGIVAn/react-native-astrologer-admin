import React, { useState,useMemo } from 'react';
import { useTheme } from '@react-navigation/native';
import { FlatList } from "react-native";
import { ChatTabView } from '../../components';
import { ChatTabStyle } from '../../styles';
import images from '../../index';

const TopCategory = () => {

  const [chatCategory, setchatCategory] = useState('Book_Pooja_Title_13');
  const Setsectedcolor = (item) => {
    setchatCategory(item);
  }

  const CategoryData = [
    {
      "id": 1,
      "text": 'Book_Pooja_Title_13',
      "iconname": 'border-all',
    },
    {
      "id": 2,
      "text": 'Book_Pooja_Title_14',
      "iconname": images.DiscountImage,
    },
    {
      "id": 3,
      "text": 'Filter_Title_23',
      "iconname": "heart",
    },
    {
      "id": 4,
      "text": 'Book_Pooja_Title_15',
      "iconname": "cast-for-education",
    },
    {
      "id": 5,
      "text": 'Book_Pooja_Title_16',
      "iconname": "target",
    },
    {
      "id": 6,
      "text": 'Book_Pooja_Title_17',
      "iconname": "handshake",
    },
    {
      "id": 7,
      "text": 'Book_Pooja_Title_18',
      "iconname": "health-and-safety",
    },
    {
      "id": 8,
      "text": 'Book_Pooja_Title_19',
      "iconname": "finance",
    },
    {
      "id": 9,
      "text": 'Paymnets_Title_6',
      "iconname": "business-time",
    },
    {
      "id": 10,
      "text": 'Book_Pooja_Title_20',
      "iconname": "child",
    },
    {
      "id": 11,
      "text": 'Book_Pooja_Title_21',
      "iconname": "mother-heart",
    },
  ]

  const { Colors } = useTheme();
  const ChatTabStyles = useMemo(() => ChatTabStyle(Colors), [Colors]);

  return (
    <FlatList
      data={CategoryData}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (<ChatTabView
        item={item}
        index={index}
        chatCategory={chatCategory}
        onPress={() => Setsectedcolor(item.text)}
      />)}
      keyExtractor={item => item.id}
      contentContainerStyle={ChatTabStyles.Paddingleft}
    />
  );
};
export default TopCategory;