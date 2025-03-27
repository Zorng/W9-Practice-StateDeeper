import {useState} from "react";

export default function StuffForm({passInput}) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        passInput(
            {
                name: name,
                price: price,
            }
        );
    }



    return (
        <form className="stuff-form" onSubmit={handleSubmit}>
            <p>Stuff name</p>
            <input type="search" placeholder="Banana" onChange={(e) => setName(e.target.value)}  />

            <p>Stuff price</p>
            <input type="search" placeholder="15" onChange={(e) => setPrice(e.target.value)}  />
            <button type="submit">Add Stuff</button>
        </form>
    );
}
