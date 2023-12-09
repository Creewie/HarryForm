import { Switch } from 'react-native' ;

export default function MySwitch({value,onClick}){
    return(
    <Switch 
        trackColor={{false:'#e0aaff', true:'#e0aaff'}}
        thumbColor='#9f86c0'
        activeThumbColor="#9f86c0"
        value={value} 
        onClick={onClick}
    />
    )
}