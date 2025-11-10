import { Topic, TutorialCollection } from './types';

const PARSED_NEXTJS_TUTORIAL_NOTES: Topic[] = [
  {
    "id": "node-version",
    "title": "Node Version",
    "content": [
      { "type": "paragraph", "text": "The minimum Node.js version has been bumped from 16.14 to 18.17, since 16.x has reached end-of-life." }
    ]
  },
  {
    "id": "create-next-app",
    "title": "Create Next App",
    "content": [
      { "type": "code", "language": "sh", "text": "npx create-next-app@14 appName" }
    ]
  },
  {
    "id": "folder-structure",
    "title": "Folder Structure",
    "content": [
      { "type": "list", "items": ["app folder - where we will spend most of our time\n  - setup routes, layouts, loading states, etc", "node_modules - project dependencies", "public - static assets", ".gitignore - sets which will be ignored by source control", "bunch of config files (will discuss as we go)", "in package.json look scripts", "'npm run dev' to spin up the project on http://localhost:3000"] },
      { "type": "code", "language": "sh", "text": "npm run dev" },
      { "type": "list", "items": ["in globals.css remove everything after directives", "get a hold of the README.md"] }
    ]
  },
  {
    "id": "home-page",
    "title": "Home Page",
    "content": [
      { "type": "list", "items": ["page.tsx in the root of app folder", "represents root of our application\n  '/' local domain or production domain", "react component (server component)", "bunch of css classes (will discuss Tailwind in few lectures)", "export component as default", "file name \"page\" has a special meaning", "snippets extension"] },
      { "type": "paragraph", "text": "app/page.tsx" },
      { "type": "code", "language": "tsx", "text": "const HomePage = () => {\n  return (\n    <div>\n      <h1 className='text-7xl'>HomePage</h1>\n    </div>\n  );\n};\nexport default HomePage;" }
    ]
  },
  {
    "id": "create-pages-in-next.js",
    "title": "Create Pages in Next.js",
    "content": [
      { "type": "list", "items": ["in the app folder create a folder with the page.js file\n  - about/page.js\n  - contact/page.js", "can have .js .jsx .tsx extension"] },
      { "type": "paragraph", "text": "app/about/page.tsx" },
      { "type": "code", "language": "tsx", "text": "const AboutPage = () => {\n  return (\n    <div>\n      <h1 className='text-7xl'>AboutPage</h1>\n    </div>\n  );\n};\nexport default AboutPage;" }
    ]
  },
  {
    "id": "link-component",
    "title": "Link Component",
    "content": [
      { "type": "list", "items": ["navigate around the project", "import Link from 'next/link'\n  home page"] },
      { "type": "code", "language": "tsx", "text": "import Link from 'next/link';\nconst HomePage = () => {\n  return (\n    <div>\n      <h1 className='text-7xl'>HomePage</h1>\n      <Link href='/about' className='text-xl text-blue-500 inline-block mt-8'>\n        about page\n      </Link>\n    </div>\n  );\n};\nexport default HomePage;" }
    ]
  },
  {
    "id": "nested-routes",
    "title": "Nested Routes",
    "content": [
      { "type": "list", "items": ["app/info/contact/page.tsx", "if no page.tsx in a segment will result in 404"] },
      { "type": "code", "language": "tsx", "text": "function ContactPage() {\n  return <h1 className='text-7xl'>ContactPage</h1>;\n}\nexport default ContactPage;" }
    ]
  },
  {
    "id": "css-and-tailwind",
    "title": "CSS and Tailwind",
    "content": [
      { "type": "list", "items": ["vanilla css in globals.css", "[Tailwind](https://tailwindcss.com/)"] }
    ]
  },
  {
    "id": "layouts-and-templates",
    "title": "Layouts and Templates",
    "content": [
      { "type": "list", "items": ["layout.tsx", "template.tsx"] },
      { "type": "paragraph", "text": "Layout is a component which wraps other pages and layouts. Allow to share UI. Even when the route changes, layout DOES NOT re-render. Can fetch data but can't pass it down to children. Templates are the same but they re-render." },
      { "type": "list", "items": ["the top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.", "any route segment can optionally define its own Layout. These layouts will be shared across all pages in that segment.", "layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop."] },
      { "type": "code", "language": "tsx", "text": "import './globals.css';\n\nexport default function RootLayout({\n  children,\n}: Readonly<{\n  children: React.ReactNode;\n}>) {\n  return (\n    <html lang='en'>\n      <body>\n        <nav>hello there</nav>\n        {children}\n      </body>\n    </html>\n  );\n}" }
    ]
  },
  {
    "id": "challenge---navbar",
    "title": "Challenge - Navbar",
    "content": [
      { "type": "list", "items": ["create components/Navbar.tsx", "render in layout.tsx"] },
      { "type": "code", "language": "tsx", "text": "import Link from 'next/link';\n\nfunction Navbar() {\n  return (\n    <nav className='max-w-3xl mx-auto py-4 flex gap-x-4'>\n      <Link href='/'>Home</Link>\n      <Link href='/counter'>Counter</Link>\n      <Link href='/tours'>Tours</Link>\n      <Link href='/actions'>Actions</Link>\n    </nav>\n  );\n}\nexport default Navbar;" },
      { "type": "code", "language": "tsx", "text": "import Navbar from '@/components/Navbar';\n\nreturn (\n  <html lang='en'>\n    <body className={inter.className}>\n      <Navbar />\n      <main className='max-w-3xl mx-auto py-10'>{children}</main>\n    </body>\n  </html>\n);" }
    ]
  },
  {
    "id": "fonts---google-fonts",
    "title": "Fonts - Google Fonts",
    "content": [
      { "type": "paragraph", "text": "Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment. No requests are sent to Google by the browser." },
      { "type": "code", "language": "tsx", "text": "import './globals.css';\nimport { Inter } from 'next/font/google';\n\nconst inter = Inter({ subsets: ['latin'] });\n\nexport default function RootLayout({\n  children,\n}: Readonly<{\n  children: React.ReactNode;\n}>) {\n  return (\n    <html lang='en'>\n      <body className={inter.className}>\n        <nav>hello there</nav>\n        {children}\n      </body>\n    </html>\n  );\n}" }
    ]
  },
  {
    "id": "metadata",
    "title": "Metadata",
    "content": [
      { "type": "paragraph", "text": "Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.To define static metadata, export a Metadata object from a layout.tsx or page.tsx file." },
      { "type": "code", "language": "tsx", "text": "import type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'Next.js Project',\n  description: 'A Next.js project with TypeScript and TailwindCSS.',\n  keywords: 'Next.js, Typescript, TailwindCSS',\n};" }
    ]
  },
  {
    "id": "server-components-vs-client-components",
    "title": "Server Components VS Client Components",
    "content": [
      { "type": "list", "items": ["[Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)", "[Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)"] },
      { "type": "list", "items": ["BY DEFAULT, NEXT.JS USES SERVER COMPONENTS !!!!", "To use Client Components, you can add the React \"use client\" directive"] }
    ]
  },
  {
    "id": "server-components",
    "title": "Server Components",
    "content": [
      { "type": "paragraph", "text": "Benefits :" },
      { "type": "list", "items": ["data fetching", "security", "caching", "bundle size"] },
      { "type": "paragraph", "text": "Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.\nSecurity: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.\nCaching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.\nBundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.\nInitial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.\nSearch Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.\nStreaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server." }
    ]
  },
  {
    "id": "client-components",
    "title": "Client Components",
    "content": [
      { "type": "paragraph", "text": "Benefits :" },
      { "type": "list", "items": ["Interactivity: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.", "Browser APIs: Client Components have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases."] }
    ]
  },
  {
    "id": "challenge",
    "title": "Challenge",
    "content": [
      { "type": "list", "items": ["create counter page and setup basic counter"] },
      { "type": "code", "language": "tsx", "text": "'use client';\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div className='flex flex-col items-center w-[100px]'>\n      <p className='text-5xl font-bold'>{count}</p>\n      <button\n        onClick={() => setCount(count + 1)}\n        className='bg-blue-500 rounded-md text-white px-4 py-2 mt-4'\n      >\n        Increment\n      </button>\n    </div>\n  );\n}\nexport default Counter;" }
    ]
  },
  {
    "id": "challenge---refactor",
    "title": "Challenge - Refactor",
    "content": [
      { "type": "list", "items": ["create Counter component and import in CounterPage", "now page can be server component"] },
      { "type": "code", "language": "tsx", "text": "import Counter from '@/components/Counter';\n\nfunction CounterPage() {\n  return (\n    <section>\n      <h1 className='text-6xl mb-16'>Page Content</h1>\n      <Counter />\n    </section>\n  );\n}\nexport default CounterPage;" }
    ]
  },
  {
    "id": "fetch-data-in-server-components",
    "title": "Fetch Data in Server Components",
    "content": [
      { "type": "list", "items": ["create tours/page.tsx", "just add async and start using await 🚀🚀🚀", "the same for db", "Next.tsx extends the native Web fetch() API to allow each request on the server to set its own persistent caching semantics."] },
      { "type": "code", "language": "tsx", "text": "const url = 'https://www.course-api.com/react-tours-project';\n\ntype Tour = {\n  id: string;\n  name: string;\n  info: string;\n  image: string;\n  price: string;\n};\n\nasync function ToursPage() {\n  const response = await fetch(url);\n  const data: Tour[] = await response.json();\n  console.log(data);\n  return (\n    <section>\n      <h1 className='text-3xl mb-4'>Tours</h1>\n\n      {data.map((tour) => {\n        return <h2 key={tour.id}>{tour.name}</h2>;\n      })}\n    </section>\n  );\n}\nexport default ToursPage;" }
    ]
  },
  {
    "id": "refactor-and-delay",
    "title": "Refactor and Delay",
    "content": [
      { "type": "list", "items": ["Refresh browser on another page, navigate to tours, observe delay."] },
      { "type": "code", "language": "tsx", "text": "const fetchTours = async () => {\n  await new Promise((resolve) => setTimeout(resolve, 3000));\n  const response = await fetch(url);\n  const data: Tour[] = await response.json();\n  return data;\n};\n\nasync function ToursPage() {\n  const data = await fetchTours();\n}" }
    ]
  },
  {
    "id": "loading-component",
    "title": "Loading Component",
    "content": [
      { "type": "paragraph", "text": "The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete." },
      { "type": "list", "items": ["tours/loading.tsx"] },
      { "type": "code", "language": "tsx", "text": "'use client';\nconst loading = () => {\n  return <span className='text-xl capitalize'>loading tours...</span>;\n};\nexport default loading;" }
    ]
  },
  {
    "id": "error-component",
    "title": "Error Component",
    "content": [
      { "type": "paragraph", "text": "The error.tsx file convention allows you to gracefully handle unexpected runtime errors in nested routes." },
      { "type": "list", "items": ["tours/error.js", "'use client'"] },
      { "type": "code", "language": "js", "text": "'use client';\nconst error = () => {\n  return <div>there was an error...</div>;\n};\nexport default error;" }
    ]
  },
  {
    "id": "nested-layouts",
    "title": "Nested Layouts",
    "content": [
      { "type": "list", "items": ["create app/tours/layout.tsx", "UI will be applied to app/tours - segment", "don't forget about the \"children\"", "we can fetch data in the layout but...\n  at the moment can't pass data down to children (pages) 😞"] },
      { "type": "paragraph", "text": "layout.tsx" },
      { "type": "code", "language": "js", "text": "function ToursLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <div>\n      <header className='py-2 w-1/2 bg-slate-500 rounded mb-4'>\n        <h1 className='text-3xl text-white text-center'>Nested Layout</h1>\n      </header>\n      {children}\n    </div>\n  );\n}\nexport default ToursLayout;" }
    ]
  },
  {
    "id": "dynamic-routes",
    "title": "Dynamic Routes",
    "content": [
      { "type": "list", "items": ["app/tours/[id]/page.tsx"] },
      { "type": "code", "language": "js", "text": "const page = ({ params }: { params: { id: string } }) => {\n  console.log(params);\n\n  return (\n    <div>\n      <h1 className='text-4xl'>ID : {params.id}</h1>\n    </div>\n  );\n};\nexport default page;" }
    ]
  },
  {
    "id": "challenge---setup-links",
    "title": "Challenge - Setup Links",
    "content": [
      { "type": "code", "language": "tsx", "text": "return (\n  <section>\n    <h1 className='text-3xl mb-4'>Tours</h1>\n\n    {data.map((tour) => {\n      return (\n        <Link\n          key={tour.id}\n          href={`/tours/${tour.id}`}\n          className='hover:text-blue-500'\n        >\n          <h2>{tour.name}</h2>\n        </Link>\n      );\n    })}\n  </section>\n);" }
    ]
  },
  {
    "id": "next-image-component",
    "title": "Next Image Component",
    "content": [
      { "type": "list", "items": ["get random image from pexels site\n  [Random Image](https://www.pexels.com/photo/assorted-map-pieces-2859169/)"] },
      { "type": "paragraph", "text": "The Next.js Image component extends the HTML <img> element with features for automatic image optimization:" },
      { "type": "list", "items": ["Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.", "Visual Stability: Prevent layout shift automatically when images are loading.", "Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.", "Asset Flexibility: On-demand image resizing, even for images stored on remote servers"] },
      { "type": "list", "items": ["disable cache", "width and height"] },
      { "type": "list", "items": ["priority property to prioritize the image for loading\n  When true, the image will be considered high priority and preload."] },
      { "type": "code", "language": "tsx", "text": "import mapsImg from '@/images/maps.jpg';\nimport Image from 'next/image';\nconst url = 'https://www.course-api.com/images/tours/tour-1.jpeg';\n\nconst page = async ({ params }: { params: { id: string } }) => {\n  return (\n    <div>\n      <h1 className='text-4xl'>ID : {params.id}</h1>\n      <section className='flex gap-x-4 mt-4'>\n        <div>\n          <Image\n            src={mapsImg}\n            alt='maps'\n            width={192}\n            height={192}\n            className='w-48 h-48 object-cover rounded'\n          />\n          <h2>local image</h2>\n        </div>\n      </section>\n    </div>\n  );\n};\nexport default page;" }
    ]
  },
  {
    "id": "remote-images",
    "title": "Remote Images",
    "content": [
      { "type": "list", "items": ["To use a remote image, the src property should be a URL string."] },
      { "type": "list", "items": ["Since Next.js does not have access to remote files during the build process, you'll need to provide the width, height and optional blurDataURL props manually."] },
      { "type": "list", "items": ["The width and height attributes are used to infer the correct aspect ratio of image and avoid layout shift from the image loading in. The width and height do not determine the rendered size of the image file."] },
      { "type": "code", "language": "tsx", "text": "import mapsImg from '@/images/maps.jpg';\nimport Image from 'next/image';\nconst url = 'https://www.course-api.com/images/tours/tour-1.jpeg';\n\nconst page = async ({ params }: { params: { id: string } }) => {\n  return (\n    <div>\n      <h1 className='text-4xl'>ID : {params.id}</h1>\n      <section className='flex gap-x-4 mt-4'>\n        <div>\n          <Image\n            src={mapsImg}\n            alt='maps'\n            width={192}\n            height={192}\n            className='w-48 h-48 object-cover rounded'\n          />\n          <h2>local image</h2>\n        </div>\n        <div>\n          <Image\n            src={url}\n            alt='tour'\n            width={192}\n            height={192}\n            priority\n            className='w-48 h-48 object-cover rounded'\n          />\n          <h2>remote image</h2>\n        </div>\n      </section>\n    </div>\n  );\n};\nexport default page;" },
      { "type": "code", "language": "mjs", "text": "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  images: {\n    remotePatterns: [\n      {\n        protocol: 'https',\n        hostname: 'www.course-api.com',\n        port: '',\n        pathname: '/images/**',\n      },\n    ],\n  },\n};\n\nexport default nextConfig;" },
      { "type": "list", "items": ["To safely allow optimizing images, define a list of supported URL patterns in next.config.mjs. Be as specific as possible to prevent malicious usage."] },
      { "type": "list", "items": ["restart dev server"] }
    ]
  },
  {
    "id": "responsive-images",
    "title": "Responsive Images",
    "content": [
      { "type": "list", "items": ["The fill prop allows your image to be sized by its parent element", "sizes property helps the browser select the most appropriate image size to load based on the user's device and screen size, improving website performance and user experience."] },
      { "type": "paragraph", "text": "A string that provides information about how wide the image will be at different breakpoints. The value of sizes will greatly affect performance for images using fill or which are styled to have a responsive size." },
      { "type": "paragraph", "text": "The sizes property serves two important purposes related to image performance:" },
      { "type": "paragraph", "text": "First, the value of sizes is used by the browser to determine which size of the image to download, from next/image's automatically-generated source set. When the browser chooses, it does not yet know the size of the image on the page, so it selects an image that is the same size or larger than the viewport. The sizes property allows you to tell the browser that the image will actually be smaller than full screen. If you don't specify a sizes value in an image with the fill property, a default value of 100vw (full screen width) is used." },
      { "type": "paragraph", "text": "Second, the sizes property configures how next/image automatically generates an image source set. If no sizes value is present, a small source set is generated, suitable for a fixed-size image. If sizes is defined, a large source set is generated, suitable for a responsive image. If the sizes property includes sizes such as 50vw, which represent a percentage of the viewport width, then the source set is trimmed to not include any values which are too small to ever be necessary." },
      { "type": "paragraph", "text": "tours.tsx" },
      { "type": "code", "language": "js", "text": "return (\n  <div className='grid md:grid-cols-2 gap-8'>\n    {data.map((tour) => {\n      return (\n        <Link\n          key={tour.id}\n          href={`/tours/${tour.id}`}\n          className='hover:text-blue-500'\n        >\n          <div className='relative h-48 mb-2'>\n            <Image\n              src={tour.image}\n              alt={tour.name}\n              fill\n              sizes='33vw'\n              // sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'\n              priority\n              className='object-cover rounded'\n            />\n          </div>\n          <h2>{tour.name}</h2>\n        </Link>\n      );\n    })}\n  </div>\n);" }
    ]
  },
  {
    "id": "more-routing",
    "title": "More Routing",
    "content": [
      { "type": "list", "items": ["Private Folders\n  _folder", "Route Groups\n  (dashboard)", "Dynamic Routes\n\n  - [...folder] - Catch-all route segment\n  - [[...folder]] Optional catch-all route segment (used by Clerk)"] },
      { "type": "list", "items": ["create test folder app/_css", "create app/(dashboard)/auth\n\n  - the url is just '/auth'"] },
      { "type": "list", "items": ["create app/(dashboard)/auth/[sign-in]"] },
      { "type": "code", "language": "ts", "text": "const SignInPage = ({ params }: { params: { 'sign-in': string } }) => {\n  console.log(params);\n  return <div>SignInPage</div>;\n};\nexport default SignInPage;" },
      { "type": "list", "items": ["create app/(dashboard)/auth/[...sign-in]", "create app/(dashboard)/auth/[[...sign-in]]"] },
      { "type": "code", "language": "ts", "text": "const SignInPage = ({ params }: { params: { 'sign-in': string[] } }) => {\n  console.log(params);\n  console.log(params['sign-in'][1]);\n  return <div>SignInPage :{params['sign-in'][1]}</div>;\n};\nexport default SignInPage;" }
    ]
  },
  {
    "id": "server-actions",
    "title": "Server Actions",
    "content": [
      { "type": "list", "items": ["asynchronous server functions that can be called directly from your components."] },
      { "type": "list", "items": ["typical setup for server state mutations (create, update, delete)\n\n  - endpoint on the server (api route on Next.js)\n  - make request from the front-end\n    - setup form, handle submission etc"] },
      { "type": "list", "items": ["Next.js server actions allow you to mutate server state directly from within a React component by defining server-side logic alongside client-side interactions."] },
      { "type": "paragraph", "text": "Rules :" },
      { "type": "list", "items": ["must be async", "add 'use server' in function body (only in RSC)", "can use in RCC but only as import"] },
      { "type": "paragraph", "text": "RSC - React Server Component\nRCC - React Client Component" },
      { "type": "code", "language": "tsx", "text": "export default function ServerComponent() {\n  async function myAction(formData) {\n    'use server';\n    // access input values with formData\n    // formData.get('name')\n    // mutate data (server)\n    // revalidate cache\n  }\n\n  return <form action={myAction}>...</form>;\n}" },
      { "type": "list", "items": ["or setup in a separate file ('use server' at the top)\n  - can use in both (RSC and RCC)"] },
      { "type": "paragraph", "text": "utils/actions.js" },
      { "type": "code", "language": "tsx", "text": "'use server';\n\nexport async function myAction() {\n  // ...\n}" },
      { "type": "code", "language": "tsx", "text": "'use client';\n\nimport { myAction } from './actions';\n\nexport default function ClientComponent() {\n  return (\n    <form action={myAction}>\n      <button type='submit'>Add to Cart</button>\n    </form>\n  );\n}" }
    ]
  },
  {
    "id": "actions-page---setup",
    "title": "Actions Page - Setup",
    "content": [
      { "type": "list", "items": ["create Form and UsersList in components"] },
      { "type": "code", "language": "tsx", "text": "import Form from '@/components/Form';\nimport UsersList from '@/components/UsersList';\n\nfunction ActionsPage() {\n  return (\n    <>\n      <Form />\n      <UsersList />\n    </>\n  );\n}\nexport default ActionsPage;" }
    ]
  },
  {
    "id": "form---setup",
    "title": "Form - Setup",
    "content": [
      { "type": "code", "language": "tsx", "text": "const createUser = async () => {\n  'use server';\n  console.log('creating user....');\n};\n\nfunction Form() {\n  return (\n    <form action={createUser} className={formStyle}>\n      <h2 className='text-2xl capitalize mb-4'>create user</h2>\n      <input\n        type='text'\n        name='firstName'\n        required\n        className={inputStyle}\n        defaultValue='peter'\n      />\n      <input\n        type='text'\n        name='lastName'\n        required\n        className={inputStyle}\n        defaultValue='smith'\n      />\n      <button type='submit' className={btnStyle}>\n        submit\n      </button>\n    </form>\n  );\n}\nexport default Form;\n\nconst formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';\nconst inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';\nconst btnStyle =\n  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';" }
    ]
  },
  {
    "id": "actions-file",
    "title": "Actions File",
    "content": [
      { "type": "list", "items": ["create utils/actions.ts", "make \"Form\" Client Component ('use client')", "import in Form"] },
      { "type": "code", "language": "ts", "text": "'use server';\n\nexport const createUser = async () => {\n  console.log('creating user....');\n};" },
      { "type": "code", "language": "tsx", "text": "'use client';\n\nimport { createUser } from '@/utils/actions';" }
    ]
  },
  {
    "id": "formdata",
    "title": "FormData",
    "content": [
      { "type": "code", "language": "ts", "text": "export const createUser = async (formData: FormData) => {\n  const firstName = formData.get('firstName') as string;\n  const lastName = formData.get('lastName') as string;\n  const rawData = Object.fromEntries(formData);\n  console.log(rawData);\n  console.log({ firstName, lastName });\n};" }
    ]
  },
  {
    "id": "save-user",
    "title": "Save User",
    "content": [
      { "type": "list", "items": ["just as an example", "create \"users.json\" (root !!!)", "won't work on vercel (deployment)"] },
      { "type": "code", "language": "ts", "text": "'use server';\n\nimport { readFile, writeFile } from 'fs/promises';\n\ntype User = {\n  id: string;\n  firstName: string;\n  lastName: string;\n};\n\nexport const createUser = async (formData: FormData) => {\n  const firstName = formData.get('firstName') as string;\n  const lastName = formData.get('lastName') as string;\n  const newUser: User = { firstName, lastName, id: Date.now().toString() };\n  await saveUser(newUser);\n};\n\nexport const fetchUsers = async (): Promise<User[]> => {\n  const result = await readFile('users.json', { encoding: 'utf8' });\n  const users = result ? JSON.parse(result) : [];\n  return users;\n};\n\nconst saveUser = async (user: User) => {\n  const users = await fetchUsers();\n  users.push(user);\n  await writeFile('users.json', JSON.stringify(users));\n};" }
    ]
  },
  {
    "id": "userslist",
    "title": "UsersList",
    "content": [
      { "type": "code", "language": "tsx", "text": "import { fetchUsers } from '@/utils/actions';\nasync function UsersList() {\n  const users = await fetchUsers();\n  return (\n    <div className='mt-4'>\n      {users.length ? (\n        <div>\n          {users.map((user) => (\n            <h4 key={user.id} className='capitalize text-lg'>\n              {user.firstName} {user.lastName}\n            </h4>\n          ))}\n        </div>\n      ) : (\n        <p>No users found...</p>\n      )}\n    </div>\n  );\n}\nexport default UsersList;" }
    ]
  },
  {
    "id": "revalidatepath",
    "title": "RevalidatePath",
    "content": [
      { "type": "code", "language": "ts", "text": "import { revalidatePath } from 'next/cache';\nimport { redirect } from 'next/navigation';\n\nexport const createUser = async (formData: FormData) => {\n  //...\n  revalidatePath('/actions');\n};" },
      { "type": "list", "items": ["if the data is displayed in a different page"] },
      { "type": "code", "language": "ts", "text": "export const createUser = async (formData: FormData) => {\n  //...\n  redirect('/');\n};" },
      { "type": "list", "items": ["don't \"redirect\" place inside \"try\" block"] },
      { "type": "code", "language": "tsx", "text": "try {\n  await saveUser(newUser);\n  // will trigger error\n  redirect('/');\n} catch (error) {\n  console.error(error);\n}" }
    ]
  },
  {
    "id": "pending-state",
    "title": "Pending State",
    "content": [
      { "type": "list", "items": ["make sure Form is Client Component", "in createUser switch back to revalidatePath(/actions)"] },
      { "type": "paragraph", "text": "[React Docs - useFormStatus](https://react.dev/reference/react-dom/hooks/useFormStatus)" },
      { "type": "list", "items": ["useFormStatus()", "The useFormStatus Hook provides status information of the last form submission."] },
      { "type": "list", "items": ["The useFormStatus Hook must be called from a component that is rendered inside a <form>.", "useFormStatus will only return status information for a parent <form>.\n  It will not return status information for any <form> rendered in that same component or children components."] },
      { "type": "code", "language": "tsx", "text": "import { useFormStatus, useFormState } from 'react-dom';\n\n  const SubmitButton = () => {\n    const { pending } = useFormStatus();\n    return (\n      <button type='submit' className={btnStyle} disabled={pending}>\n        {pending ? 'submitting...' : 'submit'}\n      </button>\n    );\n  };" }
    ]
  },
  {
    "id": "result",
    "title": "Result",
    "content": [
      { "type": "paragraph", "text": "[React Docs - useFormState](https://react.dev/reference/react-dom/hooks/useFormState)" },
      { "type": "list", "items": ["useFormState()", "a Hook that allows you to update state based on the result of a form action."] },
      { "type": "code", "language": "tsx", "text": "const [message, formAction] = useFormState(createUser, null);\nreturn (\n  <form action={formAction} className={formStyle}>\n    {message && <p>{message}</p>}\n    ...\n  </form>\n);" },
      { "type": "code", "language": "ts", "text": "export const createUser = async (prevState: any, formData: FormData) => {\n  // current state of the form\n  console.log(prevState);\n\n  const firstName = formData.get('firstName') as string;\n  const lastName = formData.get('lastName') as string;\n  const newUser: User = { firstName, lastName, id: Date.now().toString() };\n\n  try {\n    await saveUser(newUser);\n    revalidatePath('/actions');\n    // throw Error();\n    return 'user created successfully...';\n  } catch (error) {\n    console.error(error);\n    return 'failed to create user...';\n  }\n};" }
    ]
  },
  {
    "id": "delete-user",
    "title": "Delete User",
    "content": [
      { "type": "list", "items": ["create components/DeleteButton", "refactor UsersList"] },
      { "type": "code", "language": "tsx", "text": "function DeleteButton({ id }: { id: string }) {\n  return (\n    <form>\n      <button\n        type='submit'\n        className='bg-red-500 text-white text-xs rounded p-2'\n      >\n        delete\n      </button>\n    </form>\n  );\n}\nexport default DeleteButton;" },
      { "type": "code", "language": "tsx", "text": "import { fetchUsers } from '@/utils/actions';\nimport DeleteButton from './DeleteButton';\nasync function UsersList() {\n  const users = await fetchUsers();\n  return (\n    <div className='mt-4'>\n      {users.length ? (\n        <div className='max-w-lg'>\n          {users.map((user) => (\n            <h4\n              key={user.id}\n              className='capitalize text-lg flex justify-between items-center mb-2'\n            >\n              {user.firstName} {user.lastName}\n              <DeleteButton id={user.id} />\n            </h4>\n          ))}\n        </div>\n      ) : (\n        <p>No users found...</p>\n      )}\n    </div>\n  );\n}\nexport default UsersList;" }
    ]
  },
  {
    "id": "delete-action",
    "title": "Delete Action",
    "content": [
      { "type": "code", "language": "ts", "text": "export const deleteUser = async (formData: FormData) => {\n  const id = formData.get('id') as string;\n  const users = await fetchUsers();\n  const updatedUsers = users.filter((user: User) => user.id !== id);\n  await writeFile('users.json', JSON.stringify(updatedUsers));\n  revalidatePath('/actions');\n};" },
      { "type": "code", "language": "tsx", "text": "import { deleteUser } from '@/utils/actions';\n\nfunction DeleteButton({ id }: { id: string }) {\n  return (\n    <form action={deleteUser}>\n      <input type='hidden' name='id' value={id} />\n      <button\n        type='submit'\n        className='bg-red-500 text-white text-xs rounded p-2'\n      >\n        delete\n      </button>\n    </form>\n  );\n}\nexport default DeleteButton;" },
      { "type": "code", "language": "tsx", "text": "import { deleteUser, removeUser } from '@/utils/actions';\n\nfunction DeleteButton({ id }: { id: string }) {\n  const removeUserWithId = removeUser.bind(null, id);\n  return (\n    <form action={removeUserWithId}>\n      <input type='hidden' name='name' value='shakeAndBake' />\n      <button\n        type='submit'\n        className='bg-red-500 text-white text-xs rounded p-2'\n      >\n        delete\n      </button>\n    </form>\n  );\n}\nexport default DeleteButton;" }
    ]
  },
  {
    "id": "bind-option",
    "title": "Bind Option",
    "content": [
      { "type": "list", "items": ["An alternative to passing arguments as hidden input fields in the form (e.g. `<input type=\"hidden\" name=\"userId\" value={userId} />`) is to use the bind option. With this approach, the value is not part of the rendered HTML and will not be encoded."] },
      { "type": "list", "items": [".bind works in both Server and Client Components. It also supports progressive enhancement."] },
      { "type": "code", "language": "ts", "text": "export const removeUser = async (id: string, formData: FormData) => {\n  const name = formData.get('name') as string;\n  console.log(name);\n\n  const users = await fetchUsers();\n  const updatedUsers = users.filter((user) => user.id !== id);\n  await writeFile('users.json', JSON.stringify(updatedUsers));\n  revalidatePath('/actions');\n};" }
    ]
  },
  {
    "id": "route-handlers",
    "title": "Route Handlers",
    "content": [
      { "type": "list", "items": ["install Thunder Client"] },
      { "type": "paragraph", "text": "Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs." },
      { "type": "list", "items": ["in app create folder \"api\"", "in there create folder \"users\" with route.ts file"] },
      { "type": "paragraph", "text": "The following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response." },
      { "type": "paragraph", "text": "In addition to supporting native Request and Response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases." },
      { "type": "paragraph", "text": "app/api/users/route.ts" },
      { "type": "code", "language": "ts", "text": "// the following HTTP methods are supported: GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.\n\nimport { NextRequest, NextResponse } from 'next/server';\nimport { fetchUsers, saveUser } from '@/utils/actions';\n\nexport const GET = async () => {\n  const users = await fetchUsers();\n  return Response.json({ users });\n};\n\nexport const POST = async (request: Request) => {\n  const user = await request.json();\n  const newUser = { ...user, id: Date.now().toString() };\n  await saveUser(newUser);\n  return Response.json({ msg: 'user created' });\n};" },
      { "type": "code", "language": "ts", "text": "import { fetchUsers, saveUser } from '@/utils/actions';\n\nexport const GET = async (request: Request) => {\n  const { searchParams } = new URL(request.url);\n  const id = searchParams.get('id');\n  console.log(id);\n\n  const users = await fetchUsers();\n  return Response.json({ users });\n};" },
      { "type": "code", "language": "ts", "text": "import { fetchUsers, saveUser } from '@/utils/actions';\nimport { NextRequest, NextResponse } from 'next/server';\n\nexport const GET = async (request: NextRequest) => {\n  console.log(request.url);\n  console.log(request.nextUrl.searchParams.get('id'));\n\n  const users = await fetchUsers();\n  return NextResponse.redirect(new URL('/', request.url));\n};" },
      { "type": "paragraph", "text": "The URL constructor takes two arguments: url and base. If the url is a relative URL, then base is required. If url is an absolute URL, then base is ignored." },
      { "type": "paragraph", "text": "Here, '/' is the url and request.url is the base." },
      { "type": "paragraph", "text": "This means it's creating a new URL object that represents the root of the URL contained in request.url." },
      { "type": "paragraph", "text": "For example, if request.url is 'http://example.com/path/to/resource', the new URL object would represent 'http://example.com/'." }
    ]
  },
  {
    "id": "middleware",
    "title": "Middleware",
    "content": [
      { "type": "paragraph", "text": "[Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)" },
      { "type": "paragraph", "text": "Middleware in Next.js is a piece of code that allows you to perform actions before a request is completed and modify the response accordingly." },
      { "type": "list", "items": ["create middleware.ts in the root", "by default will be invoked for every route in your project"] },
      { "type": "code", "language": "ts", "text": "export function middleware(request) {\n  return Response.json({ msg: 'hello there' });\n}\n\nexport const config = {\n  matcher: '/about',\n};" },
      { "type": "code", "language": "ts", "text": "import { NextResponse } from 'next/server';\n\n// This function can be marked `async` if using `await` inside\nexport function middleware(request) {\n  return NextResponse.redirect(new URL('/', request.url));\n}\n\n// See \"Matching Paths\" below to learn more\nexport const config = {\n  matcher: ['/about/:path*', '/tours/:path*'],\n};" }
    ]
  },
  {
    "id": "local-build",
    "title": "Local Build",
    "content": [
      { "type": "list", "items": ["cleanup middleware", "fix css in UsersList.tsx", "remove all users from 'users.json'", "'npm run build' followed by 'npm start'"] }
    ]
  },
  {
    "id": "caching",
    "title": "Caching",
    "content": [
      { "type": "list", "items": ["[Vercel Video](https://www.youtube.com/watch?v=VBlSe8tvg4U)", "[Docs](https://nextjs.org/docs/app/building-your-application/caching)"] }
    ]
  }
];

