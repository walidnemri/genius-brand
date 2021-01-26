import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  Paper,
  Button
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {
  Link,
} from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, prix, edit) {
  return { name,prix, edit };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.),
  createData('Eclair', 262, 16.0),
];

export default function Product() {
  const classes = useStyles();
  const [products,setProducts] = React.useState([])
  const [productDelete, setProductDelete] = React.useState({})

  React.useEffect(() => {
    getProducts();
  },[productDelete])

  const getProducts = async() => {
    let data;
    try {
        data = await axios.get("http://localhost:3002/api/products/")
    } catch (error){
        console.log(error)
    }

    if (data) setProducts(data.data.product)
  }

  const deleteProduct = async(e,id) => {
    let data;
    try {
      data = await axios.delete("http://localhost:3002/api/products/"+id)
    } catch (error){
        console.log(error)
    }
    if (data) setProductDelete(data)
  }

  return (
    <>
    <div className="title">
      Products
    </div>
    <hr
      style={{
      color: '#3b4752',
      backgroundColor: '#3b4752',
      height: 5
    }}/>
    <div className="products">
    <div className="create" >
      <Link to="/admin/product/create" style={{textDecoration: 'none'}}>
        <Button variant="contained" color="primary">
            New Product
        </Button>
      </Link>
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="cell">name</TableCell>
            <TableCell className="cell" align="right">prix</TableCell>
            <TableCell className="cell" align="right">edit</TableCell>
            <TableCell className="cell" align="right">delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.length ? products.map((row) => (
            
            <TableRow hover key={row.name}>
              <TableCell style={{color:'#3b4752'}} className="cell" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{color:'#3b4752'}}align="right">{row.price}</TableCell>
              
              <TableCell className="cell" align="right"><Link to={`/admin/product/${row.id}`}  style={{color:'#3b4752'}}><FontAwesomeIcon icon={faEdit}/></Link></TableCell>
              <TableCell className="cell" align="right" onClick={(e) =>deleteProduct(e,row.id)}><FontAwesomeIcon style={{color:'#3b4752'}} icon={faTrash}/></TableCell>
            </TableRow>
            
          )):""}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}
