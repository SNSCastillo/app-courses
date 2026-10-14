import { StyleSheet, Text, type TextProps } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

export function ThemedText({ style, ...rest }: TextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme.text },
        styles.heading,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: 600,
  },
});
