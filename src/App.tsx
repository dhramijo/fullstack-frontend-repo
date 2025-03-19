import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserList from './components/user-list';
import CreateUser from './components/create-user';
import UpdateUser from './components/update-user';
import DeleteUser from './components/delete-user';
import { CssBaseline, Container, Typography } from '@mui/material';

const router = createBrowserRouter([
    { path: "/", element: <UserList /> },
    { path: "/create", element: <CreateUser /> },
    { path: "/update/:id", element: <UpdateUser /> },
    { path: "/delete/:id", element: <DeleteUser /> },
]);

const App: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography variant="h3" align="center" gutterBottom>
                    User Management Application
                </Typography>
                <RouterProvider router={router} />
            </Container>
        </div>
    );
};

export default App;
