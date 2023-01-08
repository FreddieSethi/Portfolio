import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
//import { addImageToDashboard } from "./DashboardScreen";
//import CameraScreen from "./CameraScreen";
import { SearchBar } from "react-native-elements";

import { useNavigation } from "@react-navigation/native";

import nutrientAPI from "../data/nutrientAPI.json";

import Icon from "react-native-vector-icons/MaterialIcons";

import colours from "../config/colours";

const DATA = Object.values(nutrientAPI);
console.log(DATA);

const Item = ({
  food,
  calories,
  protein,
  carbs,
  fats,
  sugar,
  sodium,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.food}>{food}</Text>
    <Text>Calories: {calories}</Text>
    <Text>Protein: {protein} grams</Text>
    <Text>Carbs: {carbs} grams</Text>
    <Text>Fats: {fats} grams</Text>
    <Text>Sugar: {sugar} grams</Text>
    <Text>Sodium: {sodium} milligrams</Text>
  </TouchableOpacity>
);

function CameraFunction() {
  let cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    // CameraFunction.js

    let saveToDashboard = () => {
      addImageToDashboard(photo);
      setPhoto(undefined);
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        <Button title="Share" onPress={sharePic} />
        {hasMediaLibraryPermission ? (
          <Button title="Save" onPress={savePhoto} />
        ) : undefined}
        <Button title="Save to Dashboard" onPress={saveToDashboard} />
        <Button title="Discard" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.camera} type={type} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePic}>
          <Text style={styles.text}>Take Picture</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
}

// function CameraButton() {
//   const navigation = useNavigation();

//   return (
//     <TouchableOpacity onPress={() => navigation.navigate("CameraFunction")}>
//       <Text>Camera Button</Text>
//     </TouchableOpacity>
//   );
// }

const handlePress = (item) => {
  // Navigate to the Details screen and pass the item as a parameter
  const navigation = useNavigation();
  navigation.navigate("Details", { item });
};

function AddFoodScreen() {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Icon name="photo-camera" size={60} color={colours.black} />
        </TouchableOpacity>
        <SearchBar
          placeholder="Search for food..."
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
      </View>
      <View>
        <FlatList
          //data={DATA}
          data={DATA.filter((item) => item.food.includes(searchTerm))}
          renderItem={({ item }) => (
            <Item
              food={item.food}
              calories={item.calories}
              protein={item.protein}
              carbs={item.carbs}
              fats={item.fats}
              sugar={item.sugar}
              sodium={item.sodium}
              onPress={() => handlePress(item)}
            />
          )}
          keyExtractor={(item) => item.food}
          // renderItem={({ item }) => (
          //   <Item
          //     food={item.food}
          //     calories={item.calories}
          //     protein={item.protein}
          //     carbs={item.carbs}
          //     fats={item.fats}
          //     sugar={item.sugar}
          //     sodium={item.sodium}
          //     onPress={() => handlePress(item)}
          //   />
          // )}
          // keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
}

export default AddFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  cameraIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  list: {
    backgroundColor: "#eee",
    paddingTop: 100,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  food: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  cameraIcon: {
    fontSize: 35,
    color: "white",
  },
});
