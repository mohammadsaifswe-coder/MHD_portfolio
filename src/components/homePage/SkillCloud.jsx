import React, { useEffect, useState } from "react";
import { fetchSimpleIcons } from "react-icon-cloud";
import { IconCloud } from "../ui/icon-cloud";

const slugs = [
    "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "adobephotoshop", "adobeillustrator", "adobepremierepro", "adobeaftereffects", "coreldraw",
    "figma", "adobexd", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics", "ahrefs",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
    "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "adobephotoshop", "adobeillustrator", "adobepremierepro", "adobeaftereffects", "coreldraw",
    "figma", "adobexd", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics", "ahrefs",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
    "typescript", "javascript", "react", "html5", "css3", "nodedotjs",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "adobephotoshop", "adobeillustrator", "adobepremierepro", "adobeaftereffects", "coreldraw",
    "figma", "adobexd", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics", "ahrefs",
    "googletagmanager", "meta", "googleads", "googlesearchconsole",
    "express", "nextdotjs", "prisma", "postgresql", "firebase",
    "tailwindcss", "mongodb", "python", "vercel", "docker", "git", "github",
    "adobephotoshop", "adobeillustrator", "adobepremierepro", "adobeaftereffects", "coreldraw",
    "figma", "adobexd", "canva",
    "semrush", "hubspot", "mailchimp", "googleanalytics", "ahrefs",
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


          



            <div className="relative animate-float flex size-full  items-center justify-center bg-red-400/0">
                <IconCloud images={whiteIconUrls} />
            </div>
        </>
    );
}