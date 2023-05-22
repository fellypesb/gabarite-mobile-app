import { styles } from './styles';
import CardItem from '../../../components/CardItem';
import { StyledButton } from '../../../components/StyledButton';

import {
    Text,
    View,
} from 'react-native';

export function Home({ navigation }){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                O que você deseja realizar? 🤔
            </Text>

            <View style={styles.containerCards}>
                <CardItem  
                    content="Listar correções já realizadas"
                    icon="iconHome1"
                />
                <CardItem
                    content="Iniciar nova correção de atividades" 
                    onPress="selected"
                    icon="iconHome2"
                />
                
            </View>

            <View style={styles.containerButton}>
                <StyledButton 
                    type='primary'
                    content='avançar'
                    width='123'
                    onPress={() => navigation.navigate('Newfix')}
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