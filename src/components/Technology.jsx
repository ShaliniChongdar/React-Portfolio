import React from 'react'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/redux-Photoroom.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import slack from "../assets/slack.png";
import jira from "../assets/jira.png";
import figma from "../assets/figma-Photoroom.png";
import firebase from "../assets/firebase-Photoroom.png";




const Technology = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: nextjs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 7,
          src: graphql,
          title: "Redux",
          style: "shadow-purple-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
            id: 9,
            src: slack,
            title: "Slack",
            style: "shadow-green-400",
        },
        {
            id: 10,
            src: jira,
            title: "Jira",
            style: "shadow-blue-400",
          },
          {
            id: 11,
            src: figma,
            title: "Figma",
            style: "shadow-pink-400",
          },
          {
            id: 12,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-400",
          },
      ];

      return (
        <div
          name="Technology"
          className="bg-gradient-to-b from-black to-[#25013b] w-full min-h-screen"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="text-4xl font-bold border-b-4 border-purple-700 p-2 inline">
                Tech-Stacks
              </p>
              <p className="py-6">These are the technologies that I am acquainted with.</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Technology;