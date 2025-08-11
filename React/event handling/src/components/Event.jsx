import { useState } from "react";

function Event() {
    const handleClick = () => {
        alert("I am clicked");
    };

    const handleMouseOver = () => {
        alert("Mouse is over me");
    };

    const [name, setName] = useState("Heet");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <div className="button">
                <button onClick={handleClick}>Click me</button>
            </div>

            <br />

            {/* <div
                className="red"
                onMouseOver={handleMouseOver}
                style={{ backgroundColor: "red", height: "100px", width: "100px" }}
                > I am a red div </div> 
            */}

            <br />

            <input type="text" value={name} onChange={handleChange} />

        </>
    );
}

export default Event;
