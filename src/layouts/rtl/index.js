/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/rtl/data/reportsBarChartData";
import reportsLineChartData from "layouts/rtl/data/reportsLineChartData";

// RTL components
import Projects from "layouts/rtl/components/Projects";
import OrdersOverview from "layouts/rtl/components/OrdersOverview";

import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setDirection } from "context";

function DateTimePickerTextField(properties) {
  const { badge, inputProps, InputProps, error, sx, ...other } = properties;
  return (
    <TextField
      {...inputProps}
      {...other}
      badge={badge}
      error={error}
      InputProps={{ endAdornment: InputProps?.endAdornment }}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      inputProps={{ style: { direction: "ltr", paddingLeft: "0px" } }}
      inputRef={inputProps.ref}
      ref={InputProps?.ref}
      sx={sx}
    />
  );
}

function RTL() {
  const [, dispatch] = useMaterialUIController();
  const { sales, tasks } = reportsLineChartData;

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox>
          <Grid container spacing={3}>
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
              <DateTimePicker
                format="yyyy/MM/dd EEEE HH:mm:ss"
                label="Date Picker"
                defaultValue={new Date(2022, 1, 1)}
                slots={{ textField: DateTimePickerTextField }}
                sx={{ width: "400px" }}
              />
            </LocalizationProvider>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
