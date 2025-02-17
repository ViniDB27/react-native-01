import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  // ScrollView,
  FlatList,
} from 'react-native'
import { styles } from './styles'
import { Participante } from '../../components/Participant/intex'

export function Home() {
  const partcipants = [
    'Vinicio Brejinski',
    'Vitoria Brejinski',
    'Levy Brejinski',
    'Guto Telles',
    'Amanda Telles',
    'Isis Telles',
    'Pessoa 1',
    'Pessoa 2',
    'Pessoa 3',
    'Pessoa 4',
    'Pessoa 5',
    'Pessoa 6',
  ]

  function handleParticipantAdd() {
    console.log('Registrando')
  }

  function handleParticipantRemove(name: string) {
    console.log(name)
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
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {partcipants.map((partcipant) => (
          <Participante
            key={partcipant}
            name={partcipant}
            onRemove={() => handleParticipantRemove(partcipant)}
          />
        ))}
      </ScrollView> */}
    </View>
  )
}
