import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Lembaga() {
  const tableStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid #ddd"
  };

  const headerStyle = {
    backgroundColor: "#0098d9",
    color: "white"
  };

  const rowStyle = {
    backgroundColor: "rgba(0, 200, 255, 0.1)",
  };

  return (
    <main className='main-container'>
      <p style={{fontSize:"30px", width:"100", textAlign:"center"}}>DATA ADMIN</p>
      <Table striped bordered hover variant='dark' style={tableStyle}>
        <thead style={headerStyle}>
          <tr style={{justifyContent:'center', textAlign:'center'}}>
            <th>No</th>
            <th>Nama Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Admin 1</td>
            
          </tr>
          <tr style={rowStyle}>
            <td>2</td>
            <td>Admin 2</td></tr>
        </tbody>
      </Table>
    </main>
  );
}

export default Lembaga;
