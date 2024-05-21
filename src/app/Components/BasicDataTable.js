"use client";

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

export default function BasicDataTable() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://food-supply-server-1.onrender.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Expiration Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.category}</TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{product.expirationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}