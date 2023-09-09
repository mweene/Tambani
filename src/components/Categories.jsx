export default function Categories() {
    return (
        <div className="font-body">
            <p className="text-center uppercase font-semibold text-orange-300 font-head">get the best free movies</p>
            <h2 className="text-7xl text-center font-bold font-head">Pick a genre</h2>
            <ul className="flex gap-4 pt-8 place-content-center capitalize">
                <li className=""><a href="" className="item">action</a></li>
                <li className=""><a href="" className="item">adventure</a></li>
                <li className=""><a href="" className="item">crime</a></li>
                <li className=""><a href="" className="item">thriller</a></li>
                <li className=""><a href="" className="item">horror</a></li>
                <li className=""><a href="" className="item">animated</a></li>
            </ul>
        </div>
    );
}

//object-fit: contain; css check it out