import { SearchBar } from "./Searchbar"

export const Appbar = () => {

    return <div className="flex justify-between items-center p-3">
        <div>
            Youtube Logo
        </div>

        <div>
            <SearchBar />
        </div>

        <div>
            Sign in
        </div>
    </div>
}