import {StyleSheet} from 'react-native';

export const transferHistoryStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  contentContainer: {
    gap: 10,
    paddingBottom: 20,
  },
  emptyContentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyText: {
    fontSize: 60,
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
})