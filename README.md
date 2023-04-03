
Dependencies: NextJS, Axios, React Query, Tailwind CSS
 
Not all responses consistently have details, descriptions or authors. Therefore these have been ignored to ensure a more streamlined experience. The source articles can still be accessed via the links provided.


Issues

I. NextJS uses next/image to handle images. The domain of images thus provided has to be declared in next.config.js file.  The vast quantity of image sources has made this         impossible. NextJS documentation recommends using https protocol and  ** symbol for handling Wildcard patterns. However, images often have non-standard paths (for example,     /. in the path), which breaks the site. So the regular <img> tag was used.

II. NEWS API has limited the max no of API calls per day to 100. Further calls will yield an Error

III. Requests from the browser are not allowed on the Developer plan, except from localhost. 
    So live sites, (Like this deploy i tried:-https://news-api-app-demo.netlify.app ), WILL NOT WORK
