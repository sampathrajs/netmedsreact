import React, {useEffect, useState} from 'react';
import  {UserForm} from "../../component/formBuilder/formBuilder";
import {baseRequest,apiMethod} from "../../helper/apiHelper";
import { useParams} from "react-router";

const User = (props) => {
  const [initialvalue, setInitialvalue] = useState({
    name: '',
    dob: '',
    salary: '',
    skills: false, 
  });
  let { id } = useParams();
  const baseUrl = '/employee';
  const getUserById = (id) =>{
    const url = `${baseUrl}/${id}`;
    baseRequest(apiMethod.get,url).then((response) => {
      setInitialvalue(response.data);
    }).catch((error)=>{
      console.error("error",error.message);
    })
  }


  const saveUser = (value) => {
    if(id){
      baseRequest(apiMethod.post,baseUrl,value).then((response) => {
        alert("user updated successfully");
      }).catch((error)=>{
        console.error("error",error.message);
      })
    } else {
      let url = `${baseUrl}/${id}`;
      baseRequest(apiMethod.put,url,value).then((response) => {
        alert("user saved successfully ");
      }).catch((error)=>{
        console.error("error",error.message);
      })
    }
    
  }

  useEffect(() => {
    if(id){
      getUserById(id);
    }
  }, [])

  return (
    <>
      <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header text-center">
                                      <h4 class="text-center font-weight-light">Create New User</h4>
                                    </div>
                                    <div class="card-body">
                                    <UserForm 
                                    initialvalue={initialvalue}
                                    saveUser={saveUser}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            
        </div>
    </>
  );
};

export default User;