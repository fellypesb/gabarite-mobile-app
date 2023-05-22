import { styles } from './styles';
import CardItem from '../../../components/CardItem';
import { StyledButton } from '../../../components/StyledButton';

import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                O que você deseja realizar? 🤔
            </Text>

            <View style={styles.containerCards}>
                <CardItem  />
                <CardItem onPress="selected"/>
                
            </View>

            <View style={styles.containerButton}>
                <StyledButton type='primary' content='avançar'/>
                <StyledButton type='secundary' content='voltar'/>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    ⚠️ Você ainda não tem nenhuma correção realizada!
                </Text>
            </View>

        </View>
    );
}