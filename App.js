import { View, Text, StyleSheet} from 'react-native'



export default function App(){

  return(
    <View style={styles.container} >
      <Text>Olá</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#f3f3f3"
  }
})