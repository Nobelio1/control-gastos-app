import {StyleSheet} from 'react-native';
import {COLORS_CORE} from "../../constants/colors";

export const monthSummaryCardStyles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  totalPeriod: {
    color: COLORS_CORE.SUBTITLE,
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
    color: COLORS_CORE.TITLE,
    fontSize: 26,
    fontWeight: '600',
    paddingVertical: 10,
  },
  io: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  flowCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 8,
    gap: 10
  },
  flowIconIn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS_CORE.GREEN_INCOME,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowIconOut: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS_CORE.RED_EXPENSE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowType: {
    color: COLORS_CORE.TITLE,
    fontSize: 16,
  },
  flowAmount: {
    color: COLORS_CORE.TITLE,
    fontSize: 18,
    fontWeight: '600',
  },
})