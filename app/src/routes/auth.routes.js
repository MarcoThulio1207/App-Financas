import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          
          headerStyle:{
            backgroundColor:'#3b3dbf',
            headerShadowVisible: true
          }
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;