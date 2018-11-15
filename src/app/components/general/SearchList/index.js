import React from 'react';

const setPopulation = (population) => {
    if (population <= 100000) { //1 Lac
        return {
            width: population / 100,
            backgroundColor: 'rgb(9, 253, 9)',
        }
    } else if (population <= 1000000) {      //10 Lac
        return {
            width: population / 1000,
            backgroundColor: '#07ce07',
        }
    } else if (population <= 100000000) {    //10 Crore
        return {
            width: population / 100000,
            backgroundColor: '#008000',
        }
    } else if (population <= 10000000000) {  //1000 Crore
        return {
            width: population / 10000000,
            backgroundColor: '#ffff00',
        }
    } else if (population <= 1000000000000) { //100000 Crore
        return {
            width: population / 1000000000,
            backgroundColor: '#ff0000',
        }
    } else {                                 //unknown
        return {
            width: '100%',
            backgroundColor: '#000000',
        }
    }
};

const createList = (list, index) => {
    return (
        <li key={index}>
            <div className='population-layer' style={setPopulation(list.population)}/>
            <div className='details'>
                <h2>Planet: {list.name}</h2>
                <span>Population: {list.population}</span>
            </div>
        </li>
    )
};

const SearchList = ({lists}) => {
    return (
        <ul className='search-list-section'>
            {
                lists && lists.length
                    ? lists.map(createList)
                    : <li>No result found</li>
            }
        </ul>
    );
};

export default SearchList;