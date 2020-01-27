import React from 'react';
import PropTypes from 'prop-types';

const Table = ({list,editonClick,deleteonClick}) => {
    return (
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>DOB</th>
                        <th>Skills</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.salary}</td>
                                    <td>{item.dob}</td>
                                    <td>{item.skills}</td>
                                    <td>
                                        <button className="button muted-button" onclick={()=>{editonClick(item.id)}}>Edit</button>
                                        <button className="button muted-button" onclick={()=>{deleteonClick(item.id)}}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
list: PropTypes.array
}

export default Table;
