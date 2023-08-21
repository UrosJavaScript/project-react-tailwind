import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/fa/eye";

import GridLoader from "react-spinners/GridLoader";
import { Link } from "react-router-dom";
import Weather from "../Weather";

const ListNews = () => {
  const [data, setData] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [loading, setLoading] = useState(true);
  // paginate state
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  // filter state
  const [selectedCategory, setSelectedCategory] = useState("all");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://64635f954dca1a66135bec32.mockapi.io/news/"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filteredData =
      selectedCategory === "all"
        ? data
        : data.filter((news) => news.category === selectedCategory);

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data, selectedCategory]);

  useEffect(() => {
    if (data?.length > 0) {
      const categoryNames = [...new Set(data.map((item) => item.category))];
      let allCattegory = ["all", ...categoryNames];
      setCategoryName(allCattegory);
    }
  }, [data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <section className="py-6">
        <div className="wrapper">
          <div className="flex justify-between w-full gap-10 max-xl:flex-col">
            {/* col1 */}
            <div className="flex-[2_2_0%]">
              <h3 className="mb-6 text-lg font-semibold text-blackColor">
                Latest news
              </h3>

              {loading ? (
                <div className="flex justify-center w-full">
                  <GridLoader color="#1bc01b" />
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap w-full gap-3 mb-8">
                    {categoryName.map((item, key) => {
                      const buttonClasses = `py-2 text-white transition duration-300 rounded-[2px] px-9 bg-primaryColor hover:opacity-75 font-normal text-base uppercase ${
                        selectedCategory === item ? "bg-zinc-900" : ""
                      }`;
                      return (
                        <div key={key}>
                          <button
                            className={buttonClasses}
                            onClick={() => handleCategoryFilter(item)}
                          >
                            {item}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                    {currentItems?.map((news) => {
                      return (
                        <div
                          key={news.id}
                          className="duration-500 rounded-xl hover:scale-105"
                        >
                          <Link to={`/news-list/${news.id}`}>
                            <div
                              style={{
                                backgroundImage: `url(${news.imageUrl})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                              }}
                              className="h-[250px] w-full rounded-t-xl"
                            ></div>
                          </Link>
                          <div className="flex flex-col w-full gap-3">
                            <div className="mt-2">
                              <span className="px-2 py-1 text-xs text-white capitalize bg-primaryColor">
                                {news.category}
                              </span>
                            </div>
                            <Link to={`/news-list/${news.id}`}>
                              <p className="block text-lg font-bold text-black capitalize">
                                {news.title}
                              </p>
                            </Link>

                            <div className="flex items-center">
                              <p className="text-base font-normal text-black opacity-70">
                                {news.description.slice(0, 150) + "..."}
                              </p>
                            </div>

                            <div className="flex gap-2 text-xs font-normal text-black opacity-70">
                              <span>{news.dateCreated}</span>/
                              <span>
                                BY &nbsp;
                                {news.author.slice(0, news.author.indexOf(" "))}
                              </span>
                              /
                              <span>
                                <Icon size={12} icon={eye} />
                                &nbsp; <span>2887</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* pagination */}
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    previousLabel="Previous"
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeLinkClassName="active"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    renderOnZeroPageCount={null}
                    onClick={handleButtonClick}
                    disabledLinkClassName="disabled"
                  />
                </>
              )}
            </div>

            {/* col2 */}
            <div className="flex-1">
              <h3 className="mb-4 text-lg font-semibold text-blackColor">
                Weather forecast
              </h3>

              <div className="flex flex-col">
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListNews;
