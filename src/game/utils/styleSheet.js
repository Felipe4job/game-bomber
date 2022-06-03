import { Dimensions } from "react-native";

// Tamanho da área do game 960 x 640px
// Altura divisão 10 e largura divisão de 15
// Altura 100% e a largura altura x 1,5

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const heightGameArea = windowHeight > 640 ? 640 : windowWidth;
const widthGameArea = heightGameArea * 1.5;

const widthScore = windowWidth - widthGameArea;

export { windowWidth, windowHeight, heightGameArea, widthGameArea, widthScore };
