import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

    const Comment = (props) => {
        const { name, email, body } = props.seeCmt; 

        const {userId} = useParams();
        const [image, setImage] = useState([]);
        useEffect(() => {
        const url=`https://randomuser.me/api/?results=${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setImage(data.results[0].picture.large))
        }, []);        
        const commentStyle ={            
            marginLeft:'400px',
            
        }

        const classes = useStyles();
        return (            
            <Container maxWidth="lg">
                <div style ={commentStyle}>
                    <List className={classes.root}>
                        <ListItem alignItems="flex-start">                             
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={image}/>
                            </ListItemAvatar>                            
                            <ListItemText
                                primary= {name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >{email}
                                        </Typography>
                                        {" — "}{body}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>    
                    </List>
                </div>
                
            </Container>
            
        );
    }    



export default Comment;