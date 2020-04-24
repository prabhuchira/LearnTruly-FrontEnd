import * as React from 'react';

import {Overlay} from 'react-native-elements';
import {View, TouchableOpacity, Text, Button, AsyncStorage} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Feather';
import CreateClass from './CreateClass';
import UICard from '../../UIComponents/UICard';
import {ScrollView} from 'react-native-gesture-handler';
import { removeUserToken } from '../../actions/actions';
import { useDispatch } from 'react-redux';
// import {useSelector, useDispatch} from 'react-redux';


const ManagementDashboard = props => {
  // console.log('getting token')


  const _signOutAsync = async () => {
    await AsyncStorage.clear();
   props.navigation.navigate('Auth');
  };

  const [state, setState] = React.useState(true); //set to false

  const [values, setValues] = React.useState([]);


  const changeState = () => {
    setState(!state);
  };

  React.useEffect(()=>{
    console.log('windows');
  },[])


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Overlay isVisible={state} onBackdropPress={changeState} height={530}>
        <CreateClass closeModal={changeState} />
      </Overlay>

      {values.length >= 0 ? (
        <ScrollView>
          {values.map((item, index) => {
            return (
              <TouchableOpacity activeOpacity={0.6}>
                <UICard
                  key={index}
                  className={item.className}
                  facultyName={item.facultyName}
                  no_of_students={item.no_of_students}
                  year={item.year}
                  edit={() => {
                    changeState();
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : null}

      {/* <Button onPress={_signOutAsync} title="drone" /> */}

      {/* <Text>{JSON.stringify(selector)}</Text> */}

      <ActionButton
        buttonColor={'#56667A'}
        renderIcon={() => <Icon name="plus" color="white" size={25} />}>
        <ActionButton.Item
          buttonColor="#3671bf"
          title="Create Class"
          onPress={() => setState(true)}>
          <Icon name="mail" color="white" size={20} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default ManagementDashboard;
