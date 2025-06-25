import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {LinearGradient} from 'expo-linear-gradient';
import {TransactionForm, TransactionType} from "../../types/form.types";
import {addFormStyles} from './AddForm.styles';
import {useTransactionStore} from "../../storage/transactionStore";

export function AddForm() {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: {errors, isValid}
  } = useForm<TransactionForm>({
    defaultValues: {
      amount: 0,
      description: '',
      type: TransactionType.INCOME,
    },
    mode: 'onChange'
  });

  const addTransaction = useTransactionStore((state) => state.addTransaction);
  const isLoading = useTransactionStore((state) => state.isLoading);
  const setLoading = useTransactionStore((state) => state.setLoading);

  const selectedType = watch('type');

  const formatCurrency = (value: number): string => {
    if (value === 0) return '';
    return value.toLocaleString('es-ES');
  };

  const parseCurrency = (text: string): number => {
    const cleanText = text.replace(/\D/g, '');
    return cleanText === '' ? 0 : parseInt(cleanText);
  };

  const onSubmit = (data: TransactionForm) => {
    setLoading(true);
    addTransaction(data)
    reset()
    Keyboard.dismiss();
    Alert.alert('Exito', 'Transacción guardada correctamente')
    setLoading(false);
  };

  return (
    <SafeAreaView style={addFormStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={addFormStyles.keyboardContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={addFormStyles.content}>
            <View style={addFormStyles.inputCard}>
              <Controller
                control={control}
                name="amount"
                rules={{
                  required: 'El monto es requerido',
                  min: {
                    value: 1,
                    message: 'El monto debe ser mayor a 0'
                  }
                }}
                render={({field: {onChange, value}}) => (
                  <View style={addFormStyles.amountContainer}>
                    <Text style={addFormStyles.currencySymbol}>S/. </Text>
                    <TextInput
                      style={[
                        addFormStyles.amountInput,
                        errors.amount && addFormStyles.inputError
                      ]}
                      value={formatCurrency(value)}
                      onChangeText={(text) => {
                        const numericValue = parseCurrency(text);
                        onChange(numericValue);
                      }}
                      placeholder="0"
                      keyboardType="numeric"
                      placeholderTextColor="#999"
                    />
                  </View>
                )}
              />
              {errors.amount && (
                <Text style={addFormStyles.errorText}>{errors.amount.message}</Text>
              )}
            </View>

            <View style={addFormStyles.inputCard}>
              <View style={addFormStyles.descriptionContainer}>
                <View style={addFormStyles.iconContainer}>
                  <View style={addFormStyles.menuIcon}>
                    <View style={addFormStyles.menuLine}/>
                    <View style={addFormStyles.menuLine}/>
                    <View style={addFormStyles.menuLine}/>
                  </View>
                </View>
                <Controller
                  control={control}
                  name="description"
                  rules={{
                    required: 'La descripción es requerida',
                    minLength: {
                      value: 3,
                      message: 'La descripción debe tener al menos 3 caracteres'
                    }
                  }}
                  render={({field: {onChange, value}}) => (
                    <TextInput
                      style={[
                        addFormStyles.descriptionInput,
                        errors.description && addFormStyles.inputError
                      ]}
                      value={value}
                      onChangeText={onChange}
                      placeholder="Ingresar una descripción"
                      placeholderTextColor="#999"
                    />
                  )}
                />
              </View>
              {errors.description && (
                <Text style={addFormStyles.errorText}>{errors.description.message}</Text>
              )}
            </View>

            <View style={addFormStyles.inputCard}>
              <Controller
                control={control}
                name="type"
                render={({field: {onChange}}) => (
                  <View style={addFormStyles.typeSelector}>
                    <View style={addFormStyles.arrowIcon}>
                      <Text style={addFormStyles.arrowText}>⇅</Text>
                    </View>
                    <View
                      style={addFormStyles.typeOption}
                    >
                      <TouchableOpacity
                        onPress={() => onChange(TransactionType.INCOME)}
                      >
                        <View style={[
                          addFormStyles.checkbox,
                          selectedType === TransactionType.INCOME && addFormStyles.checkedBox
                        ]}>
                          {selectedType === TransactionType.INCOME && (
                            <Text style={addFormStyles.checkmark}>✓</Text>
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text style={[
                        addFormStyles.typeText,
                        selectedType === TransactionType.INCOME && addFormStyles.selectedText
                      ]}>
                        Ingresos
                      </Text>
                    </View>

                    <View
                      style={addFormStyles.typeOption}
                    >
                      <TouchableOpacity
                        onPress={() => onChange(TransactionType.EXPENSE)}
                      >
                        <View style={[
                          addFormStyles.checkbox,
                          selectedType === TransactionType.EXPENSE && addFormStyles.checkedBox
                        ]}>
                          {selectedType === TransactionType.EXPENSE && (
                            <Text style={addFormStyles.checkmark}>✓</Text>
                          )}
                        </View>
                      </TouchableOpacity>
                      <Text style={[
                        addFormStyles.typeText,
                        selectedType === TransactionType.EXPENSE && addFormStyles.selectedText
                      ]}>
                        Gastos
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>

            <View style={addFormStyles.spacer}/>

            <TouchableOpacity
              style={[
                addFormStyles.saveButtonContainer,
                !isValid && addFormStyles.disabledButton
              ]}
              onPress={handleSubmit(onSubmit)}
              activeOpacity={0.8}
              disabled={!isValid}
            >
              <LinearGradient
                colors={
                  isValid
                    ? ['#6366F1', '#8B5CF6', '#EC4899']
                    : ['#9CA3AF', '#9CA3AF', '#9CA3AF']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={addFormStyles.saveButton}
              >
                <Text style={addFormStyles.saveButtonText}>
                  {isLoading ? 'Guardando...' : 'Guardar'}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

