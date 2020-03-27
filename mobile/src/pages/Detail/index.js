import React from 'react'
import { useNavigation, useRoute } from '../Incidents/node_modules/@react-navigation/native'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'
import { Feather } from '@expo/vector-icons'

import logoImage from '../../assets/logo.png'

import styles from './styles'

export default function Detail() {
  const route = useRoute()
  const navigation = useNavigation()

  const incident = route.params.incident
  const caseValue =
    Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)

  const message = `
    Olá, ${incident.name}!
    Estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${caseValue}.
  `

  function navigateBack() {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" style={styles.headerButtonIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.incidentItem}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>{incident.name} de {incident.city}-{incident.state}</Text>

        <Text style={styles.incidentProperty}>Caso:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Valor:</Text>
        <Text style={styles.incidentValue}>{caseValue}</Text>
      </View>

      <View style={styles.incidentContact}>
        <Text style={styles.incidentContactTitle}>Salve o dia!</Text>
        <Text style={styles.incidentContactTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.incidentContactDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
