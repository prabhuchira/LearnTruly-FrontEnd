import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Dimensions } from 'react-native';

import {Text, Button} from 'react-native-elements';


const UICard = (props) => {
    const colors = ["blue","green","red","violet","yellow","pink","brown","purple","black","salmon","grey"]

    let selectedColor = colors[Math.floor(Math.random()*10)]

    React.useEffect(()=>{
        
        
        console.log(props)
        // selectedColor=
    })

    return (



        <LinearGradient
        
                    start={{x: 0.0, y: 0.25}} end={{x: 1, y: 1.0}}
                    
            // locations={[0,0.5,0.6]}
            colors={['#ffffff',"#f2f7f7"]}

            style={
                {
                    flex:1,
                    minHeight:250,
                    // backgroundColor:se,
                    marginHorizontal:15,
                    marginTop:20,
                    borderRadius:5,
                    elevation:5,
                    paddingTop:10,
                    paddingHorizontal:20,
                    // borderTopColor:colors[Math.floor(Math.random()*10)],
                     borderTopColor:selectedColor,
                    
                    borderTopWidth:5,
                    justifyContent:"center",
                    paddingBottom:0
                    
                

                }
            }
        >
                <View>
                    <View style={{flexDirection:"row",alignItems:"stretch",justifyContent:"space-around"}}>
                    <Text  style={
                        {
                            fontFamily:"TitilliumWeb-SemiBold",
                            // fontFamily:"Montserrat-SemiBold",
                            fontSize:40,
                            color:"#505353",
                            textTransform:"uppercase",
                            
                            
                
                        }}>
                    
                    {props.className}</Text>

                    <Text style={
                        {
                            fontFamily:"TitilliumWeb-SemiBold",
                            // fontFamily:"Montserrat-SemiBold",
                            fontSize:40,
                            color:"#505353",
                            textTransform:"uppercase"
                            
                        }}>
                    
                    {`${props.year} Year`}</Text>

                      
                    </View>
                    <View >
                        <Text style={{textAlign:"center",margin:14,
                        fontSize:16
                        }}>Students alloted : {props.no_of_students}</Text>
                        <Text style={{textAlign:"center",fontStyle:"italic",
                        fontSize:16
                        }}>Administered by : {props.facultyName}</Text>

                    </View>
                    
                    <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:20,padding:0}}>
                        <Button 
                        type="outline"
                        icon={{
                          name: "edit",
                          size: 20,
                          color:"#3671bf"
                        //   color: "white"
                        }}

                        // titleStyle={{color:"#ff3535"}}
                     // buttonStyle={{borderColor:"#ff3535"}}
                     onPress={()=>props.edit() }
                       

                        containerStyle={styles.editAndDelete} title="Edit" ></Button>
                        <Button  containerStyle={styles.editAndDelete}  title="Delete"
                         buttonStyle={{borderColor:"#ff3535"}}
                         titleStyle={{color:"#ff3535"}}
                         icon={{
                            name: "delete",
                            size: 20,
                            color: "#ff3535"
                          }}

                        type="outline"
                        ></Button>
                    </View>
                </View>
                </LinearGradient>
    )
}

export default UICard;

const styles = {
    editAndDelete:{
        width:Dimensions.get('window').width / 2.5,
        

    }
}