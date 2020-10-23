import * as React from 'react';
import {
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  TextInput,
  TouchableHighlight,
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground
  } from 'react-native';

  import { Button } from 'react-native-ios-kit';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { storageRef } from '../components/Firebase/firebase';
import { addItem } from '../services/AddItemService';

import uuid from 'uuid';
const BGimage ='../assets/images/account-creation.gif';

  export default class AddRecord extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        empId:'',
        imageSrc:''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleEmplIDChange = this.handleEmplIDChange.bind(this);
      this.handleImgChange = this.handleImgChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        name: e.nativeEvent.text
      });
    }

    handleEmplIDChange(e) {
      this.setState({
        empId: e.nativeEvent.text
      });
    }

    handleImgChange(e) {
      this.setState({
        imageSrc: e.nativeEvent.text
      });
    }

    handleSubmit() {
      addItem(this.state.name,this.state.empId, this.state.imageSrc);
      Alert.alert(
        'Item saved successfully'
       );
    }

    state = {
      image: null,
      uploading: false,
    };
  
    async componentDidMount() {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      await Permissions.askAsync(Permissions.CAMERA);
    }
  
    render() {
      let { image } = this.state;
  
      return (
        <View style={{flex: 1,backgroundColor: 'white', flexDirection: 'column'}}>
          <ImageBackground source={require('../assets/images/thermometer2.jpg')} style={styles.image}>
            <View style={{padding:30}}>
          {!!image && (
            <Text
              style={{
                fontSize: 20,
                marginBottom: 20,
                textAlign: 'center',
                marginHorizontal: 15,
              }}>
              Example: Upload ImagePicker result
            </Text>
          )}
  

            <Button 
            inline rounded centered
            onPress={this._pickImage}
            style={{flex:1,marginBottom:15}} >PICK AN IMAGE FROM CAMERA ROLL
            </Button>

            <Button 
            inline rounded centered
            onPress={this._takePhoto}
            style={{flex:1,marginBottom:15}} >TAKE A PHOTO
            </Button>
  
          {this._maybeRenderImage()}
          {this._maybeRenderUploadingOverlay()}
  
          <StatusBar barStyle="default" />
          </View>
          </ImageBackground>
        </View>
      );
    }
  
    _maybeRenderUploadingOverlay = () => {
      if (this.state.uploading) {
        return (
          <View
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: 'rgba(0,0,0,0.4)',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <ActivityIndicator color="#fff" animating size="large" />
          </View>
        );
      }
    };
  
    _maybeRenderImage = () => {
      let { image } = this.state;
      if (!image) {
        return;
      }
  
      return (
        <View
          style={{
            marginTop: 30,
            width: 250,
            borderRadius: 3,
            elevation: 2,
          }}>
          <View
            style={{
              borderTopRightRadius: 3,
              borderTopLeftRadius: 3,
              shadowColor: 'rgba(0,0,0,1)',
              shadowOpacity: 0.2,
              shadowOffset: { width: 4, height: 4 },
              shadowRadius: 5,
              overflow: 'hidden',
            }}>
            <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
          </View>
          <Text
            onPress={this._copyToClipboard}
            onLongPress={this._share}
            style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
            Copy to clipboard
          </Text>

          <TextInput
              style={styles.itemInput}
              value={image}
              onChange={this.handleImgChange}
            />
          <TextInput
              style={styles.itemInput}
              onChange={this.handleChange}
            />
            <TextInput
              style={styles.itemInput}
              onChange={this.handleEmplIDChange}
            />

            <TouchableHighlight
                style = {styles.button}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Add
              </Text>
            </TouchableHighlight>
        </View>
      );
    };
  
    _share = () => {
      Share.share({
        message: this.state.image,
        title: 'Check out this photo',
        url: this.state.image,
      });
    };
  
    _copyToClipboard = () => {
      Clipboard.setString(this.state.image);
      alert('Copied image URL to clipboard');
    };
  
    _takePhoto = async () => {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      this._handleImagePicked(pickerResult);
    };
  
    _pickImage = async () => {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      this._handleImagePicked(pickerResult);
    };
  
    _handleImagePicked = async pickerResult => {
      try {
        this.setState({ uploading: true });
  
        if (!pickerResult.cancelled) {
          const uploadUrl = await uploadImageAsync(pickerResult.uri);
          this.setState({ image: uploadUrl });
        }
      } catch (e) {
        console.log(e);
        alert('Upload failed, sorry :(');
      } finally {
        this.setState({ uploading: false });
      }
    };
  }
  
  async function uploadImageAsync(uri) {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  
    const ref = storageRef(uuid.v4());
    const snapshot = await ref.put(blob);
  
    // We're done with the blob, close and release it
    blob.close();
  
    return await snapshot.ref.getDownloadURL();
  }

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#2a8ab7'
    },
    title: {
      marginBottom: 20,
      fontSize: 25,
      textAlign: 'center'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    itemInput: {
      height: 50,
      padding: 4,
      marginRight: 5,
      fontSize: 23,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 8,
      color: 'white'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor:'white',
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });