import { Navigation_bar } from "../components/Navigation_bar";
import SearchBar from "../components/SearchBar";
import { FilterBar } from "../components/FilterBar";
import './ScarchResult.css'
import { Result } from "../components/Result";
import { Footer } from "../components/Footer";

export const ScarchResult=()=> {
  return (
    <div className="Search-main">
    <Navigation_bar/>
    <SearchBar/>
    <FilterBar/>
    <Result/>
    <Footer/>
    </div>
  )
}