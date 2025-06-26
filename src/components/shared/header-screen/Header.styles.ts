import {StyleSheet} from 'react-native'
import {COLORS_CORE} from "../../../constants/colors";

export const HeaderStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS_CORE.TITLE ,
  },
})