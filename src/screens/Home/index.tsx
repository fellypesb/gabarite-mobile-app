import { styles } from './styles';
import { StyledButton } from '../../../components/StyledButton';

import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';

import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type ItemData = {
    id: string;
    title: string;
    icon: object;
};

const DATA: ItemData[] = [
    {
        id: 'opcao_1',
        title: 'Listar correções já realizadas',
        icon: require('../../../assets/iconHome1.png')
    },

    {
        id: 'opcao_2',
        title: 'Iniciar nova correção de atividades',
        icon: require('../../../assets/iconHome2.png')
    }
];

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
}

const Item = ({item, onPress, backgroundColor}: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>    
        <Text style={[styles.textHeadItem]}>{item.title}</Text>
        <Image source={item.icon} style={styles.cardImage}/>
    </TouchableOpacity>
)

export function Home({ navigation }){
    const [selectedId, setSelectedId] = useState<string>();
    const [page, setPage] = useState<string>();
    
    const renderItem = ({item}: {item: ItemData}) => {
        const backgroundColor = item.id === selectedId ? '#00B2A8' : '#DCDCDC';
        selectedId === 'opcao_2' ? setPage('Newfix') : setPage('Corrections');
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
            <Text style={styles.title}>
                O que você deseja realizar? 🤔
            </Text>

            <SafeAreaView style={styles.containerFlat}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                />
            </SafeAreaView>


            {/* <View style={styles.containerCards}>
                <CardItem  
                    content="Listar correções já realizadas"
                    icon="iconHome1"
                />
                <CardItem
                    content="Iniciar nova correção de atividades" 
                    onPress="selected"
                    icon="iconHome2"
                />
            </View> */}

            <View style={styles.containerButton}>
                <StyledButton 
                    type='primary'
                    content='avançar'
                    width='123'
                    onPress={() => navigation.navigate(page)}
                />
                <StyledButton 
                    type='secundary' 
                    content='voltar'
                    width='123'
                    onPress={() => navigation.navigate('Login')}
                />
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    ⚠️ Você ainda não tem nenhuma correção realizada!
                </Text>
            </View>

        </View>
    );
}