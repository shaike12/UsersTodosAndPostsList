function SearchComp(props) {
    const handleSearchInput = (value) => {
        props.search(value);
    };

    const showAddUser = () => {
        props.show(false);
        props.showAddUser(true);
    };

    return (
        <div className="serach">
            <label htmlFor="search">Search:</label>
            <input
                type="text"
                name="search"
                onChange={(e) =>
                    handleSearchInput(e.target.value.toLowerCase())
                }
            />
            <input type="button" value="Add" onClick={() => showAddUser()} />
        </div>
    );
}

export default SearchComp;
