import {StyleSheet} from 'react-native';

export const transferSummaryStyles = StyleSheet.create({
  container: {
    backgroundColor: '#8B5CF6',
    padding: 12,
    borderRadius: 8,
  },
  total: {
    alignItems: 'center',
    marginBottom: 16,
  },
  totalPeriod:{
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 6,
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
  flowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flowType:{
    color: '#fff',
    fontSize: 16,
  },
  flowAmount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
})