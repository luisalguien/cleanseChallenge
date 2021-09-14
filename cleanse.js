const data = {
    nickname  : 'spiderman',
    firstName : 'Peter',
    lastName  : 'Parker',
    age       : undefined,
    address   : null,
    friends   : [{
      nickname  : 'hulk',
      firstName : undefined,
      lastName  : 'Banner',
      age       : 0,
      address   : null,
      friends   : null,
    }, {
      nickname  : 'iron man',
      firstName : 'Tony',
      lastName  : 'Stark',
      age       : false,
      address   : undefined,
      friends   : [{
        nickname  : 'war machine',
        firstName : null,
        lastName  : null,
        age       : undefined,
        address   : undefined,
        friends   : []
      }]
    }]
  };
  
  const isNullOrUndefined = value => {
      return (typeof value === "object" && !value) || typeof value === "undefined"
  }

  const cleanse = (obj) => {
       let duplicateObj = {...obj}
       let keys = Object.keys(duplicateObj)
       keys.forEach(key => {
           console.log("typeof key: ", key + ": " + typeof duplicateObj[key])
           if (isNullOrUndefined(duplicateObj[key])) delete duplicateObj[key]
           if (typeof duplicateObj[key] === "object" && duplicateObj[key].length > 0) {
            let newNestedArray = []
            duplicateObj[key].forEach( arrElement => {
                newNestedArray.push(cleanse(arrElement))
            })
            duplicateObj[key] = newNestedArray
           }
       })
       console.log("result: ", duplicateObj)
       return duplicateObj
  };
  
  let result = cleanse(data);
  console.log("final result: ", JSON.stringify(result))