const PARSED_TYPESCRIPT_TUTORIAL_NOTES: Topic[] = [
    {
        "id": "introduction",
        "title": "Introduction to the TypeScript Guide",
        "content": [
            { "type": "paragraph", "text": "This project stands as an in-depth guide to TypeScript, meticulously covering its fundamental basics and progressing to its more advanced concepts. It starts with basic setup instructions for creating a TypeScript project using Vite and progresses through a series of tutorials covering various TypeScript features and best practices. Key topics include type annotations, type inference, practical applications of type annotation, union types, handling of \"any\", \"unknown\", and \"never\" types, arrays, and objects fundamentals, challenges to reinforce learning, and functions with their complexities." },
            { "type": "paragraph", "text": "The project also delves into advanced TypeScript features such as generics, fetching data with TypeScript, working with the Zod library for data validation, understanding TypeScript declaration files, and class-based programming with TypeScript. Each tutorial is designed to provide hands-on experience with TypeScript, helping learners understand how to apply TypeScript features in real-world scenarios effectively." },
            { "type": "paragraph", "text": "Overall, the project is an in-depth TypeScript learning resource, ideal for developers who wish to gain a thorough understanding of TypeScript, from basic to advanced levels, through practical examples and challenges." }
        ]
    },
    {
        "id": "install",
        "title": "Install",
        "content": [
            { "type": "code", "language": "sh", "text": "npm create vite@latest typescript -- --template vanilla-ts" }
        ]
    },
    {
        "id": "setup",
        "title": "Setup",
        "content": [
            { "type": "list", "items": ["create src/tutorial.ts", "import tutorial in src/main.ts"] },
            { "type": "code", "language": "ts", "text": "import './tutorial.ts';" },
            { "type": "list", "items": ["write code in tutorial", "create README.md", "copy from final"] }
        ]
    },
    {
        "id": "type-annotations",
        "title": "Type Annotations",
        "content": [
            { "type": "paragraph", "text": "TypeScript Type Annotations allow developers to specify the types of variables, function parameters, return types, and object properties." },
            { "type": "code", "language": "ts", "text": "let awesomeName: string = 'shakeAndBake';\nawesomeName = 'something';\nawesomeName = awesomeName.toUpperCase();\n// awesomeName = 20;\n\nconsole.log(awesomeName);\n\nlet amount: number = 12;\namount = 12 - 1;\n// amount = 'pants';\n\nlet isAwesome: boolean = true;\nisAwesome = false;\n// isAwesome = 'shakeAndBake';" }
        ]
    },
    {
        "id": "type-inference",
        "title": "Type Inference",
        "content": [
            { "type": "paragraph", "text": "The typescript compiler can infer the type of the variable based on the literal value that is assigned when it is defined. Just make sure you are working in the typescript file 😄" },
            { "type": "code", "language": "ts", "text": "let awesomeName = 'shakeAndBake';\nawesomeName = 'something';\nawesomeName = awesomeName.toUpperCase();\n// awesomeName = 20;" }
        ]
    },
    {
        "id": "challenge-types",
        "title": "Challenge: Basic Types",
        "content": [
            { "type": "list", "items": ["Create a variable of type string and try to invoke a string method on it.", "Create a variable of type number and try to perform a mathematical operation on it.", "Create a variable of type boolean and try to perform a logical operation on it.", "Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.", "You can use type annotation or inference"] },
            { "type": "code", "language": "ts", "text": "// 1. String\nlet greeting: string = 'Hello, TypeScript!';\ngreeting = greeting.toUpperCase(); // This should work fine\n\n// 2. Number\nlet age: number = 25;\nage = age + 5; // This should work fine\n\n// 3. Boolean\nlet isAdult: boolean = age >= 18;\nisAdult = !isAdult; // This should work fine\n\n// 4. Assigning different types\n// Uncommenting any of these will result in a TypeScript error\n// greeting = 10; // Error: Type 'number' is not assignable to type 'string'\n// age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'\n// isAdult = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'" }
        ]
    },
    {
        "id": "setup-info",
        "title": "Setup Info",
        "content": [
            { "type": "list", "items": ["even with error you can run the project but you won't be able to build it \"npm run build\""] }
        ]
    },
    {
        "id": "union-type",
        "title": "Union Type",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that a variable can hold one of several specific values. More examples are coming up." },
            { "type": "code", "language": "ts", "text": "let tax: number | string = 10;\ntax = 100;\ntax = '$10';\n\n// fancy name - literal value type\nlet requestStatus: 'pending' | 'success' | 'error' = 'pending';\nrequestStatus = 'success';\nrequestStatus = 'error';\n// requestStatus = 'random';" }
        ]
    },
    {
        "id": "type-any",
        "title": "Type - \"any\"",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, the \"any\" type is a powerful way to work with existing JavaScript, allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type can hold a value of any type. Later will also cover - \"unknown\" and \"never\"" },
            { "type": "code", "language": "ts", "text": "let notSure: any = 4;\nnotSure = 'maybe a string instead';\nnotSure = false; // okay, definitely a boolean" }
        ]
    },
    {
        "id": "practical-application-of-type-annotation",
        "title": "Practical Application of Type Annotation",
        "content": [
            { "type": "code", "language": "ts", "text": "const books = ['1984', 'Brave New World', 'Fahrenheit 451'];\n\nlet foundBook: string | undefined;\n\nfor (let book of books) {\n  if (book === '1984') {\n    foundBook = book;\n    foundBook = foundBook.toUpperCase();\n    break;\n  }\n}\n\nconsole.log(foundBook?.length);" },
            { "type": "paragraph", "text": "The reason to explicitly type foundBook as string | undefined is to make it clear to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values." }
        ]
    },
    {
        "id": "challenge-union-types",
        "title": "Challenge: Union Types",
        "content": [
            { "type": "list", "items": ["Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.", "Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'."] },
            { "type": "code", "language": "ts", "text": "// 1. Order Status\nlet orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';\norderStatus = 'shipped';\norderStatus = 'delivered';\n// orderStatus = 'cancelled'; // This will result in a TypeScript error\n\n// 2. Discount\nlet discount: number | string = 20;\ndiscount = '20%';\n// discount = true; // This will result in a TypeScript error" }
        ]
    },
    {
        "id": "arrays-fundamentals",
        "title": "Arrays - Fundamentals",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, arrays are used to store multiple values in a single variable. You can define the type of elements that an array can hold using type annotations." },
            { "type": "code", "language": "ts", "text": "let prices: number[] = [100, 75, 42];\n\nlet fruit: string[] = ['apple', 'orange'];\n// fruit.push(1);\n// let people: string[] = ['bobo', 'peter', 1];\n//\n// be careful \"[]\" means literally empty array\n// let randomValues: [] = [1];\n\n// be careful with inferred array types\n// let names = ['peter', 'susan'];\n// let names = ['peter', 'susan', 1];\nlet array: (string | boolean)[] = ['apple', true, 'orange', false];" }
        ]
    },
    {
        "id": "challenge-arrays",
        "title": "Challenge: Arrays",
        "content": [
            { "type": "list", "items": ["Create an array temperatures of type number[] and assign it some values. Then, try to add a string value to it.", "Create an array colors of type string[] and assign it some values. Then, try to add a boolean value to it.", "Create an array mixedArray of type (number | string)[] and assign it some values. Then, try to add a boolean value to it."] },
            { "type": "code", "language": "ts", "text": "// 1. Temperatures\nlet temperatures: number[] = [20, 25, 30];\n// temperatures.push('hot'); // This will result in a TypeScript error\n\n// 2. Colors\nlet colors: string[] = ['red', 'green', 'blue'];\n// colors.push(true); // This will result in a TypeScript error\n\n// 3. Mixed Array\nlet mixedArray: (number | string)[] = [1, 'two', 3];\n// mixedArray.push(true); // This will result in a TypeScript error" }
        ]
    },
    {
        "id": "objects-fundamentals",
        "title": "Objects - Fundamentals",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, an object is a collection of key-value pairs with specified types for each key, providing static type checking for properties." },
            { "type": "code", "language": "ts", "text": "let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };\ncar.brand = 'ford';\n// car.color = 'blue';\n\nlet car1: { brand: string; year: number } = { brand: 'audi', year: 2021 };\n// let car2: { brand: string; year: number } = { brand: 'audi' };\n\nlet book = { title: 'book', cost: 20 };\nlet pen = { title: 'pen', cost: 5 };\nlet notebook = { title: 'notebook' };\n\nlet items: { readonly title: string; cost?: number }[] = [book, pen, notebook];\n\nitems[0].title = 'new book'; // Error: Cannot assign to 'title' because it is a read-only property" }
        ]
    },
    {
        "id": "challenge-objects",
        "title": "Challenge: Objects",
        "content": [
            { "type": "list", "items": ["Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.", "Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.", "Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it."] },
            { "type": "code", "language": "ts", "text": "// 1. Bike\nlet bike: { brand: string; year: number } = { brand: 'Yamaha', year: 2010 };\n// bike.year = 'old'; // This will result in a TypeScript error\n\n// 2. Laptop\nlet laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };\n// let laptop2: { brand: string, year: number } = { brand: 'HP' }; // This will result in a TypeScript error\n\n// 3. Products\nlet product1 = { title: 'Shirt', price: 20 };\nlet product2 = { title: 'Pants' };\nlet products: { title: string; price?: number }[] = [product1, product2];\n// products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error" }
        ]
    },
    {
        "id": "functions-fundamentals",
        "title": "Functions - Fundamentals",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, functions can have typed parameters and return values, which provides static type checking and autocompletion support." },
            { "type": "code", "language": "ts", "text": "function sayHi(name: string) {\n  console.log(`Hello there ${name.toUpperCase()}!!!`);\n}\n\nsayHi('john');\n// sayHi(3)\n// sayHi('peter', 'random');\n\nfunction calculateDiscount(price: number): number {\n  // price.toUpperCase();\n  const hasDiscount = true;\n  if (hasDiscount) {\n    return price;\n    // return 'Discount Applied';\n  }\n  return price * 0.9;\n}\n\nconst finalPrice = calculateDiscount(200);\nconsole.log(finalPrice);\n\n// \"any\" example\nfunction addThree(number: any) {\n  let anotherNumber: number = 3;\n  return number + anotherNumber;\n}\nconst result = addThree(2);\nconst someValue = result;\n\n// run time error\nsomeValue.myMethod();" }
        ]
    },
    {
        "id": "challenge-functions",
        "title": "Challenge: Functions",
        "content": [
            { "type": "list", "items": ["Create a new array of names.", "Write a new function that checks if a name is in your array. This function should take a name as a parameter and return a boolean.", "Use this function to check if various names are in your array and log the results."] },
            { "type": "code", "language": "ts", "text": "const names: string[] = ['John', 'Jane', 'Jim', 'Jill'];\n\nfunction isNameInList(name: string): boolean {\n  return names.includes(name);\n}\n\nlet nameToCheck: string = 'Jane';\nif (isNameInList(nameToCheck)) {\n  console.log(`${nameToCheck} is in the list.`);\n} else {\n  console.log(`${nameToCheck} is not in the list.`);\n}" }
        ]
    },
    {
        "id": "functions-optional-and-default-parameters",
        "title": "Functions - Optional and Default Parameters",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, a default parameter value is an alternative to an optional parameter. When you provide a default value for a parameter, you're essentially making it optional because you're specifying a value that the function will use if no argument is provided for that parameter." },
            { "type": "paragraph", "text": "However, there's a key difference between a parameter with a default value and an optional parameter. If a parameter has a default value, and you call the function without providing an argument for that parameter, the function will use the default value. But if a parameter is optional (indicated with a ?), and you call the function without providing an argument for that parameter, the value of the parameter inside the function will be undefined." },
            { "type": "list", "items": ["a function with optional parameters must work when they are not supplied"] },
            { "type": "code", "language": "ts", "text": "function calculatePrice(price: number, discount?: number) {\n  return price - (discount || 0);\n}\n\nlet priceAfterDiscount = calculatePrice(100, 20);\nconsole.log(priceAfterDiscount); // Output: 80\n\nlet priceWithoutDiscount = calculatePrice(300);\nconsole.log(priceWithoutDiscount); // Output: 300\n\nfunction calculateScore(initialScore: number, penaltyPoints: number = 0) {\n  return initialScore - penaltyPoints;\n}\n\nlet scoreAfterPenalty = calculateScore(100, 20);\nconsole.log(scoreAfterPenalty); // Output: 80\n\nlet scoreWithoutPenalty = calculateScore(300);\nconsole.log(scoreWithoutPenalty); // Output: 300" }
        ]
    },
    {
        "id": "function-rest-parameter",
        "title": "Function - rest parameter",
        "content": [
            { "type": "paragraph", "text": "In JavaScript, a rest parameter is denoted by three dots (...) before the parameter's name and allows a function to accept any number of arguments. These arguments are collected into an array, which can be accessed within the function." },
            { "type": "code", "language": "ts", "text": "function sum(message: string, ...numbers: number[]): string {\n  const doubled = numbers.map((num) => num * 2);\n  console.log(doubled);\n\n  let total = numbers.reduce((previous, current) => {\n    return previous + current;\n  }, 0);\n  return `${message} ${total}`;\n}\n\nlet result = sum('The total is:', 1, 2, 3, 4, 5); // result will be \"The total is: 15\"" }
        ]
    },
    {
        "id": "functions-void-return-type",
        "title": "Functions - \"void\" return type",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, void is a special type that represents the absence of a value. When used as a function return type, void indicates that the function does not return a value." },
            { "type": "code", "language": "ts", "text": "function logMessage(message: string): void {\n  console.log(message);\n}\n\nlogMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!" },
            { "type": "paragraph", "text": "It's important to note that in TypeScript, a function that is declared with a void return type can still return a value, but the value will be ignored.For example, the following code is valid TypeScript:" },
            { "type": "code", "language": "ts", "text": "function logMessage(message: string): void {\n  console.log(message);\n  return 'This value is ignored';\n}\n\nlogMessage('Hello, TypeScript!'); // Output: Hello, TypeScript!" }
        ]
    },
    {
        "id": "functions-using-union-types-as-function-parameters",
        "title": "Functions - Using Union Types as Function Parameters",
        "content": [
            { "type": "paragraph", "text": "Your task is to create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:\n- If the input is of type number, the function should multiply the number by 2 and log the result to the console.\n- If the input is of type string, the function should convert the string to uppercase and log the result to the console." },
            { "type": "code", "language": "ts", "text": "function processInput(input: string | number) {\n  if (typeof input === 'number') {\n    console.log(input * 2);\n  } else {\n    console.log(input.toUpperCase());\n  }\n}\n\nprocessInput(10); // Output: 20\nprocessInput('Hello'); // Output: HELLO" },
            { "type": "paragraph", "text": "In this example, the processInput function takes a parameter input that can be either a string or a number. Inside the function, we use a type guard (typeof input === 'number') to check the type of input at runtime. If input is a number, we double it. If input is a string, we convert it to uppercase." }
        ]
    },
    {
        "id": "functions-using-objects-as-function-parameters",
        "title": "Functions - Using Objects as Function Parameters",
        "content": [
            { "type": "code", "language": "ts", "text": "function createEmployee({ id }: { id: number }): {\n  id: number;\n  isActive: boolean;\n} {\n  return { id, isActive: id % 2 === 0 };\n}\n\nconst first = createEmployee({ id: 1 });\nconst second = createEmployee({ id: 2 });\nconsole.log(first, second);\n\n// alternative\nfunction createStudent(student: { id: number; name: string }) {\n  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);\n}\n\nconst newStudent = {\n  id: 5,\n  name: 'anna',\n};\n\ncreateStudent(newStudent);" }
        ]
    },
    {
        "id": "gotcha-excess-property-checks",
        "title": "Gotcha - Excess Property Checks",
        "content": [
            { "type": "code", "language": "ts", "text": "function createStudent(student: { id: number; name: string }) {\n  console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`);\n}\n\nconst newStudent = {\n  id: 5,\n  name: 'anna',\n  email: 'anna@gmail.com',\n};\n\ncreateStudent(newStudent);\ncreateStudent({ id: 1, name: 'bob', email: 'bob@gmail.com' });" },
            { "type": "paragraph", "text": "TypeScript only performs excess property checks on object literals where they're used, not on references to them." },
            { "type": "paragraph", "text": "In TypeScript, when you pass an object literal (like { id: 1, name: 'bob', email: 'bob@gmail.com' }) directly to a function or assign it to a variable with a specified type, TypeScript checks that the object only contains known properties. This is done to catch common errors." },
            { "type": "paragraph", "text": "However, when you pass newStudent to createStudent, TypeScript doesn't complain about the email property. This is because newStudent is not an object literal at the point where it's passed to createStudent." }
        ]
    },
    {
        "id": "challenge-advanced-functions",
        "title": "Challenge: Advanced Functions",
        "content": [
            { "type": "paragraph", "text": "Your task is to create a function named processData that accepts two parameters:\n\n- The first parameter, input, should be a union type that can be either a string or a number.\n- The second parameter, config, should be an object with a reverse property of type boolean, by default it \"reverse\" should be false\n\nThe function should behave as follows:\n\n- If input is of type number, the function should return the square of the number.\n- If input is of type string, the function should return the string in uppercase.\n- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase." },
            { "type": "code", "language": "ts", "text": "function processData(\n  input: string | number,\n  config: { reverse: boolean } = { reverse: false }\n): string | number {\n  if (typeof input === 'number') {\n    return input * input;\n  } else {\n    return config.reverse\n      ? input.toUpperCase().split('').reverse().join('')\n      : input.toUpperCase();\n  }\n}\n\nconsole.log(processData(10)); // Output: 100\nconsole.log(processData('Hello')); // Output: HELLO\nconsole.log(processData('Hello', { reverse: true })); // Output: OLLEH" }
        ]
    },
    {
        "id": "type-alias",
        "title": "Type Alias",
        "content": [
            { "type": "paragraph", "text": "A type alias in TypeScript is a new name or shorthand for an existing type, making it easier to reuse complex types. However, it's important to note that it doesn't create a new unique type - it's just an alias.All the same rules apply to the aliased type, including the ability to mark properties as optional or readonly." },
            { "type": "code", "language": "ts", "text": "const john: { id: number; name: string; isActive: boolean } = {\n  id: 1,\n  name: 'john',\n  isActive: true,\n};\nconst susan: { id: number; name: string; isActive: boolean } = {\n  id: 1,\n  name: 'susan',\n  isActive: false,\n};\n\nfunction createUser(user: { id: number; name: string; isActive: boolean }): {\n  id: number;\n  name: string;\n  isActive: boolean;\n} {\n  console.log(`Hello there ${user.name.toUpperCase()} !!!`);\n\n  return user;\n}" },
            { "type": "code", "language": "ts", "text": "type User = { id: number; name: string; isActive: boolean };\n\nconst john: User = {\n  id: 1,\n  name: 'john',\n  isActive: true,\n};\nconst susan: User = {\n  id: 1,\n  name: 'susan',\n  isActive: false,\n};\n\nfunction createUser(user: User): User {\n  console.log(`Hello there ${user.name.toUpperCase()} !!!`);\n  return user;\n}\n\ntype StringOrNumber = string | number; // Type alias for string | number\n\nlet value: StringOrNumber;\nvalue = 'hello'; // This is valid\nvalue = 123; // This is also valid\n\ntype Theme = 'light' | 'dark'; // Type alias for theme\n\nlet theme: Theme;\ntheme = 'light'; // This is valid\ntheme = 'dark'; // This is also valid\n\n// Function that accepts the Theme type alias\nfunction setTheme(t: Theme) {\n  theme = t;\n}\n\nsetTheme('dark'); // This will set the theme to 'dark'" }
        ]
    },
    {
        "id": "challenge-type-aliases",
        "title": "Challenge: Type Aliases",
        "content": [
            { "type": "list", "items": ["Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).", "Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).", "Create a Union Type: Define a type Staff that is a union of Employee and Manager.", "Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.", "Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.", "Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output."] },
            { "type": "code", "language": "ts", "text": "type Employee = { id: number; name: string; department: string };\ntype Manager = { id: number; name: string; employees: Employee[] };\n\ntype Staff = Employee | Manager;\n\nfunction printStaffDetails(staff: Staff) {\n  if ('employees' in staff) {\n    console.log(\n      `${staff.name} is a manager of ${staff.employees.length} employees.`\n    );\n  } else {\n    console.log(\n      `${staff.name} is an employee in the ${staff.department} department.`\n    );\n  }\n}\n\nconst alice: Employee = { id: 1, name: 'Alice', department: 'Sales' };\nconst steve: Employee = { id: 1, name: 'Steve', department: 'HR' };\nconst bob: Manager = { id: 2, name: 'Bob', employees: [alice, steve] };\n\nprintStaffDetails(alice); // Outputs: Alice is an employee in the Sales department.\nprintStaffDetails(bob);" }
        ]
    },
    {
        "id": "intersection-types",
        "title": "Intersection Types",
        "content": [
            { "type": "paragraph", "text": "In TypeScript, an intersection type (TypeA & TypeB) is a way of combining multiple types into one. This means that an object of an intersection type will have all the properties of TypeA and all the properties of TypeB. It's a way of creating a new type that merges the properties of existing types." },
            { "type": "code", "language": "ts", "text": "type Book = { id: number; name: string; price: number };\ntype DiscountedBook = Book & { discount: number };\nconst book1: Book = {\n  id: 2,\n  name: 'How to Cook a Dragon',\n  price: 15,\n};\n\nconst book2: Book = {\n  id: 3,\n  name: 'The Secret Life of Unicorns',\n  price: 18,\n};\n\nconst discountedBook: DiscountedBook = {\n  id: 4,\n  name: 'Gnomes vs. Goblins: The Ultimate Guide',\n  price: 25,\n  discount: 0.15,\n};" }
        ]
    },
    {
        "id": "type-alias-computed-properties",
        "title": "Type Alias - Computed Properties",
        "content": [
            { "type": "paragraph", "text": "Computed properties in JavaScript are a feature that allows you to dynamically create property keys on objects. This is done by wrapping an expression in square brackets [] that computes the property name when creating an object." },
            { "type": "code", "language": "ts", "text": "const propName = 'age';\n\ntype Animal = {\n  [propName]: number;\n};\n\nlet tiger: Animal = { [propName]: 5 };" }
        ]
    }
];

export const TUTORIALS: TutorialCollection = {
    nextjs: {
        name: "Next.js Tutorial Notes",
        notes: PARSED_NEXTJS_TUTORIAL_NOTES
    },
    typescript: {
        name: "TypeScript Tutorial Notes",
        notes: PARSED_TYPESCRIPT_TUTORIAL_NOTES
    }
}