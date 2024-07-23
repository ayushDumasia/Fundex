'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

const FinanceNews = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    'https://newsapi.org/v2/everything',
                    {
                        params: {
                            q: 'finance',
                            apiKey: 'd9f5d046aa5348579b9afdca4b374032',
                        },
                    }
                );
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching the news', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mx-auto p-4 text-white">
            <h1 className="text-4xl font-bold mb-4">Finance News</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between p-6 bg-[#1c1c24] rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                        {article.urlToImage && (
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="object-cover w-full h-64 mb-4 rounded-2xl"
                                loading="lazy"
                            />
                        )}
                        <div className="flex-grow">
                            <h3 className="text-2xl font-semibold mb-4">
                                {article.title}
                            </h3>
                            <p className="font-normal text-gray-300 mb-6">
                                {article.description}
                            </p>
                        </div>
                        <div>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white flex align-middle items-center w-[9rem] justify-evenly bg-gray-500 p-2 rounded-full font-normal hover:underline"
                            >
                                Read more
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FinanceNews;
