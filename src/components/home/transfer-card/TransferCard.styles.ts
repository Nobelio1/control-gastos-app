import {StyleSheet} from 'react-native';
import {COLORS_CORE, THEMES} from "../../../constants/colors";

export const transferCardStyles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 51,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCardIn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS_CORE.GREEN_INCOME,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCardOut: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS_CORE.RED_EXPENSE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS_CORE.TITLE,
  },
  dateCard: {
    fontSize: 14,
    color: COLORS_CORE.SUBTITLE,
  },
  amountIn: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS_CORE.GREEN_INCOME,
  },
  amountOut: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS_CORE.RED_EXPENSE,
  },
  swipeContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  actionsContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  editAction: {
    backgroundColor: THEMES[0].PRIMARY,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  deleteAction: {
    backgroundColor: COLORS_CORE.RED_EXPENSE,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})