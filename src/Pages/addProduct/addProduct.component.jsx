import React from 'react';
import AddProductForm from '../../components/add-product-form/add-product-form.component';
import './addProd.styles.css';

export default function AddProd(){
    return(
        <div className="formContainer">
            <AddProductForm />
        </div>
    );
}
