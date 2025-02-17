import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface ParticipanteProps {
  readonly name: string
  readonly onRemove: () => void
}

export function Participante({ name, onRemove }: ParticipanteProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
