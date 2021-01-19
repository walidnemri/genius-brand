//import product from "../../../../Backend/data-layer/models/product"
import React from "react"
import Form from "../../components/Form"

import {
    useParams,
    useHistory,
} from "react-router-dom"; 
import axios from 'axios';


const Edit = () => {
    const history = useHistory()
    const { id } = useParams()
    const [product,setProduct] = React.useState(null)
    const [edit, setEdit] = React.useState(false)

    React.useEffect(()=> {
        getProduct();
    },[])

    React.useEffect(()=> {
         if (product !== null){
             console.log('sa passe')
             postProduct();
        }
    },[product]) 

    React.useEffect(()=> {
        if (edit === true){
            console.log('sa passe')
            editProduct();
       }
   },[product]) 
        

    const postProduct = async () => {
        console.log('sa passe post')
        let res;
        try {
           res = await axios.post("http://localhost:3002/api/products/",product)
        }catch (err){
           console.log(err)
        }

        if (res) history.push("/admin/product")
    }

    const editProduct = async () => {
        console.log('sa passe post')
        let res;
        try {
           res = await axios.put("http://localhost:3002/api/products/"+id,product)
        }catch (err){
           console.log(err)
        }
        //if (res) history.push("/admin/product")
    }

    

    const changeProduct = (data) => {
        console.log("new product",data)
        const newProduct = { ...product };

        Object.keys(data).map(input => {
            newProduct[input] = data[input].value;
        });
        setProduct(newProduct)
    }
    const getProduct = async () => {
        
        let data;
        console.log(id)
        if ( id ) {
            try {
                data = await axios.get("http://localhost:3002/api/products/"+id)
                console.log(data)
                setEdit(true)
            } catch (error){
                console.log(error)
            }
        } else {
            setEdit(false)
        }
        if (data) setProduct(data.data.product)
    }
    return (
        <div>
            <div className="title">
                Products
            </div>
            <Form 
            formField={{
                name: {
                    label: 'name',
                    type: 'string',
                    inputProps: {
                    required: true
                    },
                    value: product && product.name ? product.name : ''
                },
                price: {
                    label: 'price',
                    type: 'number',
                    inputProps: {
                    required: true
                    },
                    value: product && product.price ? product.price : ''
                }
                }}
            submitCallback={changeProduct}
            product={product}
           />
       </div>
    )
}

export default Edit