import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Input, Button } from './styles';

export function Search() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

  return (

    <Container>
      <Input
        placeholder="Encontrar partida..."
      />

      <Button
        onPress={() => setLoading(!loading)}
        disabled={loading}
        accessibilityHint="Consultar partidas pelo nome do time."
        // Diz para o usuário o que irá acontecer ao interagir com o componente(Botão)
        accessibilityState={{ disabled: loading }}
        // Diz para o usuário qual é o estado atual do componente
        accessibilityValue={{ text: loading ? 'Buscando partidas, aguarde.' : 'Botão de pesquisa disponível novamente' }}
      >
        {
          loading
            ? <ActivityIndicator color="#FFF" />
            : <Feather name="search" size={18} color="#FFF" />
        }
      </Button>
    </Container>
  );
}