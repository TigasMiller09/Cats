import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';

import { colors } from "../../constants/theme"
import { heart, cross } from "../../constants/icons"
import { fetchCats, fetchImage, sendUpVote } from "../../api/apiFunctions"

const PicksTab = () => {
    const [loading, setLoading] = useState(true)
    const [catsArray, setCatsArray] = useState([])

    useEffect(() => {
        fetchCats()
        .then(data => data.json())
        .then(data => {
            createCatsArray(data)
        });
    }, [])

    const createCatsArray = (array) => {
        const tempArray = []
        for(let i = 0; i < array.length; i++){
            fetchImage(array[i].id)
            .then(data => data.json())
            .then(data => {
                tempArray.push({
                    id: array[i].id, 
                    name: array[i].name, 
                    origin: array[i].origin, 
                    affection: array[i].affection_level, 
                    photo: data[0].url, 
                    imageId: data[0].id
                })

                if(i == array.length-1){
                    setCatsArray(tempArray)
                    setLoading(false)
                }
            });
        }
    }

    const handleSwipeRight = (index) => {
        sendUpVote(catsArray[index].imageId)
    }

    const handleSwipeLeft = (index) => {
        console.log("Swipe Left")
    }

    const renderCats = () => {
        return catsArray.map((item, i) => {
            return (
                <Card key={i} style={styles.card}>
                    <Image source={{uri: item.photo}} style={styles.image}/>
                    <View style={styles.catInfoView}>
                        <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={styles.catInfoMainText}>{item.name}</Text>
                            <Text style={styles.catInfoMainText}>{item.affection}</Text>
                        </View>
                        <Text style={{fontSize: 10, fontWeight: "500", color: "#BFBFC0"}}>{item.origin}</Text>
                    </View>
                </Card>
            )
        })
    }

    return (
        <View style={styles.container}>
            {loading 
            ?   <Text style={styles.loadingText}>Loading cats...</Text>
            :   <CardStack
                    style={styles.content}
                    renderNoMoreCards={() => <Text/>}
                    ref={swiper => {this.swiper = swiper}}
                    onSwipedRight={(index) => handleSwipeRight(index)}
                    onSwipedLeft={(index) => handleSwipeLeft(index)}
                >
                    {renderCats()}
                </CardStack>
            }
            <View style={styles.buttonsView}>
                <TouchableOpacity style={styles.button} onPress={() => { this.swiper.swipeLeft() }}>
                    <Image source={cross} style={[styles.buttonIcon, {tintColor:"#E16359"}]}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => { this.swiper.swipeRight() }}>
                    <Image source={heart} style={[styles.buttonIcon, {tintColor:"#6BD88E"}]}/>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    content:{
        alignItems: 'center',
        display:"flex",
        flexDirection:"column",
        justifyContent: 'flex-start',
        height: Dimensions.get('window').height * (62/100),
    },
    loadingText: { 
        fontWeight: '700', 
        fontSize: 18, 
        color: 'gray', 
        alignSelf:"center", 
        height: Dimensions.get('window').height * (62/100), 
        paddingTop: 210
    },
    card:{
        marginTop:Dimensions.get('window').height * (2/100),
        backgroundColor: colors.background,
        borderRadius:20,
        width: (Dimensions.get('window').width) * (90/100),
        height: Dimensions.get('window').height * (60/100),
        shadowColor: '#BFBFC0AD',
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowOpacity:1,
        shadowRadius: 10,
        elevation: 10
    },
    image:{
        width: "100%",
        height: "100%",
        borderRadius: 20
    },
    buttonsView:{
        flex: 1, 
        display: "flex", 
        flexDirection:"row", 
        justifyContent:"center", 
        paddingTop: Dimensions.get('window').height * (2/100)
    },
    catInfoView: {
        position:"absolute", 
        backgroundColor:"white", 
        width:300, 
        height: 55, 
        bottom: 0, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        alignSelf:"center", 
        paddingVertical: 9, 
        paddingHorizontal: 17
    },
    catInfoMainText: {
        fontSize: 18, 
        fontWeight: "500", 
        color: "#434141"
    },
    button: {
        width: 55, 
        height: 55, 
        backgroundColor:"white", 
        borderRadius: 100, 
        padding: 16, 
        marginHorizontal: 15,
        shadowColor: '#BFBFC0AD',
        shadowOffset: {
        width: 0,
        height: 8
        },
        shadowOpacity:1,
        shadowRadius: 10,
        elevation: 10
    },
    buttonIcon: {
        width:"100%", 
        height: "100%", 
        borderRadius: 30,
    },
});

export default PicksTab;