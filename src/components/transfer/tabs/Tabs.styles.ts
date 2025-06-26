import {StyleSheet} from 'react-native';
import {COLORS_CORE, THEMES} from "../../../constants/colors";

export const tabsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS_CORE.BACKGROUND,
    borderRadius: 12,
    padding: 4,
    position: 'relative',
  },
  slidingIndicator: {
    position: 'absolute',
    height: '100%',
    borderRadius: 8,
    top: 4,
    zIndex: 1,
  },
  incomeIndicator: {
    backgroundColor: THEMES[0].PRIMARY,
  },
  expenseIndicator: {
    backgroundColor: COLORS_CORE.RED_EXPENSE,
  },
  tab: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  tabText: {
    color: COLORS_CORE.SUBTITLE,
    fontWeight: '500',
    fontSize: 16,
  },
  activeTabText: {
    color: 'white',
    fontWeight: '600',
  },
  content: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    width: '90%',
  },
  contentText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
