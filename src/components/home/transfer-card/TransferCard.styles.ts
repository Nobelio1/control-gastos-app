import {StyleSheet} from 'react-native';

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
    backgroundColor: '#379137',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCardOut: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DB3535',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 16,
    fontWeight: '600',
  },
  dateCard: {
    fontSize: 14,
    color: '#666',
  },
  amountIn: {
    fontSize: 16,
    fontWeight: '700',
    color: '#379137',
  },
  amountOut: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DB3535',
  },
})