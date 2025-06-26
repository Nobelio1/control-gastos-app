import {StyleSheet} from 'react-native';
import {COLORS_CORE} from "../../constants/colors";

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS_CORE.BACKGROUND,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
