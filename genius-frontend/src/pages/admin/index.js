import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import AdminNav from '../../navigation/AdminNav'

import './styles.css' 


const Index = () => {
   
    return (        
        <Router>
        <div className="container">
            <div className="menu">
            <List component="nav" aria-label="main mailbox folders">
                <Link style={{textDecoration: 'none'}}>
                    <ListItem button>
                        <ListItemText style={{color: 'black'}} primary="Dashbord" />
                    </ListItem>
                </Link>
                <Link to='/admin/product' style={{textDecoration: 'none'}}>
                <ListItem button>
                    <ListItemText style={{color: 'black'}} primary="Product" />
                </ListItem>
                </Link>
                <Link to='/admin/Category' style={{textDecoration: 'none'}}>
                <ListItem button>
                    <ListItemText  style={{color: 'black'}} primary="Category" />
                </ListItem>
                </Link>
                <Link to='/admin/Order' style={{textDecoration: 'none'}}>
                <ListItem button>
                    <ListItemText style={{color: 'black'}} primary="Order" />
                </ListItem>
                </Link>
                <Link to='/admin/Collection' style={{textDecoration: 'none'}}>
                <ListItem button>
                    <ListItemText  style={{color: 'black'}} primary="Collection" />
                </ListItem>
                </Link>
            </List>
            </div>
            <div className="vue">
                <AdminNav/>

            </div>
        </div>
        </Router>
    )
}

export default Index