import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, Typography, Paper, Box } from '@mui/material';
import { getAllUsers } from '../services/user-service'; // Import the getAllUsers function

const UserList: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    // Fetch the user list when the component is mounted
    useEffect(() => {
        getAllUsers()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the user list!', error);
            });
    }, []);

    // Handle selecting a user to update or delete
    const handleSelectUser = (id: number) => {
        setSelectedUserId(id);
    };

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" align="center" gutterBottom>
                Welcome to the User Management Application
            </Typography>
            <Typography variant="body1" gutterBottom>
                Here is the list of users:
            </Typography>
            <List>
                {users.map((user: any) => (
                    <ListItem key={user.id}>
                        <ListItemText primary={`${user.name} (${user.email})`} />
                        <Button variant="outlined" onClick={() => handleSelectUser(user.id)}>
                            Select
                        </Button>
                    </ListItem>
                ))}
            </List>

            <Box display="flex" justifyContent="space-between" mt={2}>
                <Link to="/create">
                    <Button variant="contained" color="primary">
                        Create New User
                    </Button>
                </Link>
                {selectedUserId && (
                    <>
                        <Link to={`/update/${selectedUserId}`}>
                            <Button variant="outlined" color="secondary">
                                Update User
                            </Button>
                        </Link>
                        <Link to={`/delete/${selectedUserId}`}>
                            <Button variant="outlined" color="error">
                                Delete User
                            </Button>
                        </Link>
                    </>
                )}
            </Box>
        </Paper>
    );
};

export default UserList;
