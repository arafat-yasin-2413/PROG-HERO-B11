import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";



const Product = ({ product, handleHeartClickEvents, clickedMap}) => {

    // const convPrice = {product.currentBidPrice.toLocaleString('en-US')}
    const convertedPrice = product.currentBidPrice.toLocaleString('en-US');
    // console.log(convertedPrice);
    const clickedHeart = clickedMap[product.id] || false;

    
    
    
	return (
		

			<tr className="border-t border-gray-400">
				<td className="text-[14px] text-[#0E2954] flex gap-4 py-4 px-4">
					<img
						className="w-12 h-12"
						src={product.image}
						alt=""
					/>
					<h4 className="mt-3 font-semibold">{product.title}</h4>
				</td>
				<td className="text-[14px] font-semibold text-[#0E2954]">${convertedPrice}</td>

                <td className="text-[14px] font-medium text-[#0E2954]">{product.timeLeft} Days left</td>
				{/* <td className=""> <button className="" onClick={()=> handleClickEvents(product)} ><FaRegHeart className="mx-auto" style={{ fontSize: '32px' }} ></FaRegHeart></button> </td> */}
			
                <td>
                    <button className={`${clickedHeart  ? "cursor-not-allowed" : "cursor-pointer"}`} 
                        onClick={()=> handleHeartClickEvents(product)}
                        disabled={clickedHeart}>
                        
                        {
                            clickedHeart ? <FaHeart className="text-red-500 text-xl"></FaHeart> : <FaRegHeart className="text-xl" ></FaRegHeart>
                        }
                    </button>
                </td>
            
            </tr>
		
	);
};

export default Product;
