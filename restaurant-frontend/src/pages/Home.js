function HomePages() {
  return (
    <>
      <h3 align="center" style={{ color: 'black', margin: '25px' }} className="mt-4">Welcome to MyRes</h3>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ margin: '30px' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" align="center">
            <img src="https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1702481237.jpg" className="d-block w-75" style={{ height: '570px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Italian Delicacies</h3>
              <p>-Saporiti Piatti-</p>
              <p>"Flavorful Dishes"</p>
            </div>
          </div>
          <div className="carousel-item" align="center">
            <img src="https://www.emborg.com/app/uploads/2023/06/1600x450px_Classic_Tiramisu.png" className="d-block w-75" style={{ height: '570px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Tiramisu</h5>
              <p>Feels like heaven</p>
              <p></p>
            </div>
          </div>
          <div className="carousel-item" align="center">
            <img src="https://images.unsplash.com/photo-1532269748385-a458d8ee473e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fG1vY2t0YWlsJTIwZHJpbmt8ZW58MHx8fHwxNzAyNjcwMDU5fDA&ixlib=rb-4.0.3&q=80&w=1000" className="d-block w-75" style={{ height: '570px' }} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Mocktails</h5>
              <p>The perfect blend of flavors in every sip.</p>
              <p></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div class="row" align="center">
      <h4 align="center" style={{ color: 'black', margin: '25px' }}>Core</h4>

        <div class="card col m-5" style={{ width: "18rem" }}>

          <img src="https://gourmetlandtenerife.com/wp-content/uploads/2023/09/pasta-1-372x670.jpg" class="card-img-top mt-5" style={{ height: '600px' }} alt="..." />
          <div class="card-body">
            <p class="card-text">Italian cuisine is loved all over the world for its simplicity, freshness and unmistakable flavour. Its unique characteristics have made Italian cuisine one of the most appreciated on the planet. In this article, we will explore the distinctive characteristics that make Italian food so special and why it is so popular in every corner of the globe.</p>
          </div>
        </div>
        <div class="card col m-5" style={{ width: "18rem" }}>

          <img src="https://i.vimeocdn.com/video/1769442665-d3bc4225f68bd3b79c64f786003564b4a4ba508d625d1b35fc1fea19f51cbee9-d_640"style={{ height: '600px' }} class="card-img-top mt-5" alt="..." />
          <div class="card-body">
            <p class="card-text">Tiramisu is an Italian dessert made of ladyfinger pastries (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone, and flavoured with cocoa.</p>
          </div>
        </div>

        <div class="card col m-5" style={{ width: "18rem" }}>

          <img src="https://media.istockphoto.com/id/1434821027/photo/variety-of-fall-cocktails-or-mocktails-made-with-apple-cider.jpg?s=612x612&w=0&k=20&c=5Qzyn_czyjQcNglTxWYI-vZ26xM8IV8lVUGZy3dT_yE=" style={{ height: '600px' }} class="card-img-top mt-5" alt="..." />
          <div class="card-body">
            <p class="card-text">Mocktails are specially crafted mixed drinks, usually by the bar program at restaurants or bars themselves, to be similar to cocktails but without liquor and other alcohol-based components.Mocktails are more than just a cup of juice.</p>
          </div>
        </div>
      </div>

      <div class="row" align="center">
      <h4 align="center" style={{ color: 'black', margin: '25px' }}>Freshly Launched</h4>

        <div class="card col m-5" style={{ width: "18rem" }}>
          <div class="row">
          <div className="col-6">
            <img src="https://mattadlard.com/wp-content/uploads/2024/08/Strawberry-Cheesecake-Gelato-1.png" class="card-img-top mt-5" style={{ height: '600px', width: "379.46px"}} alt="..." />
          </div>
          <div className="col-6">
          <img src="https://i.vimeocdn.com/video/1821790469-c65401f3148687a7688416164ffc4f5c88f5bda41fd62e8bbe265409f82e7df0-d_640" class="card-img-top mt-5" style={{ height: '600px', width: "379.46px"}} alt="..." />
          </div>
          </div>
          <div class="card-body">
            <p class="card-text">Cheesecake, a dessert consisting of a thick, creamy filling of cheese, eggs, and sugar over a thinner crust and topped with sweet or sometimes salty items. Typical toppings include sour cream, fruit sauces, chocolate or caramel syrup, nuts, whipped cream, or pieces of fruit. Other variations around the world use a coarser, lighter ricotta cheese (as in Italy) or quark.
            </p>
            <br/>
            <p>And we are delighted to finally present to you the best Cheesecakes in town.</p>
          </div>
        </div>
        </div>
    </>
  );
}

export default HomePages;
