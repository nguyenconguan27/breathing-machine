import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, IconButton, Grid } from '@mui/material';
import PropaneTankSharpIcon from '@mui/icons-material/PropaneTankSharp';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import PersonRemoveSharpIcon from '@mui/icons-material/PersonRemoveSharp';
import WarningIcon from '@mui/icons-material/Warning';
import React, { useEffect, useState } from 'react'
import { ref, onValue, set } from "firebase/database"
import { db } from '../utils/firebase'
import './home.scss'
import { Link } from 'react-router-dom';

export default function InteractiveList() {
  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   const myRef = ref(db, "may_tho")
  //   onValue(myRef, (snapshot) => {
  //     const newData = snapshot.val()
  //     setData(newData)
  //   })
  // }, [])
  // useEffect(() => {
  //   // call api gửi chỉ số của máy
  //   const array = []
  //   data && data.forEach((element) => {
  //     const chi_so = {id_benh_nhan: element.id_benh_nhan,
  //           nhip_tim: element.nhip_tim,
  //           spo2: element.spo2}
  //     array.push(chi_so)
  //   })
  //   console.log(array)
  // }, [data])
  // console.log(data)
  const deletePantient = (machine) => () => {
    //set trang thai
    set(ref(db, `may_tho/${machine.id}`),
      {
        ...machine, trang_thai: -1
      });
    // call api xoa du lieu
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className='machine-container'>
        <h1 style={{textAlign:"center"}}>Danh sách máy thở</h1>
        <List>
          {/* {data && data.map((machine) => (
                 <ListItem
                key={machine.id}
                  secondaryAction={
                    <IconButton>
                      {machine.trang_thai === -1 ? (
                        <Link to={"/add"}>
                          <PersonAddAltSharpIcon className='add-pantient-btn'/>
                        </Link>) : 
                        (<PersonRemoveSharpIcon className='delete-pantient-btn' onClick={deletePantient(machine)}/>)}
                    </IconButton>
                  }
                >
                   <Link to={`/detail/${machine.id}`} className='machine-item'>
                  <ListItemAvatar>
                    <Avatar>
                        <PropaneTankSharpIcon />
                    </Avatar>
                    {machine.trang_thai === -1 && <WarningIcon/>}
                   
                  </ListItemAvatar>
                  <ListItemText
                    primary={`máy số ${machine.id}`}
                    secondary={machine.trang_thai === -1 ? "Trống" : "Đã ghép"}
                  />
                  </Link>
                </ListItem>
              ))} */}
          <ListItem
            secondaryAction={
              <IconButton>

                <Link to={"/add"}>
                  <PersonAddAltSharpIcon className='add-pantient-btn' />
                </Link>

              </IconButton>
            }
          >
            <Link to={`/detail/${1}`} className='machine-item'>
              <ListItemAvatar className='avatar' >
                <Avatar className='avatarMachine'>
                  <PropaneTankSharpIcon />
                </Avatar>
                <WarningIcon className='warning' />
              </ListItemAvatar>
              <ListItemText className='avatarText'
                primary={<strong>Máy số 1</strong>}
                secondary={<div>Trạng thái : Trống</div>}
              />
            </Link>
          </ListItem>
        </List>
      </div>
    </Box>

  );
}
