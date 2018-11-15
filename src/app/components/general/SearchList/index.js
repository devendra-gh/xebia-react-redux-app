import React from 'react';

const setPopulation = (population) => {
    population = parseInt(population);

    // less than or equal 1 lac
    if (population <= 100000) {
        return {
            width: '16.66%'
        }
    }
    // less than or equal 10 lac
    else if (population <= 1000000) {
        return {
            width: '33.33%'
        }
    }
    // less than or equal 10 Crore
    else if (population <= 100000000) {
        return {
            width: '50%'
        }
    }
    // less than or equal 1000 Crore
    else if (population <= 10000000000) {
        return {
            width: '66.66%'
        }
    }
    // less than or equal 100000 Crore
    else if (population <= 1000000000000) {
        return {
            width: '83.33%'
        }
    }
    // unknown
    else {
        return {
            width: '100%'
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

const SearchList = ({lists, isSearched}) => {
    return (
        <ul className='search-list-section'>
            {
                isSearched
                    ? lists && lists.length > 0
                    ? lists.map(createList)
                    : <li>No result found</li>
                    : ''
            }
        </ul>
    );
};

export default SearchList;