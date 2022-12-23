import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../styles/Categories.css"
import { Navbar } from '../components/Navbar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertSharpIcon from '@mui/icons-material/SwapVertSharp';



export const Categories = () => {


  /*Getting the data using Product API and storing it to data state*/ 
  const [data,setData]=React.useState([])


  /*Storing the data of user filtering using filter state*/ 
  const [filter,setFilter]=React.useState("spice-powders")


  /*Function which makes a post request to Products API and get the data from it and store it in Data State*/ 
  const GetData=()=>{
        axios.post("https://api.earthsfresh.in/api/products/getcategoryProducts",
               {
                category_slug: [filter]
               })
            .then((res)=>{setData(res.data.result.product_list)})
            console.log(data)
          }


          
  /*Using useEffect to handle the react life-cycle method*/ 
  React.useEffect(()=>{
    GetData()
  },[filter])


/*Changing the color of filtered catageory that user has clicked on and storing it in filter useState*/  
  const changeColor=(e)=>{
  let value=e.target.innerText

    if(e.target.style.color==="green"){
      e.target.style.color=""
    
    }
    else{
    
      e.target.style.color="green"
    }

    if(value==="Garam Masala"){
      setFilter("spice-powders")
    }
    else if(value==="Salt"){
      setFilter("salt")
    }
    else if(value==="Other Powders"){
      setFilter("other-powders")
    }
    else if(value==="Edible & Utility Oils"){
      setFilter("oils")
    }
    else if(value==="Hair Oil"){
      
      let filter=data.filter((item)=>{return item.product_sub_cat.product_sub_cat_slug=="hair-oils"})
      console.log(filter)
      setData(filter)
    }
    else if(value==="Cooking Oil") {
      let filter=data.filter((item)=>{return item.product_sub_cat.product_sub_cat_slug=="cooking-oils"})
      setData(filter)
    }
    
    }
 
  return (
    <div>
    <Navbar style={{position:"fixed"}}/>

    <div id="sorting">
      <div id="filtering" style={{width:"10%",height:"30%",padding:0,fontSize:"20px"}}>
        <span ><FilterListIcon ></FilterListIcon></span><span>Filters by:</span>
      </div>
      <div id="sort">
       <span><SwapVertSharpIcon/></span><span>Sort by:</span><space>    </space><span></span><span>Price: High to Low</span><span>Price: Low to High</span>
       <span>Relevance</span>
       <span>Discount</span>
      </div>
    </div>

    <div id="filter">
    <p>Catageory</p>

    {/* Filter Catageories */}
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Whole Spices & Masalas</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"start",cursor:"pointer"}} id="select_filter">
         
          <p onClick={(e)=>{changeColor(e)}}>Garam Masala</p>
          <p onClick={(e)=>{changeColor(e)}}>Salt</p>
          <p onClick={(e)=>{changeColor(e)}}>Other Powders</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography onClick={(e)=>{changeColor(e)}}>Edible & Utility oils</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"start",cursor:"pointer"}}>
          <p onClick={(e)=>{changeColor(e)}}>Hair Oil</p>
          <p onClick={(e)=>{changeColor(e)}}>Cooking Oil</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{textAlign:"start",cursor:"pointer"}}>
          <p>Earth Fresh</p>
          <p>Pharm Easy</p>
          <p>Hybrid Farms</p>
          

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

   {/* Displaying the data which we got through using Product API */}
    <div className="product_display">
        {
          data.map((item)=>{return  <Card sx={{ maxWidth: 345 }} id="sub_card">
          <CardMedia
            sx={{ height: 140, width: 150, margin: 7 }}
            image="https://via.placeholder.com/350x150"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.product_category.cat_name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:12}}>
            {item.product_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{item.uoms[0].uom}</Button>
            <Button size="small"  style={{backgroundColor:"green",color:"white"}}>ADD</Button>
          </CardActions>
        </Card>})
        }
    </div>

    </div>
  )
}
