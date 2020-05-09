import * as React from 'react';

import {Overlay} from 'react-native-elements';
import {View, TouchableOpacity, Text, Button, AsyncStorage, ActivityIndicator, Alert} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';
import CreateEvent from './CreateEvent';
import UIEventCard from '../../UIComponents/UIEventCard';
import {ScrollView} from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { GET_EVENTS_FUNC } from '../../redux/actions/actions';
// import {useSelector, useDispatch} from 'react-redux';
import { StyleSheet } from 'react-native'
import * as Permissions from "expo-permissions";

const FacultyDashboard = props => {
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

  const [editItem,setEditItem] = React.useState(null);
  
  let [num,setNum] = React.useState(0);

  const changeState = () => {
    setState(!state);
  };

  const changeEditItem = (data)=>{
    setEditItem(data);
  }

  React.useEffect(()=>{
    
    const getClasses = async ()=>{
      await  dispatch(GET_EVENTS_FUNC());
      setIsLoading(false);
   }
    getClasses();
    // console.log(win,"Windows");
 
  },[]);

  const changeNum = () => {
    setNum(num++);
  }

  const UIEventComponent = (props)=>{
    return <UIEventCard
    key={props.index}
    className={props.data.className}
    topicName={props.data.topicName}
    selectBranch={props.data.selectBranch}
    year={props.data.selectYear}
    fromdate={props.data.fromdateAndTime}
   
  />
  }

  React.useEffect(()=>{
  //   const getClasses = async ()=>{
  //     await  dispatch(GET_EVENTS_FUNC());
  //     setIsLoading(false);
  //  }
  //   getClasses();
  // const registerFunc = async()=> {
  //   let {status} = await Permissions.askAsync(Permissions.LOCATION);
  //   console.log(status);
  // }
  

  // registerFunc();


  const getClasses = async ()=>{
    await  dispatch(GET_EVENTS_FUNC());
    setIsLoading(false);
 }
  getClasses();
  console.log('windows')
  },[num])


  return (
    <View style={{flex: 1, backgroundColor: 'white', marginBottom: 20}}>
      <Overlay
        fullScreen
        isVisible={state}
        animationType="slide"
        animated={true}
        onBackdropPress={changeState}
        height={530}>
        <CreateEvent
          closeModal={changeState}
          editItem={editItem}
          changeNum={changeNum}
        />
      </Overlay>

      {win.events.length >= 0 ? (
        <ScrollView style={{marginTop: 10, marginBottom: 10}}>

          <Text style={styles.textStyles}>Yesterday</Text>
                    {win.events.map((item, index) => {
                      if (
                        new Date(item.fromdateAndTime).getDate() < new Date().getDate()
                      ) {
                        return (
                          <View>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              onPress={() => {
                                setEditItem(item), setState(true);
                              }}>
                              <UIEventComponent data={item} index={index} />
                            </TouchableOpacity>
                          </View>
                        );
                      }
                    })}

          <Text style={styles.textStyles}>Today</Text>
          {win.events.map((item, index) => {
            if (
              new Date(item.fromdateAndTime).getDate() == new Date().getDate()
            ) {
              return (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onLongPress={() => {
                      setEditItem(item), setState(true);
                    }}>
                    <UIEventComponent data={item} index={index} />
                  </TouchableOpacity>
                </View>
              );
            }
          })}

          <Text style={styles.textStyles}>Tommorow</Text>
          {win.events.map((item, index) => {
            if (
              new Date(item.fromdateAndTime).getDate() == new Date().getDate() + 1
            ) {
              return (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onLongPress={() => {
                      setEditItem(item), setState(true);
                    }}>
                    <UIEventComponent data={item} index={index} />
                  </TouchableOpacity>
                </View>
              );
            }
          })}

      <Text style={styles.textStyles}>Upcoming</Text>
          {win.events.map((item, index) => {
            if (
              new Date(item.fromdateAndTime).getDate() > new Date().getDate() + 1
            ) {
              return (
                <View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onLongPress={() => {
                      setEditItem(item), setState(true);
                    }}>
                    <UIEventComponent data={item} index={index} />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>
      ) : (
        <Loading />
      )}

      <Button onPress={() => _signOutAsync()} title="drone" />

      {/* {
          isLoading ? <Loading></Loading> : win.classes.map(item=>{
            return   <Text>{JSON.stringify(item)}</Text>
          })
        } */}

      <ActionButton
        buttonColor={'#26a1f5'}
        // elevation={10}
        renderIcon={() => <Icon name="plus" color="white" size={25} />}>
        <ActionButton.Item
          buttonColor="white"
          title="Create Event"
          onPress={() => {
            setEditItem(null);
            setState(true);
          }}>
          <Icon name="mail" color="#3671bf" size={20} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles:{marginTop:20,marginHorizontal:15,fontSize:14,color:"grey"}
})

FacultyDashboard['navigationOptions'] = ({navigation,props}) => {
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


export default FacultyDashboard;
