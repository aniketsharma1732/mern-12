const Child=(props)=>{

    const handleChange=(e)=>{
        props.setName(e.target.value);


    };

    return(

        <div>
            <input type="text" onChange={handleChange} />
            <p>the value i am tr  :{props.name}</p>
        </div>

    )
}