import {StyleSheet} from "react-native";
import {COLORS_CORE} from "../../constants/colors";

export const transferScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS_CORE.BACKGROUND,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollView: {
    gap: 10,
    flexGrow: 1,
    paddingBottom: 80,
  }
});