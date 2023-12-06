import React from 'react'
import { Container, Typography, Paper, Switch, Box, 
  InputLabel, FormControl, Select, MenuItem} from '@mui/material';
import './detail.scss';

export default function Detail() {
  const onPowerChange = () => {}
  return (
    <Container maxWidth="lg" className="info-container">
      <Typography variant="h4" gutterBottom>
        Chi tiết bệnh nhân
      </Typography>
      <Paper className="info-paper">
        <Typography variant="body1">
        Bật/Tắt
        <Switch
          checked={true}
          onChange={onPowerChange}
        />
        </Typography>
        <Box display="flex" justifyContent="space-between">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Lưu lượng</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={onPowerChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Chế độ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={onPowerChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
        </Box>
        <Typography variant="body1">
          Dung lượng oxy trong bình:
        </Typography>
        <Typography variant="body1">
          Bệnh lý:
        </Typography>
      </Paper>
    </Container>
  )
}
