Live Site : news-api-app-demo.netlify.app

Dependancies: NextJS, Axios, React Query, Tailwind CSS

Not all responses consitently have details, descriptions,or authors therefore these have been ignored to ensure a more streamlined experience. The source articles can still be accessed via the links provided.


Issues

1) NextJS uses next/image to handle images. The domain of images thus provided has to be declared in next.config.js file.  The vast quantity of image sources has made this impossible. NextJS documentation  reccomends using https protocol and  ** symbol for handling Wildcard patterns. However images often have non-standard paths (for example, /. in the path) which breaks the site. So the regular <img> tag was used.

2) NEWS API has limited the max no of API calls per day to 100. Further calls will yield an Error

3)Some news links provided by the API will rarely have a 302 error so the cards or card images may not load immediately   
