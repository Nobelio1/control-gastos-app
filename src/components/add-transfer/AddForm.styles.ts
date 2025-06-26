import {StyleSheet} from 'react-native';
import {COLORS_CORE, THEMES} from "../../constants/colors";

export const addFormStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS_CORE.BACKGROUND,
    marginBottom: 45,
  },
  keyboardContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
  },
  inputCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: COLORS_CORE.TITLE,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS_CORE.TITLE,
    marginRight: 8,
  },
  amountInput: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS_CORE.TITLE,
    textAlign: 'center',
    flex: 1,
    minWidth: 100,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  iconContainer: {
    marginRight: 12,
  },
  menuIcon: {
    width: 16,
    height: 16,
    justifyContent: 'space-between',
  },
  menuLine: {
    width: 16,
    height: 2,
    backgroundColor: COLORS_CORE.SUBTITLE,
    borderRadius: 1,
  },
  descriptionInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS_CORE.SUBTITLE,
    paddingVertical: 16,
  },
  typeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  arrowIcon: {
    marginRight: 16,
  },
  arrowText: {
    fontSize: 18,
    color: COLORS_CORE.SUBTITLE,
    fontWeight: 'bold',
  },
  typeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: THEMES[0].PRIMARY,
    borderColor: THEMES[0].PRIMARY,
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  typeText: {
    fontSize: 16,
    color: COLORS_CORE.SUBTITLE,
    fontWeight: '500',
  },
  selectedText: {
    color: COLORS_CORE.TITLE,
    fontWeight: '600',
  },
  inputError: {
    borderColor: COLORS_CORE.RED_EXPENSE,
    borderWidth: 1,
  },
  errorText: {
    color: COLORS_CORE.RED_EXPENSE,
    fontSize: 12,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  spacer: {
    flex: 1,
  },
  saveButtonContainer: {
    marginBottom: 20,
  },
  saveButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.6,
  },
});