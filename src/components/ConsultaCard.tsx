import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Consulta } from "../interfaces/consulta";

interface Props {
  consulta: Consulta;
}

function formatarData(dataHora: string): string {
  const data = new Date(dataHora);
  const dia = data.toLocaleDateString("pt-BR");
  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dia} às ${hora}`;
}

export function ConsultaCard({ consulta }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.medico}>Dr(a). {consulta.medico?.nome}</Text>
      <Text style={styles.paciente}>Paciente: {consulta.paciente?.nome}</Text>
      <Text style={styles.data}>{formatarData(consulta.dataHora)}</Text>
      <Text style={styles.valor}>R$ {consulta.valor.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12 },
  medico: { fontSize: 16, fontWeight: "bold" },
  paciente: { fontSize: 14, color: "#666" },
  data: { fontSize: 14, color: "#333", marginTop: 4 },
  valor: { fontSize: 14, fontWeight: "bold", marginTop: 4 },
});