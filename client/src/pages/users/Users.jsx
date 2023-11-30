
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
const Users = () => {
  const [users, setUsers] = useState([]);
  const statuses = useState(['active','deactive','pending'])


  const getSeverity = (status) => {
    switch (status) {
        case 'deactive':
            return 'danger';

        case 'active':
            return 'success';

        case 'pending':
            return 'info';
       case 'more':
        return null
      
    }
};
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);
  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)} />;
};
  return (
    <div>
      <DataTable value={users}>
        <Column field="id" header="ID"></Column>
        <Column field="username" header="Username"></Column>
        <Column field="company.name" header="Company"></Column>
        <Column field="phone" header="Phone"></Column>
        <Column field="address.city" header="City"></Column>
        <Column field="status" header="Status"  body={statusBodyTemplate}></Column>
      </DataTable>
    </div>
  );
};

export default Users;

