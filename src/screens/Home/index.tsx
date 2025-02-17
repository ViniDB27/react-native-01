import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participante } from '../../components/Participant/intex'
import { useState } from 'react'

export function Home() {
  const [partcipants, setPartcipants] = useState<string[]>([])
  const [newPartcipant, setNewPartcipant] = useState<string>('')

  function handleParticipantAdd() {
    if (partcipants.includes(newPartcipant)) {
      return Alert.alert(
        'Participante',
        'Já existe um participante na lista com esse nome'
      )
    }
    setPartcipants((state) => [...state, newPartcipant])
    setNewPartcipant('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setPartcipants((state) => state.filter((item) => item !== name))
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={styles.placeholderTextColor.color}
          onChangeText={setNewPartcipant}
          value={newPartcipant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={partcipants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participante
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>A sua lista esta vazia...</Text>
        )}
      />
    </View>
  )
}
