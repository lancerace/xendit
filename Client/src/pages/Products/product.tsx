import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useEffect , useState} from "react";
import { IProduct } from "../../interfaces/product";
import TableComponent from "../../components/Table";
import Axios from "axios";
interface IProps {
    products: IProduct[];
    [key: string]: any;
}

const useStyles = makeStyles(theme => ({
    mainContainer: {
      minHeight: '30vh',
      '& > div:nth-child(1)': { height: '0vh', border: '0px solid red' },
      '& > div:nth-child(2)': {
        marginTop: '12vh',
        boxShadow:
          '0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)'
      }
    },
    contentContainer: {
      '& > div': { padding: '1vh' },
    },
    success: {
      backgroundColor: '#1db954',
      '&:hover': { backgroundColor: '#178f41' },
    },
  }));

export default function Product(props: IProps) {
const [state,setState] = useState({add:false,nameErr:false,product:{
    name:""
}})

    useEffect(() => {
        console.log("<Product>");
        console.log(props.products);
    }, [props.products])


    const { mainContainer, contentContainer, success } = useStyles();
    return (<Grid justify="center" container>
        <Grid container item md={12} sm={12}>
            <Button color="primary" variant="contained" size="large" onClick={()=>{setState({...state,add:!state.add})}}>Add</Button>
        </Grid>

       {state.add === true ? <Grid container md={4} className={contentContainer} item alignItems="center" style={{ border: '1px solid black', backgroundColor: "white", borderRadius: "10px" }} justify="center" >
          <Grid container item md={12} justify="center">
            <Typography variant="h4">Add Product</Typography>
          </Grid>
          <Grid md={12} item>
            <hr></hr>
          </Grid>
          <Grid item md={12}>
            <TextField fullWidth label="product name" variant="outlined"
              error={state.nameErr}
              helperText={state.product.name? 'Please fill in name!' : ''}
              value={state.product.name} onChange={(e) => {
                if (e.target.value === "")
                  setState({ ...state, nameErr: true, product:{name:e.target.value} })
                else
                  setState({ ...state, nameErr: false, product:{name:e.target.value}  })
              }} />
          </Grid>
          <Grid item md={12}>
            <Button
              onClick={async (e) => {
                if (state.product.name.length !== 0) {
                  const { data } = await Axios.post(`${process.env.REACT_APP_BASE_URL}/product`,
                    { name: state.product.name });
                    
                    if(data.rowAffect>0)
                        alert("add success");
                }
                else
                    setState({ ...state, nameErr: true })
              }}
              classes={{
                containedPrimary: success,
              }}
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableRipple>
              confirm
          </Button>
          </Grid>
      </Grid> : ""}

        <Grid item md={12} sm={12}>
            <TableComponent data={props.products} headers={['product_id', 'name', 'category_id', 'shoppingcart_id', 'create_date', 'updated_date']} />
        </Grid>

    </Grid>)


}