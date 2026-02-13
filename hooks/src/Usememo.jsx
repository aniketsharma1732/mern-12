const usememo=()=>{
    const [count,setCount]= usestate(0);

    function handleClick(){
        setCount(count+1);
    };



    return(
        <div>
            <h1>the result of sum:{res}</h1>
            <h1>count:{count}</h1>
            <button onChange={handleClick}>change</button>

            
            <hr />
            <child sayhi={memoizesHi} />
        </div>

    );
}

export default Usememo;