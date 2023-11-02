function Footer() {
    const hours = new Date().getHours();
    const openHours = 12;
    const clossedHours = 22;
    const isOpen = hours >= openHours && hours <= clossedHours
  
    return (
  
        <div className='footer'>
            {isOpen ? (
                <Order clossedHours={clossedHours} />
            ) : <p style={{ color: "orange" }}>we are currently closed. visit us between {openHours} noon and {clossedHours} hrs </p>
            }
        </div>
    );
  }


  

function Order({ clossedHours }) {
    return <div className='order'>
        <p>we're  open until { clossedHours }: 00, Welcome</p>
        <button className='btn'>order</button>
    </div>
  }


  export default Footer;