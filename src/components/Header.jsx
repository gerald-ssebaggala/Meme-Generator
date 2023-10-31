const Header = () => {
    return ( 
        <div className="meme--header">
            <img 
            src={"images/troll-face.png"} 
            alt="logo" 
            className="meme--logo" 
            />
            <h2 className="meme--title">Meme Generator</h2>
            <h3 className="meme--course">React Course - Project 3</h3>
        </div>
     );
}
 
export default Header;