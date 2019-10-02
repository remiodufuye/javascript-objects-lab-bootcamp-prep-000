
var recipes = {};

 function updateObjectWithKeyAndValue(object, key, value) {
    
    var newObj = Object.assign({} , object ) ; 
    
}

    
function deleteFromObjectByKey(object, key) {
  
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
    {
         object[key] = value ;
         return object ; 
    }

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key] ;
  return object ; 
  
}


