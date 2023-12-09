import { View, Text } from 'react-native' ;
import { Button } from 'react-native-paper';

export default function MyButton({label,onPress}){
    return(
        <View style={{shadowColor:'#7b2cbf',shadowRadius:15}}>
        <Button style={{
            backgroundColor:'#7b2cbf',
            borderRadius:6,
            paddingHorizontal:7,
            paddingVertical:4,
        }} onPress={onPress}>
            <Text style={{color:'white',fontSize:17}}>{label}</Text>
        </Button>
        </View>
    )
}