import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { loginStyle } from '../../../styles/loginComponent/LoginViewStyle';

const Menu = () => {
  return (
    <ImageBackground
      source={require("../../../../assets/fondo.jpg")}
      imageStyle={{ opacity: 0.25 }}
      style={styles.backgroundContainer}
      resizeMode="cover"
    >
      <View style={styles.columnContainer}>
        <View style={styles.column}>
          <View style={styles.containerOption}>
            <Image
              style={styles.iconOptionMenu}
              source={require("../../../../assets/iconLoans.png")}
            />
            <Text style={styles.textRol}>Prestamos</Text>
          </View>

          <View style={styles.containerOption}>
            <Image
              style={styles.iconOptionMenu}
              source={require("../../../../assets/iconManuals.png")}
            />
            <Text style={styles.textRol}>Guias de Usuario</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.containerOption}>
            <Image
              style={styles.iconOptionMenu}
              source={require("../../../../assets/iconDatasheets.png")}
            />
            <Text style={styles.textRol}>Datasheet</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Menu;

const styles = StyleSheet.create({
  backgroundContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  
  columnContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "80%",
  },

  column: {
    flex: 1, 
  },

  containerOption: {
    padding: 20,
    margin: 10,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
  },

  iconOptionMenu:{
    width: 120,
    height: 120,
  },

  textRol: {
    textAlign: "center",
  },

  textSelectRol:{
    opacity: 0.5,
  }
});
