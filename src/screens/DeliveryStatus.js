import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Dimensions,
    ScrollView,
    Alert
} from 'react-native';
import images from "../../assests/Image";
import colors from "../../assests/Colors";
import config from "../../assests/Config";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from '../common';

const {height} = Dimensions.get('window');

export default class DeliveryStatus extends Component {


    constructor(props) {
        super(props);
        //DEFINE initial state for requested , accepted , on route , delivered
        this.state = {
            requested: true,
            accepted: false,
            on_route: false,
            delivered: false,
        };
    }
        //navigation rout define user will access Track order if on rout function is true , otherwise user will see a warning message that will cancel its order
    navigateScreen = () => {
      if (this.state.on_route === true) {
          this.props.navigation.navigate('TrackMyOrder');
      } else if (this.state.requested === true) {
          Alert.alert(
              'Warning',
              'Are you sure you want to cancel order',
              [
                  //if user press on cancel then screen will be home 
                  {text: 'Yes', onPress: () => this.props.navigation.navigate('Home')},
                  {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
              ],
              { cancelable: false }
              //clicking out side of alert will not cancel
          );
      } else if (this.state.delivered === true) {
          //if the order will be deliverd then user will be able to se confirmation message and also a OK text
          Alert.alert(
              //title
              '',
              //body
              'Thank you for your Order',
              [
                  //if user press on OK then user will be on Home screen
                  {text: 'Ok', onPress: () => this.props.navigation.navigate('Home')},
              ],
              { cancelable: false }
              //clicking out side of alert will not cancel
          );
      } else if (this.state.accepted === true) {
          //
      }
    };
//cencel order helper method that will render when user click on cancel order user will see alert message
    cancelOrder = () => {
        Alert.alert(
            //title
            'Warning',
            //body
            'Are you sure you want to cancel order',
            [
                {text: 'Yes', onPress: () => this.props.navigation.navigate('Home')},
                {text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        );
    };

    render() {
        return (
            <View style={{ flex: 1}}>
                <View style={{
                    height: height / 9,
                    width: '100%',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor: colors.blue
                }}>
                    {/* header SafeAreaView */}
                    <SafeAreaView style={{flexDirection: 'row', alignItems: 'center',marginTop:Platform.OS==='ios'?20:0 }}>
                        <View style={{flex: 1, marginLeft: wp('2%')}}>
                            {/* navigate to back screen button */}
                        <Button ImageSource={images.back}  resizeMode='contain' onPress={() => this.props.navigation.goBack()} ImageStyle={{width: wp(config.h_b_b_h_b), height: hp(config.h_b_b_h)}}/>
                        </View>
                        <View style={{flex: 4, alignItems: 'center'}}><Text
                            style={{color: colors.white, fontSize: wp(config.h_t_f_s), marginRight: wp('18%')}}>Delivery Status</Text></View>
                    </SafeAreaView>
                </View>
                <View
                    style={{
                        flexDirection: 'column',
                        padding: wp('3%')
                    }}
                >
                    <Text style={{ fontWeight: 'bold'}}>
                        ORDER
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: hp('2$')
                        }}
                    >
                        <TouchableOpacity
                        //if user request to cancel order then states will be 
                            onPress={ () => this.setState({
                                requested: true,
                                accepted: false,
                                on_route: false,
                                delivered: false,
                            })}
                        >
                            <Text style={{ color: this.state.requested === true ? colors.blue : colors.gray}}>
                                REQUESTED <AntDesign name='caretright' />
                            </Text>
                            { this.state.requested === true && (
                                <View
                                    style={{
                                        borderWidth: 1,
                                        width: wp('22%'),
                                        borderColor: colors.blue
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                        {/* <Button   onPress={ () => this.setState({
                                requested: true,
                                accepted: false,
                                on_route: false,
                                delivered: false,
                            })}>
                                 <Text style={{ color: this.state.requested === true ? colors.blue : colors.gray}}>
                                REQUESTED <AntDesign name='caretright' />
                            </Text>
                            { this.state.requested === true && (
                                <View
                                    style={{
                                        borderWidth: 1,
                                        width: wp('22%'),
                                        borderColor: colors.blue
                                    }}
                                />
                            )}
                        </Button> */}
                       
                        <TouchableOpacity
                        //if user accept order then state will be 
                            onPress={ () => this.setState({
                                requested: false,
                                accepted: true,
                                on_route: false,
                                delivered: false,
                            })}
                        >
                            
                            <Text style={{ color: this.state.accepted === true ? colors.blue : colors.gray}}>
                                ACCEPTED <AntDesign name='caretright' />
                            </Text>
                            { this.state.accepted === true && (
                                <View
                                    style={{
                                        borderWidth: 1,
                                        width: wp('19.5%'),
                                        borderColor: colors.blue
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                        //if user request to track order then state will be 
                            onPress={ () => this.setState({
                                requested: false,
                                accepted: false,
                                on_route: true,
                                delivered: false,
                            })}
                        >
                            <Text style={{ color: this.state.on_route === true ? colors.blue : colors.gray}}>
                                ON ROUTE <AntDesign name='caretright' />
                            </Text>
                            { this.state.on_route === true && (
                                <View
                                    style={{
                                        borderWidth: 1,
                                        width: wp('19.5%'),
                                        borderColor: colors.blue
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                        // if user will accept or deliver the order then state will be
                            onPress={ () => this.setState({
                                requested: false,
                                accepted: false,
                                on_route: false,
                                delivered: true,
                            })}
                        >
                            <Text style={{ color: this.state.delivered === true ? colors.blue : colors.gray}}>
                                DELIVERED
                            </Text>
                            { this.state.delivered === true && (
                                <View
                                    style={{
                                        borderWidth: 1,
                                        width: wp('19.5%'),
                                        borderColor: colors.blue
                                    }}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView contentInset={{top: 0, left: 0, bottom:15, right: 0}} style={styles.mainContainer}>
                    <View style={styles.order2}>
                        <View style={styles.orderCenter}>
                            <Image source={images.heart} style={{width: wp('6.5%'),marginLeft:wp('3%'),alignItems:'center'}} resizeMode={'contain'}/>

                            <View style={styles.orderCenterTwo}>

                                <Text style={{fontSize: wp('5%'), fontWeight: 'bold',marginTop:hp('1%')}}>Item</Text>
                                <Text style={{fontSize: wp('3%'), color: colors.light_gray}}>Description</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Text style={{color:colors.light_gray, fontSize: wp('3%'),fontWeight:'bold',marginTop:hp('3%')}}>Quantity : </Text>
                                    <Text style={{fontSize: wp('3.5%'),fontWeight:'bold',marginTop:hp('3%')}}>2</Text>
                                </View>
                            </View>

                            <View style={{justifyContent: 'flex-start', marginRight: 10}}>
                                <Text style={{fontSize: wp('6%'), color: colors.blue,fontWeight:'bold'}}>$12</Text>
                            </View>
                        </View>
                        <View style={{width: '100%', borderWidth: 0.5, borderColor: '#ccc7c7', marginTop: 10}}></View>

                        <View style={styles.orderCenter}>
                            <Image source={images.heart} style={{width: wp('6.5%'),marginLeft:wp('3%'),alignItems:'center'}} resizeMode={'contain'}/>

                            <View style={styles.orderCenterTwo}>

                                <Text style={{fontSize: wp('5%'), fontWeight: 'bold',marginTop:hp('1%')}}>Item</Text>
                                <Text style={{fontSize: wp('3%'), color: colors.light_gray}}>Description</Text>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                    <Text style={{color:colors.light_gray, fontSize: wp('3%'),fontWeight:'bold',marginTop:hp('3%')}}>Quantity : </Text>
                                    <Text style={{fontSize: wp('3.5%'),fontWeight:'bold',marginTop:hp('3%')}}>2</Text>
                                </View>
                            </View>

                            <View style={{justifyContent: 'flex-start', marginRight: 10}}>
                                <Text style={{fontSize: wp('6%'), color: colors.blue,fontWeight:'bold'}}>$12</Text>
                            </View>
                        </View>
                        <View style={{width: '100%', borderWidth: 0.5, borderColor: '#ccc7c7', marginTop: 10}}></View>

                        <View style={styles.deliveryCharges}>
                            <Text style={{fontSize:wp('3%'),fontWeight:'bold',color:colors.gray}}>Delivery Charges</Text>
                            <Text style={{fontSize:wp('3.5%'),fontWeight:'bold',color:colors.gray}} >$5.50</Text>
                        </View>
                        <View style={{width: '100%', borderWidth: 0.5, borderColor: colors.light_gray, marginTop: 10}}></View>

                        <View style={styles.deliveryCharges}>
                            <Text style={{fontWeight: 'bold', fontSize: wp('4%')}}>Total</Text>
                            <Text style={{fontWeight: 'bold', fontSize: wp('6%'), color: colors.blue}}>$5.50</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: hp('1%')
                        }}
                    >
                    <TouchableOpacity
                        style={{
                            height: hp('8%'),
                            width: wp('85%'),
                            backgroundColor: colors.blue,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={ () => this.navigateScreen()}
                    >
                        <Text style={{ color: colors.white}}>
                            {this.state.requested === true ? 'CANCEL ORDER' : this.state.on_route === true ? 'TRACK ORDER' :
                                this.state.accepted === true ? 'PAYMENT' : 'COMPLETE ORDER RECEIVED'}
                        </Text>
                    </TouchableOpacity>
                    </View>
                    { this.state.accepted === true && (
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: hp('1.2%')
                        }}
                    >
                    <TouchableOpacity
                        style={{
                            height: hp('8%'),
                            width: wp('85%'),
                            backgroundColor: colors.white,
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => this.cancelOrder()}
                    >
                        <Text style={{ color: colors.black}}>
                            CANCEL ORDER
                        </Text>
                    </TouchableOpacity>
               
                    </View>
                    )}
                    { this.state.on_route === true === true && (
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: hp('1.2%')
                        }}
                    >
                    <TouchableOpacity
                        style={{
                            height: hp('8%'),
                            width: wp('85%'),
                            backgroundColor: colors.white,
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => this.cancelOrder()}
                    >
                        <Text style={{ color: colors.black}}>
                            CANCEL ORDER
                        </Text>
                    </TouchableOpacity>
                    
                    </View>
                    )}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingLeft:wp('3%'),
        paddingRight:wp('3%')
    },
    order: {
        flex: 1,
        height: height / 2,
        marginTop: 50
    },
    order2: {
        flex: 1,
        marginTop: hp('2%'),
        marginBottom: hp('2%')
    },
    orderStart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:wp('2%')

    },
    orderCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: hp('16%'),
    },
    orderCenterOne: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderCenterTwo: {
        flex: 2,
        height: '100%',
        flexDirection: 'column',
        padding: 10
    },
    orderCenterTwoCenter: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    deliveryCharges: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:hp('5%'),
        marginTop:hp('1.1%')
    },
});