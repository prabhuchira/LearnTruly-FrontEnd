import * as React from 'react';

import {Overlay} from 'react-native-elements';
import {View, TouchableOpacity, Text, Button, AsyncStorage, ActivityIndicator} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';
import CreateClass from './CreateClass';
import UICard from '../../UIComponents/UICard';
import {ScrollView} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CLASSES_FUNC } from '../../redux/actions/actions';
// import {useSelector, useDispatch} from 'react-redux';


const ManagementDashboard = props => {
  // console.log('getting token')
  const win = useSelector(state=>state);
  const dispatch = useDispatch();
  
 let ignore = false;
  const _signOutAsync = async () => {
    await AsyncStorage.clear();
   props.navigation.navigate('Auth');
  };

  const Loading = ()=>{
    return(
      <ActivityIndicator></ActivityIndicator>
    )
  }




  const [state, setState] = React.useState(false); //set to false

  const [values, setValues] = React.useState([]);

  const [isLoading,setIsLoading] = React.useState(true);


  const changeState = () => {
    setState(!state);
  };

  React.useEffect(()=>{
    
    const getClasses = async ()=>{
      await  dispatch(GET_CLASSES_FUNC());
      setIsLoading(false);
   }
    getClasses();
    // console.log(win,"Windows");
 
  },[]);


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Overlay isVisible={state} onBackdropPress={changeState} height={530}>
        <CreateClass closeModal={changeState} />
      </Overlay>

      {win.classes.length >= 0 ? (
        <ScrollView>
          {win.classes.map((item, index) => {
            return (
              <TouchableOpacity activeOpacity={0.6}>
                <UICard
                  key={index}
                  className={item.className}
                  facultyName={item.facultyName}
                  no_of_students={item.no_of_students}
                  selectBranch={item.selectBranch}
                  year={item.year}
                  edit={() => {
                    // changeState();
                    console.log(item.className,"from dashboard");
                    console.log(item.selectBranch,"from dashboard")
                  
                    props.navigation.navigate('getStudents',{className:item.className,selectBranch:item.selectBranch})
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : <Loading></Loading>}

      {/* <Button onPress={_signOutAsync} title="drone" /> */}
      <Button onPress={()=>_signOutAsync() } title="drone" />
        
        
        
        {/* {
          isLoading ? <Loading></Loading> : win.classes.map(item=>{
            return   <Text>{JSON.stringify(item)}</Text>
          })
        } */}
    

      <ActionButton
        buttonColor={'white'}
        renderIcon={() => <Icon name="plus" color="#3671bf" size={25} />}>
        <ActionButton.Item
          buttonColor="white"
          title="Create Class"
          onPress={() => setState(true)}>
          <Icon name="mail" color="#3671bf" size={20} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

ManagementDashboard['navigationOptions'] = ({navigation,props}) => {
  return {
    headerTitle: 'Classes',
    headerStyle: {
      // backgroundColor:"#3671bf",
      // backgroundColor:
    },
    // headerTintColor:"white",
    headerRight: () => {
      // console.log(props,"muther")
      return (
        <View style={{flexDirection:"row",padding:10}}>
           {/* <Icon
          name="sync"
          onPress={() => {
            dispatch(GET_CLASSES_FUNC())
          }}
          color="rgb(184, 184, 184)"
          size={25}
          style={{marginHorizontal:20}}
        /> */}


        <Icon
          name="settings"
          onPress={() => {
            navigation.toggleDrawer();
          }}
          color="rgb(184, 184, 184)"
          size={25}
         
        />
         

        </View>
      );
    },
    headerRightContainerStyle: {
      marginHorizontal: 20,
      elevation: 15,
    },
  };
}


export default ManagementDashboard;
