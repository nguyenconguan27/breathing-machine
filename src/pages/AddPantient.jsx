import React from 'react'
import { Paper, TextField, Button, Typography, Container } from '@mui/material';
import './addPantient.scss'
export default function AddPantient() {
  return (
  
      <Container maxWidth="sm">
        <Paper className="info-form">
          <Typography variant="h5" gutterBottom>
            Thêm Thông Tin
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
