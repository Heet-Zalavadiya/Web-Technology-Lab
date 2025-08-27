function Student() {

    const student = [
        {
            name: "arjun",
            spi: 9.1
        },
        {
            name: "nilesh",
            spi: 10
        },
        {
            name: "vishal",
            spi: 9.2
        },
        {
            name: "shruti",
            spi: 8.6
        }
    ]
    return (
        <>
            {
                student.map((temp) => {
                    return (
                        <>
                            <tr>
                                <td>{temp.name}</td>
                                <td>{temp.spi}</td>
                            </tr>
                        </>)
                })
            }
        </>
    )
}

export default Student
