App Architecture & Approach:
As the task at hand is not a big one, it's easy for me to avoid the modular approach and keep all my components, screens etc in their related directories instead of placing them in their corresponding modules.

root
-src --> This directory contains all the typescript part of the application
-api --> This directory contains all the api calls.
-assets --> This directory contains all the assets used in the application.
-components --> This directory contains all the components we're using in the application.
-navigation --> This directory contains the navigation logic of the application. I like to keep my navigation in a separate directory to separate it from regular components or screens.
-screens --> This directory contains all the actual screens we are using in the application and their related logic. I tend to separate my UI part and logical part to increase code readability. That's why I rely on using custom hooks a lot. Moreover, even in the custom hooks, I tend to make full use of memoization techniques like useCallback and useMemo to avoid any unnecessary re-renders.
-strings --> This directory contains all text we are using in the app. Instead of using plain strings within the components, this approach allows us to easily integrate localization in the application, if necessary in future.
-types --> As the code is written in typescript, I make use of .d.ts files to specify types which I could use globally. This directory store all such files.

I've used babel module resolver plugin to avoid specifying annoying absolute paths. Moreover, the use of index files in each directory helps the developer to use short import paths in the code.

NOTE: The API Base URL and the API Key are in .env file which is not pushed in the repository. I will provide the .env during the code review.
