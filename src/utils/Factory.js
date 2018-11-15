// Function to get Initial Loader State
export function getInitialLoaderState() {
    return {
        loadingStack: [],
        loadingStatus: false,
    };
}

// Function to get Initial Login State
export function getInitialLoginState() {
    return {
        apiData: {},
        isAuthenticated: false,
        isAdmin: false,
        userNotExist: false,
    }
}

// Function to get Initial Search State
export function getInitialSearchState() {
    return {
        apiData: [],
        inputSearch: '',
        isSearched: false
    }
}
