const ProductReducer=(state,action)=> {
  switch (action.type) {

    case "MY_API_DATA":
        const featureproducts=action.payload.filter((curelem)=>{
            return curelem.featured===true;
        })
      return {
        ...state,
        product:action.payload,
        featureproducts:featureproducts,
        isloading:false
      };


    case "API_ERROR":
      return {
        ...state,
        isloading:false,
        isError: true,
      };


    case "SET_LOADING":
      return {
        ...state,
        isloading:true
      };

      case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading:true
      };

      case "SET_SINGLE_PRODUCT":
        return{
          ...state,
          isSingleLoading:false,
          singleProduct:action.payload
        }
        case "SET_SINGLE_ERROR":
      return {
        ...state,
        isloading:false,
        isError: true,
      };

    default :
    return {
        state
    }

    
  }
}

export default ProductReducer;
