import Container from "../components/Container";
import HeadPages from "../components/HeadPages";
import Navbar from "../components/Navbar";
import { useState } from 'react';

export async function getServerSideProps(ctx) {
    const apiData = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    const respData = await apiData.json();

    return {
        props: {
            data: respData.meals
        },
    }
}

export default function Products(props) {
    const { data } = props;
    const [detailMeals, setDetailMeals] = useState([]);
    const [searchMeals, setSearchMeals] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    async function showDetail(id, e) {
        e.preventDefault();
        const apiData = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
        const respData = await apiData.json();

        setDetailMeals(respData.meals);
        setShowModal(true);
    }

    const meals = detailMeals[0];

    async function submitHandler(e) {
        e.preventDefault();
        const apiData = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchValue);
        const respData = await apiData.json();
        setSearchMeals(respData.meals);
        setShowSearch(true);
        setSearchValue(e.target.reset());
    }

    function searchHandler(e) {
        e.preventDefault();
        const getValue = e.target.value;
        setSearchValue(getValue);
    }

    return (
        <Container className="w-full h-full">
            <HeadPages>Products</HeadPages>
            <Navbar />
            <h1 className="uppercase text-2xl text-center font-medium py-10">our food products.</h1>
            <form className="w-full mx-auto text-center mb-6" onSubmit={submitHandler.bind(this)}>
                <input type="text" placeholder="Search meal..." className="rounded outline-blue-700 py-2 px-3 text-gray-900 w-6/12" onChange={searchHandler.bind(this)} />
            </form>
            <div className="w-full bg-gray-700 rounded-lg p-8 flex flex-wrap items-start justify-between">
                {showSearch ? (
                    searchMeals.map(meals => {
                        return (
                            <div key={meals.idMeal} className="w-4/12 p-6 text-center">
                                <img src={meals.strMealThumb} alt={meals.strMeal} className="rounded-lg border-4 border-white" />
                                <h5 className="text-base font-medium mt-4 capitalize">{meals.strMeal}</h5>
                                <button type="submit" className="w-32 h-11 mt-4 inline-block text-base transition ease-in rounded bg-blue-700 text-white hover:bg-blue-500" onClick={showDetail.bind(this, meals.idMeal)}>Show Detail</button>
                            </div>
                        );
                    })
                ) : (
                    data.map(meal => {
                        return (
                            <div key={meal.idMeal} className="w-4/12 p-6 text-center">
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg border-4 border-white" />
                                <h5 className="text-base font-medium mt-4 capitalize">{meal.strMeal}</h5>
                                <button type="submit" className="w-32 h-11 mt-4 inline-block text-base transition ease-in rounded bg-blue-700 text-white hover:bg-blue-500" onClick={showDetail.bind(this, meal.idMeal)}>Show Detail</button>
                            </div>
                        );
                    })
                )}
            </div>

            {showModal ? (
                <>
                    <div className="justify-center items-center overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-5xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-gray-900 outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-4 border-b border-solid border-gray-500 rounded-t">
                                    <h3 className="text-3xl font-semibold text-blue-900">{meals.strArea}</h3>
                                    <h5 className="text-xl font-medium">{meals.strCategory}</h5>
                                </div>
                                <div className="relative p-4 flex-auto">
                                    <img src={meals.strMealThumb} className="w-3/12 rounded border-2 border-gray-600 mb-2" />
                                    <h5 className="font-medium text-xl text-green-700">{meals.strMeal}</h5>
                                    <p className="my-2 text-gray-500 text-base"><span className="font-semibold text-green-700">Instructions:</span>  {meals.strInstructions}</p>
                                    <a href={meals.strYoutube} className="text-lg font-semibold text-blue-900 hover:text-gray-900 transition-colors">Watch full video ➤</a>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-500 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </Container>
    );
}