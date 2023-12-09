import {View, Text, TextInput} from 'react-native' ;
import { useState } from 'react';

const MyTextInput = ({
    label,
    value, 
    placeholder,
    onChangeText,
    mutliline = false,
    numberOfViewLine = 1
}) =>{
    // const [Focused, setFocused] = useState(false)
    return (
        <View style={{flexDirection:"column", alignItems:"stretch"}}>
            <Text style={{fontSize:15, margin:3}}>{label}:</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                mutliline={mutliline}
                numberOfLines={numberOfViewLine}
                // onFocus={()=>{setFocused(true)}}
                // onBlur={()=>{setFocused(false)}}
                style={{
                    height: 40,
                    borderColor:"gray",
                    borderWidth:1,
                    borderRadius:8,
                    shadowColor:'#7b2cbf',
                    shadowRadius:10,
                    // shadowOpacity:Focused?1:0,
                    marginBottom:10,
                    padding:10,
                }}
            />
        
        </View>
    )
}

export default MyTextInput ;