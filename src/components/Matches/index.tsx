import React from 'react';
import { FlatList } from 'react-native';

import { Match } from '../Match';
import { TEAMS } from '../../utils/teams';

import { Container, Title } from './styles';
import { Search } from '../Search';

export function Matches() {
  function handleAccessibilityAction(actionName: string) {
    console.log("Ação do usuário: ", actionName)
  }

  return (
    <Container>
      <Title>Próximas partidas</Title>

      <Search />

      <FlatList
        data={TEAMS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Match
            data={item}
            accessibilityActions={[
              { name: 'activate', label: 'Ver detalhes do jogo' },
            ]}
            onAccessibilityAction ={e => handleAccessibilityAction (e.nativeEvent.actionName)}
            // Diz para o usuário as ações que estão disponíveis de acordo com a interação do usuário
            // é necessário implementar "onAccessibilityAction" para lidar com solicitações de ação
            // onLongPress
          />
        )}
      />
    </Container>
  );
}