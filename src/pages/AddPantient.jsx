import React from 'react'
import { Paper, TextField, Button, Typography, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './addPantient.scss';
import {Link} from 'react-router-dom'
export default function AddPantient() {
  return (
  
      <Container  className='formContainer'>
        <Paper className="info-form">
          <Link to={'/'}>
            <ArrowBackIcon />
          </Link>
          <Typography variant="h5" gutterBottom style={{textAlign:"center"}}>
            Thêm Thông Tin Bệnh Nhân
          </Typography>
          <form className="form-container">
            <TextField label="Tên" variant="outlined" fullWidth margin="normal" />
            <TextField label="Ngày Sinh" variant="outlined" fullWidth margin="normal" />
            <TextField label="Số Căn Cước" variant="outlined" fullWidth margin="normal" />
            <TextField label="Địa Chỉ" variant="outlined" fullWidth margin="normal" />
            <TextField label="Bệnh Lý" variant="outlined" fullWidth margin="normal" />
  
            <Button variant="contained" color="primary" fullWidth>
              Thêm
            </Button>
          </form>
        </Paper>
      </Container>
  )
}
