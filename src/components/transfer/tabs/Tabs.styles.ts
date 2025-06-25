import {StyleSheet} from 'react-native';

export const tabsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
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
    backgroundColor: '#6366F1',
  },
  expenseIndicator: {
    backgroundColor: '#EF4444',
  },
  tab: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  tabText: {
    color: '#6B7280',
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
