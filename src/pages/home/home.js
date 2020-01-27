import React,{useEffect,useState} from 'react';
import Table from "../../component/table";
import {baseRequest, apiMethod} from "../../helper/apiHelper";
import { useHistory } from 'react-router-dom';

const Home = () => {
const [list, setList] = useState(null);
const history = useHistory();

const getUserList = () => {
  baseRequest(apiMethod.get,'/employee').then((response) => {
    setList(response.data);
  }).catch((error)=>{
    console.error("error",error.message);
  });
};

const deleteonClick = (id) =>{
  baseRequest(apiMethod.delete,`/employee/${id}`).then((response) => {
    getUserList();
  }).catch((error)=>{
    console.error("error",error.message);
  });
}

const editonClick = (id) =>{
  history.push(`/user/${id}`);
}

useEffect(() => {
  getUserList();
}, []);
  return (
    <>
      <div id="layoutSidenav">
        <div id="layoutSidenav_content">
          <main>
            <div class="container-fluid">
              <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">User Dashboard</li>
              </ol>
              <div class="card mb-4">
                <div class="card-header"><i class="fas fa-table mr-1"></i>DataTable Example</div>
                <div class="card-body">
                  <Table 
                    list={list}
                    deleteonClick={deleteonClick}
                    editonClick={editonClick}
                    />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;