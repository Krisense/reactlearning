import React from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/posts" element={<Posts/>}/>
        <Route path ="/posts/:id" element={<PostIdPage/>}/>
        <Route path ="/error" element={<Error/>}/>
        <Route path="*" element={<Navigate to="/error" replace />} />
        <Route path="/" element={<Posts/>}/>
        </Routes>
    );
};

export default AppRouter;