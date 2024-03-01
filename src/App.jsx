import {Hero,Footer,CustomerReviews,
PopularProducts,Services,SpecialOffer,
Subscribe,SuperQuality} from "./sections"
import Nav from "./Components/Nav"
const App =()=>(
 
  <main className="relative">
      <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x py-32 p-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer />
    </section>

  </main>
)

export default  App;