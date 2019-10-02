
var recipes = {};

 function updateObjectWithKeyAndValue(object, key, value) {
    
    return Object.assign({}, object, { [key]: value }) ; 

}

    
function deleteFromObjectByKey(object, key) {
  
    var newObj = Object.assign({}, key ) ; 
    delete newObj.key ;
    return newObj ; 
    
}

/*
function deleteFromObjectByKey(object, key) {
  var e = Object.assign({}, key);
  delete e.key;
  return e;
}
*/ 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
    {
         object[key] = value ;
         return object ; 
    }

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key] ;
  return object ; 
  
}


