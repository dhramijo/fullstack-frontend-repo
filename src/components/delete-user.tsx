import React from 'react';
import { deleteUser } from '../services/user-service';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const DeleteUser: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleDelete = async () => {
        await deleteUser(id!);
        navigate('/'); // Redirect after deletion
    };

    return (
        <div>
            <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};

export default DeleteUser;
