import React from 'react'


const Glasses = () => {

const GlassesData = [
    { id: 1, name: 'RAY-BAN', price: 12000, description: 'Timeless style aur exceptional quality', Image: 'A.jpg'},
    { id: 2, name: 'PARADA', price: 10500, description: 'Comfortable blend of fashion', Image: '/B.jpg'},
    { id: 3, name: 'GUCCI', price: 9000, description: 'Exude Elegance', Image: '/C.jpg'},
    { id: 4, name: 'ARMANI', price: 7800, description: 'Impeccable', Image: '/D.jpg'},
    { id: 5, name: 'TOM-FORD', price: 6000, description: 'Epitomize Sleek', Image: '/E.jpg'},
    { id: 6, name: 'CARRERA', price: 4500, description: 'Sophisticated eyewear', Image: '/F.jpg'},
]
  return (
    <div>
      <div className="glasses">
        {GlassesData.map((Glasses) =>(
            <div key={Glasses.id} className="glasses-card">
                <img src={Glasses.Image} alt={Glasses.name} />
                <h3>{Glasses.name}</h3>
                <p>{Glasses.description}</p>
                <div className='price'>${Glasses.price}</div>
                <button>Add to cart</button>

            </div>
        ))}
      </div>
    </div>
  )
}

export default Glasses
