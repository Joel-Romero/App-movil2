import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Pagina1Screen from '../screems/Pagina1Screen';
import Pagina2Screen from '../screems/Pagina2Screen';
import Pagina3Screen from '../screems/Pagina3Screen';
import Pagina4Screen from '../screems/Pagina4Screen';
import Pagina5Screen from '../screems/Pagina5Screen';
import Pagina6Screen from '../screems/Pagina6Screen';
import { createStackNavigator } from '@react-navigation/stack';
import Pagina7Screen from '../screems/Pagina7Screen';


const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
            <Tab.Navigator>           
                <Tab.Screen name="Pagina1" component={Pagina1Screen}/>
                <Tab.Screen name="Pagina2" component={Pagina2Screen}/>
                <Tab.Screen name="Pagina3" component={Pagina3Screen}/>
                <Tab.Screen name="Pagina4" component={Pagina4Screen}/>
                <Tab.Screen name="Pagina5" component={Pagina5Screen}/>
                <Tab.Screen name="Pagina6" component={Pagina6Screen}/>
                <Tab.Screen name="Pagina7" component={Pagina7Screen}/>
            </Tab.Navigator>
    );
    }


    const Stack = createStackNavigator();

    function MyStack(){
        return(
            <Stack.Navigator>
            <Stack.Screen name="Ventana" component={Pagina1Screen}/>                
            <Stack.Screen name="bottom" component={MyTabs}/>
            </Stack.Navigator>
        );
    }
export default function BottomTabNavigation(){
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>

    )
    };
