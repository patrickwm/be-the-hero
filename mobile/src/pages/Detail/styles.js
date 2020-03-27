import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerButtonIcon: {
    fontSize: 32,
    color: '#e02041'
  },

  incidentItem: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 16,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 16,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 24,
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    color: '#737380'
  },

  incidentContact: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },

  incidentContactTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 32,
  },

  incidentContactDescription: {
    fontSize: 16,
    color: '#737380',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 48,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  },
})
