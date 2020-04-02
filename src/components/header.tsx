import { Link } from "gatsby";
import React from "react";
import { siteTitle, siteHeader } from '../utils/constants';

const Header:React.FunctionComponent = () => (
	<header className="flex mb-1 py-1 px-2 sm:py-4 sm:px-6 justify-between max-w-screen-xl mx-auto">
		<div className="flex flex-row justify-start items-center">
            <div className="px-2 sm:px-5">
                <Link className="text-black no-underline" to="/">
                    <h1 className="text-3xl font-bold">{siteTitle}</h1>
                </Link>
            </div>
            {
                siteHeader.map((element) => (
                    <div className="hidden sm:flex px-2">
                        <button className="bg-white border border-blue-700 rounded-full text-blue-700 px-5 py-1 hover:text-white hover:bg-blue-700">
                            {element.title}
                        </button>
                    </div>
                ))
            }
		</div>
        <div className="px-2 sm:px-5">
            <span>Dark Mode Icon</span>
        </div>
	</header>
);

export default Header;
