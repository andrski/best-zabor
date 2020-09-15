import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                
                <div className="main-product">
                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                        <h2>Рабица</h2>
                    </header>
                    <footer className="product-price">от 35 рублей п.м.</footer>
                 </div>
                </section>

                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                          <h2>3D панели</h2>
                    </header>
                    <footer className="product-price">от 50 рублей п.м.</footer>
                 </div>
                </section>

                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                        <h2>Профнастил</h2>
                    </header>
                    <footer className="product-price">от 50 рублей п.м.</footer>
                 </div>
                </section>

                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                          <h2>Металоштакетник</h2>
                    </header>
                    <footer className="product-price">от 54 рубль п.м.</footer>
                 </div>
                </section>

                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                          <h2>Металоштакетник двусторонний</h2>
                    </header>
                    <footer className="product-price">от 63 рубля п.м.</footer>
                 </div>
                </section>

                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                          <h2>забор Сварной</h2>
                    </header>
                    <footer className="product-price">от 70 рублей п.м.</footer>
                 </div>
                </section>
                    
                <section className="wraper">
                    <div className="product">
                    <header className="product-head">
                          <h2>Кованый из металла</h2>
                    </header>
                    <footer className="product-price">от 100 рублей п.м.</footer>
                 </div>
                </section>

                </div>
             </div>
        );
    }
}

export default Main;