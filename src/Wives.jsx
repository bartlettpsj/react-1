const Wives = ({wives}) => {  
    if (wives) {
        return (           
            <section>
                <h3>Wives</h3>
                {wives.map(wife => <p>{wife}</p>)}                                        
            </section>
        )
    } else 
    return null;
};

export default Wives;