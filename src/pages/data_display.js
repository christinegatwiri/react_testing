import data from '../data/courses.json'
import {Paper,Grid,Button} from '@mui/material';

function DataDisplay(){

    return(
        <div>
            <h1 style={{textAlign:"center"}}>My JSON Data</h1>
                {
                    data.map(({id, title}) => {
                        return(
                            <Grid container>
                                <Grid item xs={12} md={5}>
                                    <Paper>
                                        <h2 style={{color:"black"}}>my id: {id}</h2>
                                        <h2 style={{color:"black"}}>my course: {title}</h2>
                                        <Button color="primary">Click here to stop</Button>
                                    </Paper>
                                </Grid>
                            </Grid>
                        )
                    })
                }            
        </div>
    )
}
export default DataDisplay;