function hexToRgb(hex) {

    if (hex.startsWith("#")) {
        hex = hex.substring(1);
    }


    var red = parseInt(hex.substring(0, 2,), 16);
    var green = parseInt(hex.substring(2, 4), 16);
    var blue = parseInt(hex.substring(4), 16);

    return [red, green, blue];
}


var colorHex = "#FFA500";
var rgbValues = hexToRgb(colorHex);
console.log("Valores RGB:", rgbValues);
