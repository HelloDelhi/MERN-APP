const initialstate={
    records:[]
}

const reducer=(state=initialstate,action)=>{
  switch(action.type){
      case 'FETCH':
          return {
              ...state,
              records: state.records.concat(action.value)
          }
          break;

        case 'INSERT':
        case 'UPDATE':
        case 'DELETE':
            return {
                ...state,
                status:action.value
            }

            break;
          

      };

      return state;
  };

  export default reducer;