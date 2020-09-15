import React from 'react';

class Additional extends React.Component {
    render() {
        return (
            <div >
                {/* здесь можно редактировать кроме красного и синяго */}
                <h4  className="additional-info">
                    <div className="addit-warning">
                    Изготовление товаров перечисленых в дополнительных услугах осуществляется по согласованию
по контактам указанным в разделе контакты, так как фото товаров носят исключительно информационный характер и не являются
образцами. По телефону вы можете заказать изделие по вашему желанию.
                    </div>
                   
                </h4>
                <div className="main">
                <div className="main-product">
                <section className="wraper-addit">
                    <div className="product">
                    <header className="product-head">
                        <h2>Навесы</h2>
                    </header>
                    <footer className="product-price">цена договорная</footer>
                 </div>
                </section>

                <section className="wraper-addit">
                    <div className="product">
                    <header className="product-head">
                          <h2>Мангалы</h2>
                    </header>
                    <footer className="product-price">цена договорная</footer>
                 </div>
                </section>

                <section className="wraper-addit">
                    <div className="product">
                    <header className="product-head">
                        <h2>Ворота и калитки</h2>
                    </header>
                    <footer className="product-price">цена договорная</footer>
                 </div>
                </section>

                <section className="wraper-addit">
                    <div className="product">
                    <header className="product-head">
                          <h2>Скамейки</h2>
                    </header>
                    <footer className="product-price">цена договорная</footer>
                 </div>
                </section>

                <section className="wraper-addit">
                    <div className="product">
                    <header className="product-head">
                          <h2>Садовые качели</h2>
                    </header>
                    <footer className="product-price">цена договорная</footer>
                 </div>
                </section>

                <section className="wraper-addit">
                    <div className="product">
                    <header className="product-head">
                          <h2>Цветочницы</h2>
                    </header>
                    <footer className="product-price">цена договорная</footer>
                 </div>
                </section>   

                </div>
                </div>
                
            </div>
        );
    }
}

export default Additional;