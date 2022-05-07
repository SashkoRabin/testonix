import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import Todo from '../../pages/Todo/Todo';

const SiteRouter = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default SiteRouter;
