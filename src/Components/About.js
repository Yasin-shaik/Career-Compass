export default function about(props)
{
    const padStyle={
        paddingTop: '100px'
    }
    return(
        <>
        <div className="container" style={padStyle}>
            <div style={props.sty} className="accordion" id="accordionExample">
            <div style={props.sty} className="accordion-item">
                <h2 style={props.sty} className="accordion-header">
                <button style={props.sty} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Accordion Item #1</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div style={props.sty} className="accordion-body">
                    This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div style={props.sty} className="accordion-item">
                <h2 style={props.sty} className="accordion-header">
                <button style={props.sty} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Accordion Item #2</strong>
                </button>
                </h2>
                <div style={props.sty} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div style={props.sty} className="accordion-body">
                    This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div style={props.sty} className="accordion-item">
                <h2 style={props.sty} className="accordion-header">
                <button style={props.sty} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Accordion Item #3</strong>
                </button>
                </h2>
                <div style={props.sty} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div style={props.sty} className="accordion-body">
                    This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}