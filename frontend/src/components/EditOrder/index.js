import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { writeTicket } from '../../store/ticket';
import { useParams } from 'react-router-dom';

const EditOrder = () => {
    return <h1>EDIT YOUR TICKET HERE</h1>
}

export default EditOrder;