import React, { Suspense, useEffect, useState } from "react";
import { fetchSimpleIcons } from "react-icon-cloud";
import { IconCloud } from "../ui/icon-cloud";
// const IconCloud = React.lazy(() => import("../ui/icon-cloud").then(module => ({ default: module.IconCloud })));

const slugs = [
    "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "coreldraw",
    "figma", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
    "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "coreldraw",
    "figma", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
    "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "coreldraw",
    "figma", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "coreldraw",
    "figma", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
];

export default function SkillCloud() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchSimpleIcons({ slugs }).then(setData);
    }, []);

    if (!data) return null;

    const icons = Object.values(data.simpleIcons).map((icon) => (
        <div key={icon.slug}>
            <img
                src={`https://cdn.simpleicons.org/${icon.slug}`}
                alt={icon.title}
            />
        </div>
    ));

    const imageUrls = slugs.map((s) => `https://cdn.simpleicons.org/${s}`);

    const whiteIconUrls = slugs.map(
        (slug) => `https://cdn.simpleicons.org/${slug}/ffffff`
    );

    return (
        <>

            <div className="relative animate-float flex items-center justify-center w-full h-[40vh] md:h-[70vh] lg:h-[90vh] 2xl:h-[90vh]">
                <IconCloud images={whiteIconUrls} />
            </div>
            {/* <div className="relative w-full h-75 md:h-125 flex items-center justify-center overflow-hidden">
                <Suspense fallback={<div className="h-75 w-full" />}>
                    <IconCloud images={whiteIconUrls} />
                </Suspense>
            </div> */}
        </>
    );
}