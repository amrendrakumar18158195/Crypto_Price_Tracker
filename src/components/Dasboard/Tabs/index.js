import  React from 'react';
// import div from '@mui/material/div';
// import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { colors } from '@mui/material';
import "./styles.css"
import Grid from '../Grid';
import List from '../List';



export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const style = {
  color:"var(--white)",
  width:"50vw",
  fontSize:"1.2rem",
  fontWeight:600,
  fontFamilt:"inter",
  textTrasform:"capitalize",
};



  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className='grid-flex'>
          {coins.map((coin,i) =>{
          return <Grid coin={coin} key={i}/>;
          // (
            // <div key={i}> 
            //   <img src={coin.image}></img>
            //   <p key={i}>
            //   {i+1}.{coin.name}
            // </p>
            // </div>
            
          // )
          } )}
          </div>

        </TabPanel>
        <TabPanel value="list">
       
        <table className='list-table'>
        {coins.map((item,i) =>{
          return <List coin={item} key={i}/>
        })}
          </table>

          </TabPanel>
      </TabContext>
    </div>
  );
}















