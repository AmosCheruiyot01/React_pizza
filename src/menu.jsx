function Menu({pizzaData}) {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
  
    return <main className='menu'>
        <h2>todays menu:</h2>
  
  
        {numPizzas > 0 ?
            (<>
                <p>Authentic italian cuisine</p>
                <ul className='pizzas'>
                    {pizzaData.map((pizza) =>
                        <Pizza pizzaObj={pizza} key={pizza.name} />
                    )}
                </ul>
            </>
            ) : (<p>no pizzas today💔</p>)}
  
        {/* <Pizza name = "pizza spinacci" ingredients = "tomato" photoName = "pizzas/spinaci.jpg" price = {34}/>
  
        <Pizza name = "pizza margherita" ingredients = "tomato" photoName = "pizzas/margherita.jpg" price = {12}/>
  
        <Pizza name = "pizza funghi" ingredients = "tomato" photoName = "pizzas/funghi.jpg" price = {12}/> */}
    </main>
  }

  function Pizza({ pizzaObj }) {

    // if (pizzaObj.soldOut)
    //     return null;
  
    return (
        <li className={`pizza ${pizzaObj.soldOut? "sold-Out": ""}` } >
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>pizza {pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
            </div>
            <span>{pizzaObj.soldOut? <span>SOLD OUT!</span>: pizzaObj.price}</span>
        </li>
    )
  }

  export default Menu;