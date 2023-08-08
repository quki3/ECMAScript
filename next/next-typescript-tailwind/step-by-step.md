1. `mkdir mnt`
2. `npx create-next-app@latest ./`
3. `npm run dev`
4. edit app/page.tsx
   ```js
   import { Fitting } from '@components'

   export default function Home() {
      returnn (
         <>
            <Fitting/>
         </>
      )
   }
   
   ```
5. config @components `mkdir components/index.ts`
   ```js
      import Fitting from "./Fitting"

      export {
         Fitting
      }
   ```
6. fit what have in ./fitting.tsx
   ```js
   const Fittinig = () => {
      const handle=()=>{}
      return (
         <main>
            <h1>title</h1>
            
            <CustomButton/>
         </main>
      )
   }
   ```
   
