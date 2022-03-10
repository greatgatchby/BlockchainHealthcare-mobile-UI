import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredHorizontalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 11,
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 0,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minHeight: '90%',
    paddingTop: 40,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  settingsText: {
    minWidth: 170,
    marginRight: 50,
  },
  flex: {displary: 'flex', flexDirection: 'row'},
  wrapFlex: {displary: 'flex', flexWrap: 'wrap'},
  m2: {
    padding: 20,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  Notification: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: '',
    minWidth: 0,
    backgroundColor: '#fff',
    border: '3px solid rgba(0,0,0,.125)',
    borderRadius: 3,
    paddingBottom: 10,
    margin: 5,
  },
  card: {
    position: 'relative',
    display: 'flex',
    minWidth: '100%',
    backgroundColor: '#fff',
    border: '3px solid rgba(0,0,0,.125)',
    minHeight: 85,
  },
  smallText: {
    fontSize: 13,
  },
});

export default styles;
