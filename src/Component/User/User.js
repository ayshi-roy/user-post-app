import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';




const User = (props) => {
        
    const {title,body,id} = props.seePost;
    const userStyle = {
        width: '70%',
        height: '150px',
        border:'none',
        boxShadow: '5px 5px 10px lightGray',
        borderRadius: '20px',
        marginLeft:'200px',
        paddingLeft: '30px'
    }
    
    return (
        <Container maxWidth="lg">            
            <div style={userStyle}>
                <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <Link to={`/User/${id}`}>
                        <Button variant="contained" color="primary">
                            See More
                        </Button>
                    </Link>                    
                </div>                
            </div>
      </Container>
        
    );
};

export default User;