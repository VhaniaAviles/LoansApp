import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";

const Requested = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Listado de solicitudes</Text>
      <View style={styles.registerContainer}>
        <View style={styles.registroPrestamo}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Fecha: </Text>
            <Text style={styles.infoText}>Artículo:</Text>
            <Text style={styles.infoText}>Cantidad:</Text>
            <Text style={styles.infoText}>Solicitado por:</Text>
          </View>
        </View>
        <View style = {styles.buttonContent}>
          <View>
            <TouchableOpacity style={styles.returnButtonAllow}>
              <Text style={styles.returnButtonText}>Permitir</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.returnButtonDeny}>
              <Text style={styles.returnButtonText}>Denegar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  returnButtonAllow: {
    width: 150,
    backgroundColor: "#4CCD23",
    marginTop: 15,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  returnButtonDeny: {
    width: 150,
    backgroundColor: "#DC1111",
    marginTop: 15,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  returnButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonContent:{
    flexDirection: "row",
  },

  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  registroPrestamo: {
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
  },
  infoText: {
    fontWeight: "750",
    fontSize: 15,
    color: "#333",
  },
  noLoansText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
});

export default Requested;
