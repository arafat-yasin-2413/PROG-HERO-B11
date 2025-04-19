import React from 'react';
import Cousin from './Cousin';

const Aunt = ({asset}) => {
    return (
        <div>
            <h3>Aunt</h3>

            <section className='flex'>
                <Cousin  name='Tom Tom' asset={asset}></Cousin>
                <Cousin name='Jo jooo'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;