import React from "react";

import { useNavigate } from 'react-router-dom';
import { NotFound } from "../../components/NotFount/NotFount";


export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
        <NotFound title="Страница не найдена" buttonText="На главную" buttonAction={()=> navigate("/")}>
        </NotFound>
  );
};