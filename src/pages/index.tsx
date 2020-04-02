import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import {
    homeHeading1,
    homeHeading2,
    homeButtonResume,
    homeButtonWho,
    whoAmIText,
    homeSubheadingSkills,
    skillsList
} from '../utils/constants';

const HomePage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="w-full sm:w-1/2 p-5">
                    <Image />
                </div>
                <div className="flex flex-col w-full my-auto">
                    <div className="flex flex-row justify-evenly">
                        Icons
                    </div>
                    <div className="flex flex-col text-center">
                        <h1 className="text-3xl lg:text-5xl py-1 mt-4">{homeHeading1}</h1>
                        <h1 className="text-3xl lg:text-5xl py-1 mb-4">{homeHeading2}</h1>
                    </div>
                    <div className="flex flex-row justify-evenly"> 
                        <button className="text-white bg-blue-600 rounded-full py-3 mx-6 w-1/2 lg:w-1/3">
                            {homeButtonResume}
                        </button>
                        <button className="text-blue-300 border border-blue-300 rounded-full py-3 mx-6 w-1/2 lg:w-1/3">
                            {homeButtonWho}
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-column py-5 sm:py-2 px-5 sm:px-3">
                <h2 className="font-light text-3xl lg:text-5xl text-blue-400 py-2">{homeButtonWho}</h2>
                <div className="flex flex-row">
                    <div className="h-auto text-blue-600 border-2 border-blue-600 mr-5" />
                    <span className="text-xl">{whoAmIText}</span>
                </div>
            </div>
            <div className="flex-column py-5 sm:py-2 px-5 sm:px-3">
                <h2 className="font-thin text-xl lg:text-2xl text-blue-700 py-2">{homeSubheadingSkills}</h2>
                <div className="flex flex-row justify-around">
                    {
                        skillsList.map((skill) => (
                            <div className="rounded-full text-white bg-blue-00 py-2 px-5">{skill.title}&nbsp;{skill.icon}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Layout>
);

export default HomePage;
