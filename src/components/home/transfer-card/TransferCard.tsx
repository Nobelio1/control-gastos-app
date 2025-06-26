import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
  withSpring,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import {Ionicons} from '@expo/vector-icons';
import {transferCardStyles} from "./TransferCard.styles";
import {useNavigation} from '@react-navigation/native';
import {Transaction, TransactionType} from "../../../types/form.types";
import {formatTransactionDate} from "../../../utils/dateUtils";
import {useTransactionStore} from "../../../storage/transactionStore";

interface Props {
  transaction: Transaction;
}

const SWIPE_THRESHOLD = 100;
const ACTION_WIDTH = 70;

export function TransferCard({transaction}: Props) {
  const {description, date, amount, type, id} = transaction;
  const deleteTransaction = useTransactionStore(state => state.deleteTransaction);
  const navigation = useNavigation<any>();

  const translateX = useSharedValue(0);
  const itemHeight = useSharedValue(80);
  const opacity = useSharedValue(1);

  const contextX = useSharedValue(0);

  const isIncome = (type: TransactionType) => {
    return type === TransactionType.INCOME ? '+' : '-';
  };

  const showDeleteAlert = () => {
    Alert.alert(
      'Eliminar transacción',
      '¿Estás seguro de que quieres eliminar esta transacción?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            opacity.value = withSpring(0, {damping: 15});
            itemHeight.value = withSpring(0, {damping: 15}, (finished) => {
              if (finished) {
                runOnJS(deleteTransaction)(id);
              }
            });
          }
        }
      ]
    );
  };

  const handleDelete = () => {
    translateX.value = withSpring(0, {damping: 15});

    setTimeout(() => {
      showDeleteAlert();
    }, 300);
  };

  const handleEdit = () => {
    translateX.value = withSpring(0, {damping: 15});
    setTimeout(() => {
      navigation.navigate('Add', {
        editTransaction: transaction
      });
    }, 300);
  };

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      contextX.value = translateX.value;
    })
    .onUpdate((event) => {
      const newTranslateX = contextX.value + event.translationX;
      translateX.value = Math.min(0, Math.max(-ACTION_WIDTH * 2, newTranslateX));
    })
    .onEnd((event) => {
      const shouldOpen = event.translationX < -SWIPE_THRESHOLD;

      if (shouldOpen) {
        translateX.value = withSpring(-ACTION_WIDTH * 2, {damping: 15});
      } else {
        translateX.value = withSpring(0, {damping: 15});
      }
    });

  const tapGesture = Gesture.Tap()
    .onStart(() => {
      if (translateX.value !== 0) {
        translateX.value = withSpring(0, {damping: 15});
      }
    });

  const composedGesture = Gesture.Race(panGesture, tapGesture);

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
      opacity: opacity.value,
      height: itemHeight.value,
    };
  });

  const actionsStyle = useAnimatedStyle(() => {
    const actionOpacity = interpolate(
      translateX.value,
      [-ACTION_WIDTH * 2, 0],
      [1, 0],
      Extrapolation.CLAMP
    );

    return {
      opacity: actionOpacity,
    };
  });

  return (
    <View style={transferCardStyles.swipeContainer}>
      <Animated.View style={[transferCardStyles.actionsContainer, actionsStyle]}>
        <TouchableOpacity
          style={transferCardStyles.editAction}
          onPress={handleEdit}
          activeOpacity={0.7}
        >
          <Ionicons name="create-outline" size={20} color="white"/>
          <Text style={transferCardStyles.actionText}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={transferCardStyles.deleteAction}
          onPress={handleDelete}
          activeOpacity={0.7}
        >
          <Ionicons name="trash-outline" size={20} color="white"/>
          <Text style={transferCardStyles.actionText}>Eliminar</Text>
        </TouchableOpacity>
      </Animated.View>

      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[transferCardStyles.container, cardStyle]}>
          <View style={transferCardStyles.cardInfo}>
            <View style={
              isIncome(type) !== '+'
                ? transferCardStyles.iconCardOut
                : transferCardStyles.iconCardIn
            }>
              <Text style={transferCardStyles.iconText}>
                {description[0].toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={transferCardStyles.titleCard}>{description}</Text>
              <Text style={transferCardStyles.dateCard}>{formatTransactionDate(date)}</Text>
            </View>
          </View>
          <View>
            <Text style={
              isIncome(type) === '+'
                ? transferCardStyles.amountIn
                : transferCardStyles.amountOut
            }>
              {isIncome(type)}S/.{amount.toLocaleString()}
            </Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}