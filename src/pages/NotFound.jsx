
const NotFound = () => {
    const notfound = {
        zIndex: "1000000",
        color: "white",
        width: "100vw",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "./assets/background.jpg"
    }
    return (
        <div style={ notfound }>
            <h1 style={{ fontFamily: "Quicksand", fontSize: "24px", color: "red" }}>Page Not Found!</h1>
        </div>
    )

}

export default NotFound 