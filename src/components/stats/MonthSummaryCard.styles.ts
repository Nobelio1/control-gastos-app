import {StyleSheet} from 'react-native';

export const monthSummaryCardStyles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  totalPeriod: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
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
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowIconOut: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowType: {
    color: '#4e565c',
    fontSize: 16,
  },
  flowAmount: {
    fontSize: 18,
    fontWeight: '600',
  },
})