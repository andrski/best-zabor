﻿import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <div ></div>
                <section className="footer-left">
                    <p>ЧТПУП «Дисса-Плюс»</p>
                    <p>Адрес:223232 Минская обл. г. Червень ул. Чапаева д.2, к.1</p>  
                    <p>Электронный адрес: dissa_plus0707@mail.ru</p>
                    <p>Дата регистрации 25.01.2008г.</p>
                    <p>УНП  690636136</p>
                    <p> Р/С BY06 BAPB 301321556001 0000 0000</p>
                    <p>ОАО Белагропромбанк г.Минск ,</p>
                    <p>БИК SWIFT BAPBBY2X</p>
                </section>
                <section className="footer-rigth">
                    <p>
                    Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер
                    и ни при каких условиях информационные материалы и цены, размещенные на сайте, не являются публичной офертой,
                    определяемой положениями Гражданского кодекса РБ. 
                    Для получения полной и достоверной информации о количестве и актуальных ценах связывайтесь с нами по указанным
                    на сайте контактам.
                    </p>
                </section>
                
            </div>
            );
    }
}

export default Footer;