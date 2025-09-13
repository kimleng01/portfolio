import { useState, useEffect, useRef } from 'react';
// import { Button } from './ui/button';
import { Link } from 'react-router-dom';
// import { link } from 'fs';


const pages = [
  {
    leftBgImage:"/public/image.png",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Project  1',
      description: 'This is a responsive e-commerce website built with HTML, CSS, and JavaScript. It showcases product categories such as footwear, bags, jackets, and accessories. The site includes featured products, promotional banners, and a clean navigation system to make browsing easier. It is designed to provide a modern shopping experience with a simple and user-friendly layout.',
    },
    projectLink: "https://kimleng01.github.io/E-commerce/",
  },
  {
    leftBgImage: null,
    rightBgImage: "/public/img2.png",
    leftContent: {
      heading: 'Project 2',
      description: 'Contemporary – Poliform is a curated interior design website that merges modern aesthetics with timeless elegance. Featuring product collections, lifestyle projects, and premium furniture, it delivers a refined user experience for stylish living spaces.',
    },
    projectLink: "https://kimleng01.github.io/Contemporary/",
    rightContent: null,
  },
  {
    leftBgImage: "/public/img1.png",
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Project 3',
      description: 'Family First Interior Design is a premium concierge-quality home care service platform offering bespoke cleaning solutions. We tailor each plan to your home and lifestyle, with high standards, trust, and satisfaction guaranteed.',
    },
    projectLink: "https://kimleng01.github.io/interior-design/",
  },

  
];

export default function ScrollAdventure(){
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  };

  const handleWheel = (e: { deltaY: number; }) => {
    if (scrolling.current) return;
    scrolling.current = true;
    e.deltaY > 0 ? navigateDown() : navigateUp();
    setTimeout(() => (scrolling.current = false), animTime);
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (scrolling.current) return;
    if (e.key === 'ArrowUp') {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === 'ArrowDown') {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => (scrolling.current = false), animTime);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div id="project" className="relative overflow-hidden h-screen bg-black">
      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;

        return (
          <div key={idx} >
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8">
                  {page.leftContent && (
                    <>
                      <h2 className="text-2xl uppercase mb-4 text-center">
                        {page.leftContent.heading}
                      </h2>
                      <p className="text-lg text-center">
                        {page.leftContent.description}
                      </p>
                      <a>
                        <Link to={`${page.projectLink}`}  className="btn btn-primary">View Projec</Link>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8">
                  {page.rightContent && (
                    <>
                      <h2 className="text-2xl uppercase mb-4 text-center">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === 'string' ? (
                        <>
                          <p className="text-lg text-center">
                            {page.rightContent.description}
                          </p>
                          <a>
                              {/* <Button variant="outline" className="mt-4" onClick="">View Project</Button> */}
                              <Link to={`${page.projectLink}`}  className="btn btn-primary">View Projec</Link>
                          </a>
                        </>
                      ) : (
                        <div className="text-lg text-center">
                          {page.rightContent.description}
                        </div>
                        
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
