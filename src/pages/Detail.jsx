import React from 'react'
import {
  Container, Typography, Paper, Switch, Box,
  InputLabel, FormControl, Select, MenuItem
} from '@mui/material';
import './detail.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LineChart from './Chart/LineChart';
import { useState } from 'react';
import Chart from 'chart.js/auto';
import {Link} from 'react-router-dom'
export default function Detail() {
  const onPowerChange = () => { }
  const [beatHeart, setBeatHeart] = useState({
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [{
      label: "Nhịp tim",
      data: [11, 22, 33, 44, 55, 66, 77, 88, 99, 78]
    }]
  })
  const [spo2, setSpo2] = useState({
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [{
      label: "SPO2",
      data: [11, 22, 33, 44, 55, 66, 77, 88, 99, 78]
    }]
  })
  return (
    <Container maxWidth="lg" className="info-container">
      <Link to={'/'}>
        <ArrowBackIcon />
      </Link>
      <Typography variant="h4" gutterBottom>
        Chi tiết bệnh nhân
      </Typography>
      <Paper className="info-paper">
        <Typography variant="body1" style={{ padding: "10px 0" }}>
          Bật/Tắt
          <Switch
            checked={true}
            onChange={onPowerChange}
          />
        </Typography>
        <Box display="flex" justifyContent="space-between" style={{ padding: "10px 0" }}>
          <FormControl className='formSelect'>
            <InputLabel id="demo-simple-select-label">Lưu lượng</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Lưu lượng"
              onChange={onPowerChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='formSelect'>
            <InputLabel id="demo-simple-select-label">Chế độ</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Chế độ"
              onChange={onPowerChange}

            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Typography variant="body1" style={{ padding: "10px 0" }}>
          Dung lượng oxy trong bình:
        </Typography>
        <Typography variant="body1" style={{ padding: "10px 0" }}>
          Bệnh lý:
        </Typography>
        <div className='chartContainer'>
          <div className="lineChart" >
            <LineChart chartData={beatHeart} lineColor="red" ></LineChart>
            <h3>Biểu đồ nhịp tim</h3>
          </div>
          <div className="lineChart" >
            <LineChart chartData={spo2} lineColor="purple" ></LineChart>
            <h3>Biểu đồ SPO2</h3>
          </div>
        </div>
      </Paper>
    </Container>
  )
}
