import "./card.css"

interface CardProps{
    price: number,
    title: string,
    img: string
}

export function Card({price, img, title} : CardProps){
    return(
        <div className="card">
            <img src={img}/>
            <h2>{title}</h2>
            <p><b>R${price}</b></p>
        </div>
    )
}