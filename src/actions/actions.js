import axios from 'axios';


/******************************FETCH******************************************************************/

export const getEmployees=()=>{
  return(dispatch)=>{
      return axios.get('https://app-nodeserver.herokuapp.com/fetch')
                       .then((posRes)=>{
                            dispatch(fun_one(posRes.data))
                       },(err)=>{
                         console.log(err);
                       });
  };
};

export const fun_one=(records)=>{
   return {type:'FETCH', value:records}
} ;

/*****************************************************************************************************/

/******************************INSERT******************************************************************/

export const addEmployees=(record)=>{
    return(dispatch)=>{
        return axios.post('https://app-nodeserver.herokuapp.com/insert',record)
                        .then((posRes)=>{
                            dispatch(fun_two(posRes.data))
                        },(err)=>{
                          console.log(err);
                        });
    };
};

export const fun_two=(result)=>{
    return {type:'INSERT',value:result}
};

/******************************************************************************************************/

/*********************************************Update********************************************************/

export const updateEmployee=(record)=>{
    return(dispatch)=>{
        return axios.put('https://app-nodeserver.herokuapp.com/update',record)
                       .then((posRes)=>{
                          dispatch(fun_three(posRes.data))
                       },
                       (err)=>{
                        console.log(err)
                       });
    };
};

export const fun_three=(result)=>{
    return {type:'UPDATE',value:result}
};

/******************************************************************************************************/

/*************************************************DELETE**************************************************/

export const deleteEmployee=(record)=>{
    return(dispatch)=>{
        return axios.delete('https://app-nodeserver.herokuapp.com/delete',{data:record})
                           .then((posRes)=>{
                             dispatch(fun_four(posRes.data))
                           },(err)=>{
                               console.log(err)
                           })

    };
};

export const fun_four=(result)=>{

    return{type:'DELETE',value:result}
}

/******************************************************************************************************/