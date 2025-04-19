import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {


    const [money, setMoney] = use(MoneyContext);

    const handlyAddMoney= () => {
        setMoney(money + 5000);
    }

    return (
        <div>
            <h3>Aunt</h3>

            <section className='flex'>
                <Cousin  name='Tom Tom' asset={asset}></Cousin>
                <Cousin name='Jo jooo'></Cousin>

                <button onClick={handlyAddMoney}>Add 5000 tk</button>
            </section>
        </div>
    );
};

export default Aunt;