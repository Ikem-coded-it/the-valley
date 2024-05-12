import SearchBar from "../searchbar";
// import Button from "../button";
import SortButton from "./sort";
import { Formik } from "formik";

export default function ContentHeader() {

    const initialValues = {
        sort: "asc"
    }
    return(
        <div className="h-fit w-full flex flex-col-reverse md:flex-row gap-[10px] justify-start md:justify-between items-start md:items-center">
            <SearchBar
            className={"w-[280px]"} 
            border
            placeholder="Search here..."
            />

            <div className="flex justify-between items-center gap-[10px]">
                <Formik initialValues={initialValues} onSubmit={() => {}}>
                    {({handleChange, handleBlur, values}) => (
                        <SortButton
                        onChange={handleChange}
                        onBlur={handleBlur}
                        values={values}
                        name="sort"
                        />
                    )}
                </Formik>

                {/* <Button
                icon={
                    <img
                    className="h-6 w-6"
                    src="/pages/marketplaces/filter.svg"
                    alt="filter button icon"
                    />
                }
                text="Filter"
                className="font-semibold text-[#212630] text-sm"
                /> */}
            </div>
        </div>
    )
}