"use client";

// @flow strict

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <Link href={project.code} target="_blank" className="block">
          <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl hover:text-pink-500 transition-colors duration-300 cursor-pointer">
            {project.name}
          </p>
        </Link>
      </div>
      
      {/* Project Image - Clickable to Demo */}
      <div className="px-4 lg:px-8 pb-6">
        <Link href={project.demo} target="_blank" className="block">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden cursor-pointer group bg-gradient-to-br from-[#1a1443] to-[#0a0d37]">
            <Image
              src={`/image/${project.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace('&', 'and').replace('business-dashboard', 'businessdb')}.jpg`}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // Try alternative naming patterns
                const currentSrc = e.target.src;
                if (currentSrc.includes('civiguard-ai')) {
                  e.target.src = '/image/civiguard-ai.jpg';
                } else if (currentSrc.includes('ats-raiser-ai')) {
                  e.target.src = '/image/ats-raiser-ai.jpg';
                } else if (currentSrc.includes('eamcet-college-predictor')) {
                  e.target.src = '/image/eamcet-college-predictor.jpg';
                } else if (currentSrc.includes('foodieshub')) {
                  e.target.src = '/image/foodieshub.jpg';
                } else if (currentSrc.includes('studyshare')) {
                  e.target.src = '/image/studyshare.jpg';
                } else if (currentSrc.includes('business-dashboard')) {
                  e.target.src = '/image/businessDB.jpg';
                } else if (currentSrc.includes('ecommerce-website')) {
                  e.target.src = '/image/ecommerce-website.jpg';
                } else if (currentSrc.includes('mylinktree')) {
                  e.target.src = '/image/mylinktree.jpg';
                } else if (currentSrc.includes('tumbola-game')) {
                  e.target.src = '/image/tumbola-game.jpg';
                } else {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1443] to-[#0a0d37] flex items-center justify-center" style={{display: 'none'}}>
              <div className="text-center">
                <div className="text-[#16f2b3] text-4xl mb-2">📱</div>
                <div className="text-white font-semibold">{project.name}</div>
                <div className="text-gray-400 text-sm mt-1">Click to view demo</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 text-black px-4 py-2 rounded-lg font-semibold">
                View Live Demo
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div className="mb-4">
          <h3 className="text-white font-semibold mb-2">Tools Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span key={index} className="bg-[#1a1443] text-[#16f2b3] px-3 py-1 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h3 className="text-white font-semibold mb-2">Role:</h3>
          <p className="text-[#16f2b3]">{project.role}</p>
        </div>
        
        <div>
          <h3 className="text-white font-semibold mb-2">Description:</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;