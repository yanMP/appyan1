import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

/**
 *
 * LOGICA SIMPLES
 * - ENTREI NESSA TELA
 * - OPA! PRECISO BUSCAR A TEMPERATURA
 * - COMO? QUEM É O CARA QUE EXECUTA QUANDO ENTRA?
 * - LEMBREI É O U... COM [] VAZIO
 * -
 */
const API = "58f0cf79195fef97df91af42c5973568";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Joinville&appid=${API}&units=metric`;

export default function TempoScreenAula() {
  const [temperatura, setTemperatura] = useState("");

  const fetchTempo = async () => {
    // vou lá buscar o JSON na internet
    const resposta = await fetch(URL);
    // recebo essa informação e converto ela em programação que é JSON
    const data = await resposta.json();
    console.log(resposta); // formato texto
    console.log(data); // já está convertido pra JSON
    setTemperatura(data);
  };

  useEffect(() => {
    fetchTempo();
  }, []);
  // array vazio no final de useEffect simula simboliza
  // que a função será executada apenas uma vez, quando o componente for montado

  return (
    <View>
      {temperatura?.weather[0] && (
        <>
          {console.log(temperatura.weather.icon)}
          <Text>Temperatura em Joinville</Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${temperatura.weather.icon}@2x.png`,
            }}
            style={{ width: 100, height: 100 }}
          />
        </>
      )}

      <Text variant="headlineLarge">Possui mais variedades</Text>
      <Text>Temperatura atual: {temperatura?.main?.temp}</Text>
      <Text>Temperatura Máxima: {temperatura?.main?.temp_max}</Text>
      <Text>Temperatura Minima: {temperatura?.main?.temp_min}</Text>
    </View>
  );
}
