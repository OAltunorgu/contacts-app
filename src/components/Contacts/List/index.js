import { useState } from 'react';

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        );
    });

    return (
        <div>
            <input placeholder="Filter Contact" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul className="list">{
                filtered.map((contact, i) => <li key={i}>
                    <span>{contact.fullName} </span>
                    <span>{contact.phoneNumber}</span></li>)
            }</ul>

            <p>Result: {filtered.length} records are listed</p>
        </div>
    );
}

export default List;
