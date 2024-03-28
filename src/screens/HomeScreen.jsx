import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
import { Image } from "expo-image";
import { Text } from "react-native-paper";
import styles from "../config/styles";
import { useEffect, useState } from "react";

export default function HomeScreen({}) {
  const navigation = useNavigation();


  const [contador, setContador] = useState(1);
  
  
  function mostraValorContador(){
    console.log(contador);
  }
  
  useEffect(mostraValorContador, [contador]);

  return (
    <View style={styles.container}>
      {/* note que aqui estamos usando o TEXT de Native Paper*/}
      {/* ele possui alguns props que podemos usar para melhorar a UI */}
      <Text variant="titleLarge">Inicial</Text>
      <Text variant="bodyMedium">Bem vindo</Text>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => navigation.navigate("SobreScreen")}
        title="Ir para sobre"
      />
      <Button
        onPress={() => setContador(contador + 1)}
        title="aumenta contador"
      />
    </View>
  );
}

