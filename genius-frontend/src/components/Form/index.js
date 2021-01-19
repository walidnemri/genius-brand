import React from "react"
import "./style.css"
import {
    TextField,
    Button,
} from '@material-ui/core';

import { useHistory } from "react-router-dom"

const Form = ({formField, submitCallback}) => {
    
    const [fields, setFields] = React.useState(formField);

    React.useEffect(() => {
        setFields(formField)
    },[formField])

    const handleSubmit = () => {
        //console.log('ok')
        const fieldsState = { ...fields };
        submitCallback(fieldsState);
        //history.push("/admin/product")
      };
    
    const handleChangeInput = (e, key) => {
        const newState = { ...fields };
        //console.log(newState)
        newState[key].value = e.target.value;
        setFields(newState);
      };

    const renderContent = Object.keys(formField).map( field => {
        console.log(field)
        if(formField[field].type === 'string' || formField[field].type === 'number') {
            return (
                <div className="input">
                    <TextField 
                    label={formField[field].label}
                    variant="outlined" 
                    value={fields[field].value} 
                    type={formField[field].type}
                    onChange={(e) => handleChangeInput(e,field)}
                    />
                </div>
                
            )
        }
    })
    return (
        <div className="formContent">
            {renderContent}
            <Button onClick={handleSubmit}className="button" variant="contained" color="primary"> save </Button>
        </div>
    )
}

export default Form