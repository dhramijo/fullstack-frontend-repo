import React, { useState } from 'react';
import { createUser } from '../services/user-service';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

const CreateUser: React.FC = () => {
    const [user, setUser] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUser(user);
        navigate('/'); // Redirect after creation
    };

    return (
        <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h5" align="center" gutterBottom>
                Create User
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
                        Create
                    </Button>
                </Box>
            </form>
        </Paper>
    );
};

export default CreateUser;
