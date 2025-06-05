import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const isIPad = Platform.OS === 'ios' && Platform.isPad;

const UnderlinedOption = ({ optionText, highlightWords = [], textColor }) => {
  if (!optionText) return null;

  const regex = new RegExp(`(${highlightWords.join("|")})`, "g");
  return optionText.split(regex).map((part, index) =>
    highlightWords.includes(part) ? (
      <Text key={index} style={[
        styles.baseText,
        styles.underlinedText,
        { color: textColor }
      ]}>
        {part}
      </Text>
    ) : (
      <Text key={index} style={[
        styles.baseText,
        { color: textColor }
      ]}>
        {part}
      </Text>
    )
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: isIPad ? 36 : 18,
    lineHeight: isIPad ? 48 : 24,
  },
  underlinedText: { 
    textDecorationLine: "underline", 
    fontWeight: "bold" 
  },
});

export default UnderlinedOption;