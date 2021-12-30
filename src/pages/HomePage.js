import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import Box from '@material-ui/core/Box';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import api from '../services/api'
  
  export default function Contacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function loadContacts() {
            const response = await api.get("/contacts")
            setContacts(response.data)
        }
        loadContacts();
    }, [])

    async function handleDelete(id) {
        const response = await api.delete("/contacts/" +id)
        if (response.status === 200) {
            window.location.href = '/'
        }

    }

    return (
      <React.Fragment>
        <h1>Contacts</h1>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((row) => (
                <TableRow key={row._id}>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.weight}</TableCell>
                <TableCell align="right">
                    <ButtonGroup aria-label="outlined primary button group">
                        <Button color="primary" href={'/edit/'+row._id}>Atualizar</Button>
                        <Button color="secondary" onClick={() => handleDelete(row._id)} href={'/'}>Excluir</Button>
                    </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box mt={5}>
        <Link color="primary" href="/register" sx={{ mt: 3 }}>
          Register new contact
        </Link>
        </Box>
      </React.Fragment>
    );
  }