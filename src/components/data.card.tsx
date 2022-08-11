import React from 'react';
import {Card, CardContent, Typography, CardHeader, List, ListItem, ListItemText, ListItemIcon} from '@mui/material';
import {Folder, Scale, ContactPage, Man, Woman, Height, Speaker} from '@mui/icons-material'
import classes from './data.module.css';


const DataCard:React.FC<{data:{mass:string, height:string; name:string, gender:string, homeworld:string}}> = ({data}) => {
    let personData = data;
    const gender:string = 'male';
    const genderIcon = gender.match('male') ? <Man/> : <Woman/>
    return(
        <Card sx={{width:'50%', backgroundColor:'#eee', }} >
            <CardHeader
                title="MY PERSONAL DETAILS"
            />
            <CardContent>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Scale />
                        </ListItemIcon>
                        <ListItemText
                            primary="Mass"
                            secondary={personData.mass + 'kg'}
                        />
                    </ListItem>,
                </List>

                <List >
                    <ListItem>
                        <ListItemIcon>
                            <ContactPage />
                        </ListItemIcon>
                        <ListItemText
                            primary="Name"
                            secondary={personData.name}
                        />
                    </ListItem>,
                </List>

                <List >
                    <ListItem>
                        <ListItemIcon>
                            {genderIcon}
                        </ListItemIcon>
                        <ListItemText
                            primary="Gender"
                            secondary={personData.gender}
                        />
                    </ListItem>
                </List>

                <List >
                    <ListItem>
                        <ListItemIcon>
                            <Height />
                        </ListItemIcon>
                        <ListItemText
                            primary="Height"
                            secondary={personData.height +'m'}
                        />
                    </ListItem>,
                </List>

                <List >
                    <ListItem>
                        <ListItemIcon>
                            <Speaker />
                        </ListItemIcon>
                        <ListItemText
                            primary="Hello-world"
                            secondary={personData.homeworld}
                        />
                    </ListItem>,
                </List>
            </CardContent>
        </Card>
    )
}

export default DataCard;