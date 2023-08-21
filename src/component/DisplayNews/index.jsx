import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import Icon from "react-icons-kit";
import { pencil } from "react-icons-kit/fa/pencil";
import { globe } from "react-icons-kit/fa/globe";

const DisplayNews = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = useParams().id;

  const fetchData = async () => {
    let apiUrl = "https://64635f954dca1a66135bec32.mockapi.io/news";
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const filteredNews = data.filter((news) => news.id == id);
        setFilteredData(filteredNews);
      });
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  return (
    <>
      <section className="py-10">
        <div className="wrapper">
          <div className="flex flex-col p-4">
            {loading ? (
              <div className="flex justify-center w-full">
                <GridLoader color="#1bc01b" />
              </div>
            ) : (
              filteredData.map((news) => (
                <div className="flex flex-col gap-6" key={news.id}>
                  <h1 className="text-2xl font-semibold uppercase text-blackColor">
                    {news.title}
                  </h1>

                  <div>
                    <img src={news.imageUrl} alt="image" className="lg:w-4/6" />
                  </div>
                  <p className="text-lg text-blackColor">{news.description}</p>

                  <div className="flex items-center gap-1 text-primaryColor">
                    <Icon
                      icon={globe}
                      size={15}
                    />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-normal underline underline-offset-2"
                      href={news.link}
                    >
                      see the whole news
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-[2px] text-primaryColor">
                      <Icon icon={pencil} size={15} />
                      <span>{news.author}</span>
                    </div>
                    <span className="text-primaryColor">#{news.category}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayNews;
