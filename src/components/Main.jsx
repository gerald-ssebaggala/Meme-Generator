const Main = () => {
    return ( 
        <div className="meme--main">
            <form className="meme--form">
                <input 
                    type="text" 
                    className="meme--input" 
                    placeholder="Top text" 
                />
                <input 
                    type="text" 
                    className="meme--input" 
                    placeholder="Bottom text" 
                />
                <button 
                    className="meme--button"
                    >Get a new meme image🖼️
                </button>
            </form>
        </div>
     );
}
 
export default Main;