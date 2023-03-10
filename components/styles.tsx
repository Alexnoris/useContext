import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      card: {
        flexDirection: 'row',
        backgroundColor: '#B7B49F',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
      },
      detailsContainer: {
        flex: 1,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      joinedDate: {
        fontSize: 14,
        marginBottom: 5,
      },
      expireDate: {
        fontSize: 14,
        marginBottom: 5,
      },
      contactContainer: {
        flexDirection: 'row',
      },
      contact: {
        fontSize: 14,
        marginRight: 10,
        color: '#007AFF',
      },
    
});

export default styles;
