import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, TextField, Select, MenuItem } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalDashboard } from 'src/redux/apiRequest';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [valueDate, setValueDate] = useState("")
  const [typeDate,setTypeDate] = useState("month")

  const user = useSelector((state)=>state.user.login?.currentUser)
  const count = useSelector((state)=>state.bill.totalDashboard.total)
  console.log(count);
  const theme = useTheme();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }

    const payload = {
      date: valueDate,
      type: typeDate
    }
    console.log(payload);
    getTotalDashboard(dispatch,payload)
  },[valueDate,typeDate])

  const handleChangeDate = (e) => {
    setValueDate(e.target.value);
  };

  const handleChange = (e) =>{
    setTypeDate(e.target.value)
  }

  return (
    <>
      <Helmet>
        <title> Dashboard | Domino's Restaurant </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Admin welcome back
        </Typography>
        <TextField
                onChange={handleChangeDate}
                defaultValue={valueDate}
                id="date"
                label="time"
                type="date"
                InputLabelProps={{ shrink: true }}
                sx={{ width: 220,marginRight:5 }}
              />
                <Select style={{ marginBottom: 20 }} value={typeDate} onChange={handleChange}>
                <MenuItem value={'year'}>year</MenuItem>
                <MenuItem value={'month'}>month</MenuItem>
                
              </Select>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Price" total={count?.countBill} icon={'tabler:brand-cashapp'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total User" total={count?.countUser} color="info" icon={'bx:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Product" total={count?.countProduct} color="warning" icon={'fluent:food-pizza-24-regular'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total ...." total={234} color="error" icon={'akar-icons:arrow-counter-clockwise'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="Order"
              subheader="total order by day"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
                '12/01/2022',
              ]}
              // line,arena,column
              chartData={[
                {
                  name: '',
                  type: 'column', 
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
               
              ]}
            />
          </Grid>

        </Grid>
      </Container>
    </>
  );
}
