module.exports = function parseStringAsArrya(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}