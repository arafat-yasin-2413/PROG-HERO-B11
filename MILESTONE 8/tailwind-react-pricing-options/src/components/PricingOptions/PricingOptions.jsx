import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisiyPricing from '../DaisyPricing/DaisiyPricing';

const PricingOptions = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData);

    return (
        <div>
            <h2 className='text-5xl'>Get our membership</h2>
            
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}


                {
                    pricingData.map(pricing=> 
                        <DaisiyPricing

                            key={pricing.id}
                            pricing = {pricing}
                        
                        ></DaisiyPricing>
                    )
                }
            </div>

        </div>
    );
};

export default PricingOptions;