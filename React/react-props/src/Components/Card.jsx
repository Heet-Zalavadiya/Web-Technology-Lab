function Inner5({ name, age, text, cardlink, anotherlink }) {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Age : {age}</h6>
                    <p className="card-text">{text}</p>
                    <a href="#" className="card-link">{cardlink}</a>
                    <a href="#" className="card-link">{anotherlink}</a>
                </div>
            </div>
        </>
    );
}

function Inner4(props) {
    return (
        <Inner5 {...props} nothing={null} />
    )
}


function Inner3(props) {
    return (
        <Inner4 {...props} anotherlink={"https://www.darshan.ac.in/"} />
    )
}

function Inner2(props) {
    return (
        <Inner3 {...props} cardlink={"https://darshanums.in/Login.aspx"} />
    )
}


function Inner1(props) {
    return (
        <Inner2 {...props} text={"This is Card Text"} />
    )
}

function Card() {
    return (
        <>
            <Inner1 name="arjun" age="20" />
        </>
    );
}

export default Card
