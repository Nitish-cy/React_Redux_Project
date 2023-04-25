import React from 'react'

function Home(props) {
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmotorolaus.vtexassets.com%2Farquivos%2Fids%2F162933%2Fmoto-g-power-5g-pdp-render-Brightwhite-1n94mf9b4.png%3Fv%3D638167540583700000&tbnid=159-MZojP4gNBM&vet=10CLgBEDMouQFqFwoTCPCei63exf4CFQAAAAAdAAAAABAF..i&imgrefurl=https%3A%2F%2Fwww.motorola.com%2Fus%2Fsmartphones&docid=05hGiOK6qIveIM&w=1000&h=1000&q=phone&ved=0CLgBEDMouQFqFwoTCPCei63exf4CFQAAAAAdAAAAABAF"></img>
                  </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home