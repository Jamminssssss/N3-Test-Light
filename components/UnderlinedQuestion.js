import React from 'react';
import { Text, View, Platform } from 'react-native';

const isIPad = Platform.OS === 'ios' && Platform.isPad;

const UnderlinedQuestion = ({ question, underlineWords = [], textColor }) => {
  // 밑줄을 적용할 단어들을 기준으로 문자열을 나눔
  const regex = new RegExp(`(${underlineWords.join('|')})`, 'g');
  const parts = question.split(regex);

  return (
    <View style={{ padding: isIPad ? 20 : 10 }}>
      <Text style={{ 
        fontSize: isIPad ? 42 : 20, 
        textAlign: 'center', 
        color: textColor, 
        lineHeight: isIPad ? 56 : 28,
        fontWeight: 'bold'
      }}>
        {parts.map((part, i) =>
          underlineWords.includes(part) ? (
            <Text key={i} style={{ 
              textDecorationLine: 'underline', 
              fontWeight: 'bold', 
              color: textColor,
              fontSize: isIPad ? 42 : 20,
              lineHeight: isIPad ? 56 : 28
            }}>
              {part}
            </Text>
          ) : (
            <Text key={i} style={{ 
              color: textColor,
              fontSize: isIPad ? 42 : 20,
              lineHeight: isIPad ? 56 : 28
            }}>
              {part}
            </Text>
          )
        )}
      </Text>
    </View>
  );
};

export default UnderlinedQuestion;