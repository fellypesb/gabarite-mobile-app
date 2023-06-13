import { styles } from './styles';
import { StyledButton } from '../../../components/StyledButton';

import {
    FlatList,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type ItemData = {
    id: string;
    title: string;
    description: string;
};

const DATA: ItemData[] = [
    {
        id: '3016dfccdb59287f6f29efc95abb2704',
        title: '1ª Avaliação TM202',
        description: 'Atividade referente a primeira avaliação da turma TM202'
    },

    {
        id: 'f7a7a52181545b9870820714c69ca27c',
        title: '2ª Avaliação TM202',
        description: 'Atividade referente a segunda avaliação da turma TM202'
    },

    {
        id: 'fe0b89446dc3fb860798ade9933f9496',
        title: '3ª Avaliação TM202',
        description: 'Atividade referente a terceira avaliação da turma TM202'
    },

    {
        id: 'fe0b89446dc3fb860798ade9933f9',
        title: '4ª Avaliação TM202',
        description: 'Atividade referente a quarta avaliação da turma TM202'
    },

];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
}

const Item = ({item, onPress, backgroundColor}: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>    
        <Text style={[styles.textHeadItem]}>{item.title}</Text>
        <Text style={[styles.textDescriptionItem]}>{item.description}</Text>
    </TouchableOpacity>
)

export function Corrections({ navigation }){
    const [selectedId, setSelectedId] = useState<string>();
    const [list, setList] = useState();
    const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#00B2A8' : '#DCDCDC';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerTitles}>
                <Text style={styles.headingText}>
                    Minhas Correções ✅
                </Text>

                <Text style={styles.textSubtitle}>
                    Escolha uma de suas correções para visualizar
                </Text>
            </View>
            
            <SafeAreaView style={styles.containerFlat}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>
             
            <View style={styles.containerButtons}>
                <StyledButton
                    type='secundary'
                    content='voltar'
                    width='123'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>

        </View>
    )
}