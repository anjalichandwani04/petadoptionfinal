import './App.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainFeaturedPost from './Components/MainFeaturedPost';
import { mainFeaturePost } from './data';
import FeaturedPet from './Components/FeaturedPet';
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from './redux/actions/categories';
import { BrowserRouter } from 'react-router-dom';

const sections = [{title: "All Pets", url: '/'}];


const theme = createTheme({
  typography: {
    fontFamily: `"Trebuchet MS", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  

  useEffect(() => {
    fetchAllCategories({ dispatch })

  }, []);
  return ( 

    <ThemeProvider theme ={theme} >
      <CssBaseline/>
      <BrowserRouter>

      <Container maxWidth = "lg" >
        <Header allCategories = {[
          ...sections, 
          allCategories.map((category) => ({
            title: category?.name,
            url: `/${category?._id}`,
          })),
          ]} />
        <MainFeaturedPost mainFeaturePost={mainFeaturePost}/>
        <Grid container spacing={5}>
        <FeaturedPet/>
        <FeaturedPet/>
        </Grid>
        
        
        
      </Container>
      </BrowserRouter>
      <Footer title='Pet Adoption Center' description='every pet deserves a home' />
      
    </ThemeProvider>

      
  );
}

export default App;
