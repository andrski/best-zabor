import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: 35,
            length: 1,
            heigth: 1, 
            price: 0,   
        };
    
       this.setZaborKind = this.setZaborKind.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       
      }
     
      setZaborKind(event) {
        this.setState({kind: event.target.value});
      }
    
      handleSubmit(event) {
        // alert('Your favorite flavor is: ' + this.state.value);
        // this.handleChange(event);
        //const val = this.state.value;
        event.preventDefault();
      }

      setLength = (e)=>{
        this.setState({
          length: e.target.value,
        });
    }

      setHeigth = (e)=>{
        this.setState({
          heigth: e.target.value,
        });
      }

      setPrise = ()=>{
       
        this.setState((state) => {
          const zaborKind = +this.state.kind;
          const leng = +this.state.length;
          const heigth = +this.state.heigth;
          const endPrice = Math.round(zaborKind*leng*heigth);
            return {
                price: endPrice,
            };
        });
      }
    
      render() {
        return (
            <div>
<section>
  <h2>РАСЧЕТ ЦЕНЫ ЗАБОРА ОНЛАЙН.</h2>
  <p className="calc-info">
  С помощью нашего онлайн калькулятора у вас есть возможность быстро рассчитать цену материалов для вашего забора
или стоимость забора «под ключ» с точностью до 90%. Просто заполните все поля, которые в нем указаны,
и он мгновенно произведёт все вычисления, и выдаст предворительную стоимость забора без «подводных» камней.
Цена забора зависит от выбранных вами параметров.
Точный расчет стоимости вашего забора будет определен только после выезда нашего специалиста на объект
( в случае приобретения забора с монтажом).
Данный сметный расчет не является офертой.
Расчет цены забора, произведенный с помочью нашего калькулятора точен на 90%, в случае, если все данные
были внесены верно. Калькулятор не может учесть специфических условий местности, наличие растительности,
преград, ограждений, вдоль линии монтажа, канавы и ваши личные пожелания.
Всё это может повлиять на стоимость монтажных работ. Так же вы можете приобрести только материалы на нашем складе по указанному адресу.
  </p>

</section>
<div className="calc-forms">
        <form onSubmit={this.handleSubmit}>
            <label>
              Выберите вид забора
              <select value={this.state.value} onChange={this.setZaborKind}>
                <option value={35}>Рабица</option>
                <option value={50}>Профнастил</option>
                <option value={70}>Сварной</option>
                <option value={50}>3D панели</option>
                <option value={100}>Кованный</option>
                <option value={54}>Штакетник шаг 2 см</option>
                <option value={53}>Штакетник шаг 3 см</option>
                <option value={52}>Штакетник шаг 4 см</option>
                <option value={51}>Штакетник шаг 5 см</option>
                <option value={76}>Штакетник двусторонний шаг 5 см</option>
                <option value={73}>Штакетник двусторонний шаг 6 см</option>
                <option value={70}>Штакетник двусторонний шаг 7 см</option>
                <option value={67}>Штакетник двусторонний шаг 8 см</option>
                <option value={63}>Штакетник двусторонний шаг 9 см</option>
              </select>
            </label>
          {/* <input type="submit" value="Submit" /> */}
        </form>

        <label>
          Ведите количество погонных метров: 
          <input type="number" name="length" required={true} min={1}
          placeholder="количество метров"  onChange={this.setLength}/>
        </label>

        <form onChange={this.setHeigth}>
            <label>
              Выберите высоту забора
              <select value={this.state.value} onChange={this.setHeigth}>
                <option value={1.0}>1 метр 20 сантиметров</option>
                <option value={1.2}>1 метр 50 сантиметров</option>
                <option value={1.35}>1 метр 70 сантиметров</option>
                <option value={1.41}>1 метр 80 сантиметров</option>
                <option value={1.57}>2 метра</option>
                </select>
            </label>
        </form>
        </div>
        {/* <label>
          Ведите высоту: 
          <input type="number" name="heigth" required={true} min={1}
          placeholder="высота забора"  onChange={this.setHeigth}/>м.
        </label> */}

        {/* <p>{this.state.kind}</p>
        <p>length:  {this.state.length}</p>
        <p>hiegth: {this.state.heigth}</p> */}
        <h4>Предварительная стоимость:  {this.state.price} руб.</h4>
        
        <input onClick={this.setPrise} type="button" className="button4" value="Рассчитать" />

        <section>
        <p className="calc-contact">В случае возникновения вопросов или отсутствия нужных вам параметров
  просим позвонить по телефону +375 (29) 8535432 и мы рассчитаем забор
  с учетом ваших пожеланий и параметров!!!</p>
        </section>


            </div>
         );
      }
}

export default Calculator;