import React,{useState} from 'react';
const SearchFilter=()=>{
    const[searchQuery,setSearchQuery]=useState('');
    const[filteredData,setFilteredData]=useState([]);
    const data=[
        'apple',
        'banana',
    ];
    const handleSearch=(e)=>{
        const query=e.target.value;
        setSearchQuery(query);
        const filtered=data.filter(item=>
            item.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
    }
    return (
        <div>
            <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            />
            <ul>
                {filteredData.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
export default SearchFilter;