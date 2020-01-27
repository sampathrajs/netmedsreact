import React,{useEffect,useState} from 'react';
import Table from "../../component/table";
import {baseRequest, apiMethod} from "../../helper/apiHelper";

const Home = () => {
const [list, setList] = useState(null);

const getUserList = () => {
  baseRequest(apiMethod.get,'/employee').then((response) => {
    setList(response.data);
  }).catch((error)=>{
    console.error("error",error.message);
  });
}

useEffect(() => {
  getUserList();
}, [])
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
                  <Table list={list}/>
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