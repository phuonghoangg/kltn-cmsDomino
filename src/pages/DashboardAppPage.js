import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
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
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const user = useSelector((state)=>state.user.login?.currentUser)
  
  console.log(user);
  const theme = useTheme();
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  })
  return (
    <>
      <Helmet>
        <title> Dashboard | Domino's Restaurant </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Admin welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Price" total={714000} icon={'tabler:brand-cashapp'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total User" total={20} color="info" icon={'bx:user'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total Product" total={50} color="warning" icon={'fluent:food-pizza-24-regular'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Total ...." total={234} color="error" icon={'akar-icons:arrow-counter-clockwise'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppWebsiteVisits
              title="Order"
              subheader="total order by day"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
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
