import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser, getUserById } from '../services/user-service';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

interface User {
    name: string;
    email: string;
}

const UpdateUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User>({ name: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUserById(id!);
            setUser(response.data);
        };
        fetchUser();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await updateUser(id!, user);
        navigate('/'); // Redirect after update
    };

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" align="center" gutterBottom>
                Update User
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Update
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default UpdateUser;
