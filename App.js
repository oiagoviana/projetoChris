import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <ImageBackground source={require("./src/assets/images/qualiduzindo.png")} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>02/05/2024</Text>
          <Text style={styles.text1}>14ª Edição </Text>
          <Text style={styles.text2}>NÃO ACEITO {"\n"} NÃO PRODUTO {"\n"} NÃO ENVIO DEFEITOS</Text>

        </ImageBackground>

        <Image
          source={require("./src/assets/images/edicaoEspecial.png")}
          style={styles.edicao}
        />
      </View>

      <View>
          <Image
           source = {require('./src/assets/images/foto.png')}
           style={styles.fotoGrupo}
          />

          <Text style={styles.atencao} >ATENÇÃO ao recado importante do time 5S's</Text>

          <Text style={styles.diad} >DIA 03/05 SEXTA FEIRA "DIAD"</Text>

          <Text style={styles.textVermelho}>INÍCIO DO PROJETO DE 5S's: -LINHA 1232 - FECHO DUPLO</Text>
          <Text style={styles.textVermelho2} >-ENTREGA DOS MATERIAIS PENDENTES DA LINHA 913</Text>
      </View>

      <View style={styles.containerFinal}>
          <Text style={styles.textFinal}>Não se esqueçam de ficar</Text>

          <View style={styles.subContainerFinal}>
            <Image
             source={require('./src/assets/images/olho.png')}
             style={styles.imageOlho}
            />

            <Text style={styles.textTime} >Time 5S's</Text>
          </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  image: {
    marginTop: 36,
    height: 100
  },

  text: {
    fontSize: 12,
    marginLeft: 41,
    marginTop: 27
  },

  text1: {
    fontSize: 12,
    marginLeft: 41,
    marginTop: 9,
    fontFamily: 'calibri-regular'
  },

  text2: {
    fontSize: 9,
    marginLeft: 37,
    textAlign: 'justify',
    fontFamily: 'calibri-regular'
  },

  edicao: {
    position: 'absolute',
    top: 86,
    left: 289
  },

  atencao: {
    position: 'absolute',
    width: '35%',
    left: 240,
    top: 16,
    color: 'white',
    fontSize: 22,
    textAlign: 'justify'
  },

  diad:{
    position: 'absolute',
    left: 230,
    top: 140,
    fontSize: 20,
    width: '35%',
    fontWeight: 'bold',
    textAlign: 'justify',
    width: '29%'
  },

  textVermelho: {
    position: 'absolute',
    top:230,
    left:170,
    width:'60%',
    fontSize:16,
    color: 'red',
    fontWeight: 'bold'
  },

  textVermelho2: {
    position: 'absolute',
    top: 280,
    left: 170,
    width: '60%',
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold'
  },

  containerFinal: {
    flex: 1,
    alignItems: 'center'
  },

  textFinal: {
    fontSize: 28,
    fontFamily:'calibri-bold-italic',
    fontStyle: 'italic'
  },

  subContainerFinal: {
    flex:1,
    flexDirection: 'row',
  },

  imageOlho: {
    marginLeft: 110,
    marginRight: 50
  },

  textTime: {
    marginTop: 16,
    backgroundColor: 'yellow',
    height: '8%',
    width: '23%',
    fontSize:18,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Cor da sombra (iOS)
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra (iOS)
    shadowOpacity: 0.3, // Opacidade da sombra (iOS)
    shadowRadius: 4, // Raio da sombra (iOS)
    elevation: 10, // Nível de elevação (Android)
  }
})